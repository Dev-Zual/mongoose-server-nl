import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDb = async (userData: IUser): Promise<IUser> => {
  // creating instance
  const user = new User(userData); // User --> class, user --> instance
  await user.save(); //  build in instance methods : we build our custom instance methods
  console.log(user.fullName());
  return user;
};
export const getAllUserService = async (): Promise<IUser[]> => {
  return await User.find();
};
export const getUserByIdService = async (id: string): Promise<IUser | null> => {
  return await User.findOne({ id }, { name: 1 });
};

export const getAllAdminUserService = async () => {};
