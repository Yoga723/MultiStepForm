export interface circleArr {
  number: number;
  title: string;
  pathName: string;
}

export interface navigateProps {
  backTo?: string;
  headTo: string;
  stepState?: string;
  formData?: object;
}

interface summaryProps {
  name: string;
  email: string;
  phoneNumber: undefined | number;
}

export const handlePersonalData = ({ name, email, phoneNumber }: any) => {
  console.log(
    "Hello ini log fungsi dari personalData!!!!" + name,
    email,
    phoneNumber
  );
};

export const summaryData: summaryProps = {
  name: "yoga pangestu",
  email: "askjdsakjdks",
  phoneNumber: 0,
};

export const circleArr: circleArr[] = [
  { number: 1, title: "YOUR INFO", pathName: "/" },
  { number: 2, title: "SELECT PLAN", pathName: "/plan" },
  { number: 3, title: "ADD-ONS", pathName: "/add-ons" },
  { number: 4, title: "SUMMARY", pathName: "/summary" },
];
