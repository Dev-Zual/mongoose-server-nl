import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
const port = 5000;

app.use(cors());

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

app.get("/", (req, res) => {
  res.send("Hello World!");
});

database();
