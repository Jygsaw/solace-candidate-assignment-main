import type { Metadata } from "next";
import AdvocatesSearch from "./AdvocatesSearch";

export const metadata: Metadata = {
  title: "Solace Advocate Search",
  description: "Find your next advocate",
};

export default function Advocates() {
  return <AdvocatesSearch />;
}
