export class LoanManager<T> {
    private loans: Map<string, T> = new Map();
  
    loan(item: T, itemId: string): void {
      this.loans.set(itemId, item);
    }
  
    return(itemId: string): void {
      this.loans.delete(itemId);
    }
  
    isLoaned(itemId: string): boolean {
      return this.loans.has(itemId);
    }
  }