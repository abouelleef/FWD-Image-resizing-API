import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorMW: ErrorRequestHandler = (err: Error, req: Request, res: Response, _next: NextFunction): void => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export default errorMW;
