import { Book } from "../models/book";
import { Borrower } from "../models/borrower";

export class Library {
  private books: Map<string, Book> = new Map();
  private borrowers: Map<string, Borrower> = new Map();

  addBook(book: Book): void {
    this.books.set(book.id, book);
  }

  addBorrower(borrower: Borrower): void {
    this.borrowers.set(borrower.id, borrower);
  }

  borrowBook(bookId: string, borrowerId: string): void {
    const book = this.books.get(bookId);
    if (book && book.isAvailable) {
      book.isAvailable = false;
      console.log(`${borrowerId} kölcsönözte: ${book.title}`);
    } else {
      console.log("A könyv nem elérhető.");
    }
  }

  returnBook(bookId: string): void {
    const book = this.books.get(bookId);
    if (book) {
      book.isAvailable = true;
      console.log(`Visszavételezve: ${book.title}`);
    }
  }
}