import express from "express";
import {
  createUser,
  getAdminUser,
  getAllUser,
  getUserById,
} from "./user.controller";

const router = express.Router();

router.get("/", getAllUser);
router.get("/get-all-admin", getAdminUser);
router.get("/:id", getUserById);
router.post("/create-user", createUser);

export default router;
