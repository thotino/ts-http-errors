import { CustomError } from "./CustomError";

export class BadRequestError extends CustomError {
  statusCode: number = 400;
  constructor(msg: string = "Bad request") {
    super(msg);
  }
  serializeErrors(): { message: string; field?: string }[] {
    return [{ message: this.message }];
  }
}
