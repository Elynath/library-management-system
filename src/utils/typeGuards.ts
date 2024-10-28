
import { Book } from "../models/book";
import { Borrower } from "../models/borrower";


export function isBook(item: any): item is Book {
  return item && typeof item === "object" && "title" in item && "author" in item;
}


export function isBorrower(item: any): item is Borrower {
  return item && typeof item === "object" && "name" in item && !("title" in item);
}


import { Category, Fiction, Science } from "../models/category";


export function isFiction(category: Category): category is Fiction {
  return category instanceof Fiction;
}


export function isScience(category: Category): category is Science {
  return category instanceof Science;
}

