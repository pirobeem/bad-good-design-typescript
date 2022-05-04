import { PurchaseHistory } from "../../interfaces/PurchaseHistory";

export interface IExcellentCustomerRule {
  ok(history: PurchaseHistory): boolean;
}
