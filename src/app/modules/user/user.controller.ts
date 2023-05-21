import { NextFunction, Request, Response, response } from "express";
import {
  createUserToDb,
  getAllUserService,
  getUserByIdService,
} from "./user.service";

export const getAllUser = async (req: Request, res: Response) => {
  const result = await getAllUserService();
  res.status(200).json({
    status: "success",
    data: result,
  });
};
export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await getUserByIdService(id);
  res.status(200).json({
    status: "success",
    data: result,
  });
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userData = req.body;
  const user = await createUserToDb(userData);
  res.status(200).json({
    message: "successfully created user",
    data: user,
  });
};
