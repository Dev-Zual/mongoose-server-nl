export interface IUser {
  id: string;
  role: "student";
  password: string;

  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  dateOfBirth?: string;
  gender: "male" | "female" | "other";
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
}

export interface IUserMethods {
  fullName(): string;
}

export interface IAdminMethods {
  getAdmin(): IUser[] | null;
}
