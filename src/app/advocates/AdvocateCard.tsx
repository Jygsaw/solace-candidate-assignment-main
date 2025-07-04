import type { Advocate } from "@/types/Advocates";
import { getDisplayName } from "./utils";

type Props = {
  advocate: Advocate;
}

export default function AdvocateCard({ advocate }: Props) {
  return (
    <article className="advocate-card">
      <div>Name: {getDisplayName(advocate)}</div>
      <div>City: {advocate.city}</div>
      <div>Degree: {advocate.degree}</div>
      <div>Specialties: {advocate.specialties}</div>
      <div>Experience: {advocate.yearsOfExperience}</div>
      <div>Phone: {advocate.phoneNumber}</div>
    </article>
  );
}
