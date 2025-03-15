import { CustomError } from "./CustomError";

export class ConflictError extends CustomError {
  statusCode: number = 409;
  constructor(msg: string = "Conflict") {
    super(msg);
  }
  serializeErrors(): { message: string; field?: string }[] {
    return [{ message: this.message }];
  }
}
