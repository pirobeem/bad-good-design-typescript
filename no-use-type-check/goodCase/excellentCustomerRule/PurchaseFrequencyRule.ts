import { PurchaseHistory } from "../../interfaces/PurchaseHistory";
import { IExcellentCustomerRule } from "./IExcellentCustomerRule";

export class PurchaseFrequencyRule implements IExcellentCustomerRule {
  ok(history: PurchaseHistory) {
    return history.purchaseFrequencyPerMonth >= 10;
  }
}
