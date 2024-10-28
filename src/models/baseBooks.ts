export abstract class BaseBook {
    constructor(public id: string, public title: string, public author: string) {}
  
    abstract getCategory(): string;
  }
  
  export class FictionBook extends BaseBook {
    constructor(id: string, title: string, author: string, public genre: string) {
      super(id, title, author);
    }
  
    getCategory(): string {
      return "Fiction";
    }
  }