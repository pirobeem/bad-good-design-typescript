import { PurchaseHistory } from "../interfaces/PurchaseHistory";

function isGoldCustomer(history: PurchaseHistory): boolean {
  if (100000 <= history.totalAmount) {
    if (10 <= history.purchaseFrequencyPerMonth) {
      if (history.returnRate <= 0.001) {
        return true;
      }
    }
  }
  return false;
}

function isSilverCustomer(history: PurchaseHistory): boolean {
  if (10 <= history.totalAmount) {
    if (10 <= history.purchaseFrequencyPerMonth) {
      if (history.returnRate <= 0.001) {
        return true;
      }
    }
  }
  return false;
}

export { isGoldCustomer, isSilverCustomer };
