export interface TableData {
  businessName: string;
  name: string;
  phone: string;
  signedUp: string;
}

export interface ChartData {
  date: string;
  signUps: number;
}

interface User {
  businessName: string;
  name: string;
  phone: string;
  signedUp: string;
}

export interface UserTableProps {
  data: User[];
}