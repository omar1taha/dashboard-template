export interface Payload<T> {
  users: [T];
  total: number;
  skip: number;
  limit: number;
}

//fake user type that reflects user data retur by mock api used
export type User = {
  id: number;
  age: number;
  gender: boolean;
  birthDate: string;
};

//real type used in form 
export type Domain = {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNo: string;
};
