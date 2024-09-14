import { ValidationError } from "express-validator";
import { CustomError } from "./CustomError";

export class RequestValidationError extends CustomError {
  statusCode: number = 400;

  constructor(private errors: ValidationError[]) {
    super("Invalid request parameters");
  }
  serializeErrors(): { message: string; field?: string }[] {
    return this.errors.map((err) => ({
      message: err.msg,
      field: err.type === "field" ? err.path : err.type,
    }));
  }
}
