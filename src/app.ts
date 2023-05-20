import express, {
  Application,
  NextFunction,
  Request,
  Response,
  urlencoded,
} from "express";
import cors from "cors";
import mongoose, { Schema, model } from "mongoose";
import userRoutes from "./app/modules/user/user.route";
const app: Application = express();
// using cors
app.use(cors());
// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRoutes);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  // inserting a test data into mongodb
  /* 
    step1: Interface
    step2: Schema
    step3: Model
    step4: Database Query on model
 */

  //creating a interface

  // creating schema

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
