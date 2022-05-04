import { PurchaseHistory } from "../interfaces/PurchaseHistory";
import { GoldCustomerPolicy } from "./excellentCustomerRule/GoldCustomerPolicy";
import { SilverCustomerPolicy } from "./excellentCustomerRule/SilverCustomerPolicy";

export function isGoldCustomer(purchaseHistory: PurchaseHistory): boolean {
  const goldCustomerPolicy = new GoldCustomerPolicy();
  return goldCustomerPolicy.complyWithAll(purchaseHistory);
}

export function isSilverCustomer(purchaseHistory: PurchaseHistory): boolean {
  const goldCustomerPolicy = new SilverCustomerPolicy();
  return goldCustomerPolicy.complyWithAll(purchaseHistory);
}
