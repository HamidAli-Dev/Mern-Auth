import { ErrorRequestHandler } from "express";
import { HTTPSTATUS } from "../config/http.config";
import { AppError } from "../common/utils/AppError";

export const errorHandler: ErrorRequestHandler = (
  error,
  req,
  res,
  next
): any => {
  console.log(`Error occurred on Path: ${req.path} with error: ${error}`);

  if (error instanceof SyntaxError) {
    return res.status(HTTPSTATUS.BAD_REQUEST).json({
      message: "Invalid json format, please check your request body",
    });
  }

  if (error instanceof AppError) {
    return res.status(HTTPSTATUS.BAD_REQUEST).json({
      message: error.message,
      errorCode: error.errorCode,
    });
  }

  res.status(HTTPSTATUS.INTERNAL_SERVER_ERROR).json({
    message: "Internal Server Error",
    error: error.message || "Something went wrong",
  });
};
