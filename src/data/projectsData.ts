
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
  secproject1,
   secproject2,
  secproject3,
  secproject4,
  secproject5,

  secproject6,
  secproject7,
  secproject8,
  secproject9,
  secproject10,
  secproject11,
  secproject12,
  secproject13,
  secproject14,
  secproject15,
kp1,kp2,kp3,kp4,kp5
} from "./projectImages";


export type Project = {
  image: string;
  images?: string[];
  title: string;
  type: string;
  description?: string;
  sqft?: string;
};

export const projects: Project[] = [
  {
    image:   project9,
    title: "SHAMANADH, Decentmukku Navaikulam",
    type: "Residential",
    images: [
      project1,
      project2,
      project3,
      project4,
      project5,
      project6,
      project7,
      project8,
      project9,
    ],
    description:
      "This 3BHK urban home blends modern style with functional interiors.",
    sqft: "1800sqft",
  },
  {
    image: secproject10,
    title: "RASEENA, Pavalla Kallambalam ",
    type: "Interior",
    images: [
      secproject2,
  secproject3,
  secproject4,
  secproject5,

  secproject6,
  secproject7,
  secproject8,
  secproject9,
  secproject1,
  secproject11,
  secproject12,
  secproject13,
  secproject14,
  secproject15,
    ],
    description: "Elegant villa with exquisite interiors and outdoor spaces.",
    sqft:'2500sqft',
  },
  {
    image:   kp1,
    title: "Decentmukku Navaikulam",
    type: "Residential",
    images: [
      kp1,
      kp2,
      kp3,
      kp4,
      kp5
    ],
    description:
      "This 4BHK urban home blends modern style with functional interiors.",
    sqft: "2600sqft",
  },
];
