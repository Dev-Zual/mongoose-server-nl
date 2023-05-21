import User from "./user.model";

export const getAllUserService = async () => {
  return await User.find({});
};

export const createUserToDb = async () => {
  // creating instance
  const user = new User({
    id: "12345678",
    role: "student",
    password: "12345678",
    name: {
      firstName: "zual",
      lastName: "rana",
    },
    gender: "male",
    email: "email@.com",
    contactNo: "017",
    emergencyContactNo: "016",
    presentAddress: "jamalpur",
    permanentAddress: "jamalpur",
  });
  await user.save();
  return user;
};
