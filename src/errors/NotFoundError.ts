import { CustomError } from "./CustomError";

export class NotFoundError extends CustomError {
  statusCode: number = 404;
  constructor(msg: string = "Resource not found") {
    super(msg);
  }
  serializeErrors(): { message: string; field?: string }[] {
    return [{ message: this.message }];
  }
}
