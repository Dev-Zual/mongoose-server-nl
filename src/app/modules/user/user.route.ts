import express from "express";
import { createUser, getAllUser } from "./user.controller";

const router = express.Router();

router.get("/", getAllUser);
router.post("/create", createUser);

export default router;
