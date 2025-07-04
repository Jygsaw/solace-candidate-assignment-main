"use client";

import { useEffect, useState, ChangeEvent } from "react";
import type { Advocate } from "@/types/Advocates";
import AdvocateCard from "./AdvocateCard";
import { getDisplayName } from "./utils";
import "./advocates.css";

type SortOrder = typeof SortOrders[keyof typeof SortOrders];
const SortOrders = {
  nameAsc: 'nameAsc',
  nameDesc: 'nameDesc',
  expAsc: 'expAsc',
  expDesc: 'expDesc',
} as const;

export default function AdvocatesSearch() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrders.nameAsc);
  const [advocates, setAdvocates] = useState<Advocate[]>([]);

  const advocateFilter = (advocate: Advocate) => {
    const loweredSearchTerm = searchTerm.toLowerCase();
    return (
      getDisplayName(advocate).toLowerCase().includes(loweredSearchTerm) ||
      advocate.city.toLowerCase().includes(loweredSearchTerm) ||
      advocate.degree.toLowerCase().includes(loweredSearchTerm) ||
      advocate.specialties.some(elem => elem.toLowerCase().includes(loweredSearchTerm)) ||
      advocate.yearsOfExperience.toString().includes(loweredSearchTerm) ||
      advocate.phoneNumber.toString().includes(loweredSearchTerm)
    );
  };

  const advocateSort = ((a: Advocate, b: Advocate) => {
    if (sortOrder === SortOrders.nameAsc) {
      const displayNameA = getDisplayName(a);
      const displayNameB = getDisplayName(b);
      return displayNameA.localeCompare(displayNameB);
    } else if (sortOrder === SortOrders.nameDesc) {
      const displayNameA = getDisplayName(a);
      const displayNameB = getDisplayName(b);
      return displayNameB.localeCompare(displayNameA);
    } else if (sortOrder === SortOrders.expAsc) {
      return a.yearsOfExperience - b.yearsOfExperience;
    } else if (sortOrder === SortOrders.expDesc) {
      return b.yearsOfExperience - a.yearsOfExperience;
    } else {
      return 0;
    }
  })

  useEffect(() => {
    fetch("/api/advocates").then((response) => {
      response.json().then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
      });
    });
  }, []);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value);

  const onSearchReset = () => setSearchTerm('');

  const onSortOrderChange = (e: ChangeEvent<HTMLSelectElement>) => setSortOrder(e.target.value);

  return (
    <main className="advocates-search">
      <h1 className="page-title">Solace Advocates</h1>
      <section className="search-form-container">
        Quick filter:
        <input style={{ border: "1px solid black" }} onChange={onSearchChange} value={searchTerm} />
        <button onClick={onSearchReset}>Reset</button>
        <select onChange={onSortOrderChange}>
          <option value={SortOrders.nameAsc}>Name DownArrow</option>
          <option value={SortOrders.nameDesc}>Name UpArrow</option>
          <option value={SortOrders.expDesc}>Experience DownArrow</option>
          <option value={SortOrders.expAsc}>Experience UpArrow</option>
        </select>
      </section>
      <section className="search-results-container">
        {advocates.filter(advocateFilter).sort(advocateSort).map((advocate) => (
          <div className="search-item">
            <div className="card-wrapper">
              <AdvocateCard advocate={advocate} />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
