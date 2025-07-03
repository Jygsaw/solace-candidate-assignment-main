export type Advocate = {
  id: number;
  firstName: string;
  lastName: string;
  city: string;
  degree: Degree;
  specialties: string[];
  yearsOfExperience: number;
  phoneNumber: number;
};

type Degree = "MD" | "MSW" | "PhD" ;
