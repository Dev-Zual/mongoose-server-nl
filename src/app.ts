import express, {
  Application,
  NextFunction,
  Request,
  Response,
  urlencoded,
} from "express";
import cors from "cors";
import mongoose, { Schema, model } from "mongoose";
const app: Application = express();
// using cors
app.use(cors());
// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  // inserting a test data into mongodb
  /* 
    step1: Interface
    step2: Schema
    step3: Model
    step4: Database Query on model
 */

  //creating a interface
  interface IUser {
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

  // creating schema
  const userSchema = new Schema<IUser>({
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

  // creating model
  const User = model<IUser>("User", userSchema);

  const createUserToDb = async () => {
    // creating instance
    const user = new User({
      id: "1234",
      role: "student",
      password: "1234",
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
    console.log(user);
  };
  createUserToDb();
  // res.send("Hello World!");
  // next();
});

export default app;
