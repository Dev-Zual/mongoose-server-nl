import express from "express";
import { createUser, getAllUser, getUserById } from "./user.controller";

const router = express.Router();

router.get("/", getAllUser);
router.get("/:id", getUserById);
router.post("/create-user", createUser);

export default router;
