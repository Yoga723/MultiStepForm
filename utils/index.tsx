export interface circleArr {
  number: number;
  title: string;
  pathName: string;
}

export interface navigateProps {
  backTo?: string;
  headTo: string;
}

export const circleArr: circleArr[] = [
  { number: 1, title: "YOUR INFO", pathName: "/" },
  { number: 2, title: "SELECT PLAN", pathName: "/plan" },
  { number: 3, title: "ADD-ONS", pathName: "/add-ons" },
  { number: 4, title: "SUMMARY", pathName: "/summary" },
];