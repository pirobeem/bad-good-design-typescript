export class PurchaseHistory {
  totalAmount: number;
  purchaseFrequencyPerMonth: number;
  returnRate: number;

  constructor(
    totalAmount: number,
    purchaseFrequencyPerMonth: number,
    returnRate: number
  ) {
    this.totalAmount = totalAmount;
    this.purchaseFrequencyPerMonth = purchaseFrequencyPerMonth;
    this.returnRate = returnRate;
  }
}
