import { PurchaseHistory } from "../../interfaces/PurchaseHistory";
import { IExcellentCustomerRule } from "./IExcellentCustomerRule";

export class GoldCustomerPurchaseAmountRule implements IExcellentCustomerRule {
  ok(history: PurchaseHistory) {
    return history.totalAmount >= 10000;
  }
}
