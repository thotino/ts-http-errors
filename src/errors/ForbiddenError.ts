import { CustomError } from "./CustomError";

export class ForbiddenError extends CustomError {
  statusCode: number = 403;
  /**
   *
   */
  constructor(msg: string = "Operation forbidden") {
    super(msg);
  }
  serializeErrors(): { message: string; field?: string }[] {
    return [{ message: this.message }];
  }
}
