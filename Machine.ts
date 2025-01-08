export class Machine {
    stockLevel: number = 1000;   //to set a stock each days
    id: string;
  
    constructor(id: string) {
      this.id = id;
    }
  
    reduceStock(quantity: number): void {
      this.stockLevel -= quantity;
    }
  
    resetStock(value: number): void {
      this.stockLevel = value;
    }
  }
  
  