import { CustomError } from "./CustomError";

export class NotAuthorizedError extends CustomError {
  statusCode: number = 401;
  constructor(msg: string = "Not authorized") {
    super(msg);
  }
  serializeErrors(): { message: string; field?: string }[] {
    return [{ message: this.message }];
  }
}
