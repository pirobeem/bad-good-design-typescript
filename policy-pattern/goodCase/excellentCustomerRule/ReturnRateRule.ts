import { PurchaseHistory } from "../../interfaces/PurchaseHistory";
import { IExcellentCustomerRule } from "./IExcellentCustomerRule";

export class ReturnRateRule implements IExcellentCustomerRule {
  ok(history: PurchaseHistory) {
    return history.returnRate <= 0.001;
  }
}
