import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDb = async (userData: IUser): Promise<IUser> => {
  // creating instance
  const user = new User(userData);
  await user.save();
  return user;
};
export const getAllUserService = async () => {
  return await User.find({});
};
