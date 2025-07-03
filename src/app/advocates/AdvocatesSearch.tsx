"use client";

import { useEffect, useState, ChangeEvent } from "react";
import type { Advocate } from "@/types/Advocates";

export default function AdvocatesSearch() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [advocates, setAdvocates] = useState<Advocate[]>([]);

  const advocateFilter = (advocate: Advocate) => {
    return (
      advocate.firstName.includes(searchTerm) ||
      advocate.lastName.includes(searchTerm) ||
      advocate.city.includes(searchTerm) ||
      advocate.degree.includes(searchTerm) ||
      advocate.specialties.includes(searchTerm) ||
      advocate.yearsOfExperience.toString().includes(searchTerm) ||
      advocate.phoneNumber.toString().includes(searchTerm)
    );
  };

  useEffect(() => {
    fetch("/api/advocates").then((response) => {
      response.json().then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
      });
    });
  }, []);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value);

  const onSearchReset = () => setSearchTerm('');

  return (
    <main style={{ margin: "24px" }}>
      <h1>Solace Advocates</h1>
      <br />
      <br />
      <div>
        <p>Search</p>
        <p>
          Searching for: <span id="search-term">{searchTerm}</span>
        </p>
        <input style={{ border: "1px solid black" }} onChange={onSearchChange} value={searchTerm} />
        <button onClick={onSearchReset}>Reset Search</button>
      </div>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>City</th>
            <th>Degree</th>
            <th>Specialties</th>
            <th>Years of Experience</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {advocates.filter(advocateFilter).map((advocate) => {
            return (
              <tr key={advocate.id}>
                <td>{advocate.firstName}</td>
                <td>{advocate.lastName}</td>
                <td>{advocate.city}</td>
                <td>{advocate.degree}</td>
                <td>
                  {advocate.specialties.map((s) => (
                    <div key={s}>{s}</div>
                  ))}
                </td>
                <td>{advocate.yearsOfExperience}</td>
                <td>{advocate.phoneNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
