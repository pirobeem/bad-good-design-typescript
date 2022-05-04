import { PurchaseHistory } from "../../interfaces/PurchaseHistory";
import { ExcellentCustomerPolicy } from "./ExcellentCustomerPolicy";
import { PurchaseFrequencyRule } from "./PurchaseFrequencyRule";
import { ReturnRateRule } from "./ReturnRateRule";

export class SilverCustomerPolicy {
  private policy: ExcellentCustomerPolicy;

  constructor() {
    this.policy = new ExcellentCustomerPolicy();
    this.policy.add(new PurchaseFrequencyRule());
    this.policy.add(new ReturnRateRule());
  }

  complyWithAll(history: PurchaseHistory): boolean {
    return this.policy.complyWithAll(history);
  }
}
