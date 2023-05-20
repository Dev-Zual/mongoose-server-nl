import mongoose from "mongoose";
import app from "./app";
const port: number = 5000;

// database connection
async function database() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mongoose-practice");
    console.log(`Database connection successful`);
    app.listen(port, () => {
      console.log(`Server running at port ${port}`);
    });
  } catch (error) {
    console.log(`Database connection failed`, error);
  }
}

database();
