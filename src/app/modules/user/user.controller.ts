import { NextFunction, Request, Response, response } from "express";
import { createUserToDb, getAllUserService } from "./user.service";

export const getAllUser = async (req: Request, res: Response) => {
  const result = await getAllUserService();
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
  const user = await createUserToDb();
  res.status(200).json({
    message: "successfully created user",
    data: user,
  });
};
