import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDb = async (userData: IUser): Promise<IUser> => {
  // creating instance
  const user = new User(userData);
  await user.save();
  return user;
};
export const getAllUserService = async (): Promise<IUser[]> => {
  return await User.find();
};
export const getUserByIdService = async (id: string): Promise<IUser | null> => {
  return await User.findOne({ id });
};
