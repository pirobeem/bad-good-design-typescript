import { PurchaseHistory } from "../../interfaces/PurchaseHistory";
import { ExcellentCustomerPolicy } from "./ExcellentCustomerPolicy";
import { GoldCustomerPurchaseAmountRule } from "./GoldCustomerPurchaseAmountRule";
import { PurchaseFrequencyRule } from "./PurchaseFrequencyRule";
import { ReturnRateRule } from "./ReturnRateRule";

export class GoldCustomerPolicy {
  private policy: ExcellentCustomerPolicy;

  constructor() {
    this.policy = new ExcellentCustomerPolicy();
    this.policy.add(new GoldCustomerPurchaseAmountRule());
    this.policy.add(new PurchaseFrequencyRule());
    this.policy.add(new ReturnRateRule());
  }

  complyWithAll(history: PurchaseHistory): boolean {
    return this.policy.complyWithAll(history);
  }
}
