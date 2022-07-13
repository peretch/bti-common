import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom-error';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }
  // Here we are going to make an implemntation to loggin unexpected errors
  console.error(err);
  res.status(400).send({
    errors: [{ message: 'Something went wrong' }],
  });
};
