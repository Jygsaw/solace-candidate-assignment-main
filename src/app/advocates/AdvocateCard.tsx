import type { Advocate } from "@/types/Advocates";
import { getDisplayName } from "./utils";

type Props = {
  advocate: Advocate;
}

export default function AdvocateCard({ advocate }: Props) {
  return (
    <article className="advocate-card">
      <div className="profile">
        <div className="headshot">IMG GOES HERE</div>
        <div className="details">
          <div>Name: {getDisplayName(advocate)}</div>
          <div>City: {advocate.city}</div>
          <div>Degree: {advocate.degree}</div>
          <div>Experience: {advocate.yearsOfExperience}</div>
          <div>Phone: {advocate.phoneNumber}</div>
        </div>
      </div>
      <div className="specialties">
        <div className="title">Specialties</div>
        <ul>
          {advocate.specialties.map(elem => <li key={`${advocate.id}-${elem}`}>{elem}</li>)}
        </ul>
      </div>
    </article>
  );
}
