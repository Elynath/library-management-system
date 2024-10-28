export class Category {
    constructor(public name: string) {}
  }
  
  export class Fiction extends Category {
    constructor(public genre: string) {
      super("Fiction");
    }
  }
  
  export class Science extends Category {
    constructor(public fieldOfStudy: string) {
      super("Science");
    }
  }