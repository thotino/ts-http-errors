import { CustomError } from "./CustomError";

export class PaymentRequiredError extends CustomError {
  statusCode: number = 402;
  constructor(msg: string = "Payment required") {
    super(msg);
  }
  serializeErrors(): { message: string; field?: string }[] {
    return [{ message: this.message }];
  }
}
