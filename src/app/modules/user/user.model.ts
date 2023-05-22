import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

// instance methods only
// type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
    },
    lastName: { type: String, required: true },
  },
  dateOfBirth: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
  },

  email: { type: String, required: true },
  contactNo: {
    type: String,
    required: true,
  },
  emergencyContactNo: {
    type: String,
    required: true,
  },
  presentAddress: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
});

userSchema.static("getAdminUsers", async function getAdminUsers(): Promise<
  IUser[]
> {
  const admins = await this.find({ role: "admin" });
  return admins;
});

userSchema.method("fullName", function fullName() {
  return this.name.firstName + " " + this.name.lastName;
});

// creating model
const User = model<IUser, UserModel>("User", userSchema);
export default User;

// instance methods --> instance er methods
// class -> instance + methods ----> instance methods
