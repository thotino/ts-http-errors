import { CustomError } from "./CustomError";

export class RequestTimeoutError extends CustomError {
  statusCode: number = 408;
  /**
   *
   */
  constructor(msg: string = "Request timeout") {
    super(msg);
  }
  serializeErrors(): { message: string; field?: string }[] {
    return [{ message: this.message }];
  }
}
