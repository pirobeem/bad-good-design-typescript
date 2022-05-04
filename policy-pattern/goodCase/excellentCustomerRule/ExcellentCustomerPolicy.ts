import { PurchaseHistory } from "../../interfaces/PurchaseHistory";
import { IExcellentCustomerRule } from "./IExcellentCustomerRule";

export class ExcellentCustomerPolicy {
  private rules: Set<IExcellentCustomerRule>;

  constructor() {
    this.rules = new Set<IExcellentCustomerRule>();
  }

  add(rule: IExcellentCustomerRule) {
    return this.rules.add(rule);
  }

  complyWithAll(history: PurchaseHistory): boolean {
    return [...this.rules].every((rule) => rule.ok(history));
  }
}
