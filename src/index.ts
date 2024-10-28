
import { Library } from "./services/library";
import { Book } from "./models/book";
import { Borrower } from "./models/borrower";
import { Fiction, Science } from "./models/category";
import { LoanManager } from "./services/loanManager";


const library = new Library();


const book1: Book = { id: "1", title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Fiction", isAvailable: true };
const book2: Book = { id: "2", title: "A Brief History of Time", author: "Stephen Hawking", category: "Science", isAvailable: true };

const borrower1: Borrower = { id: "1", name: "John Doe" };
const borrower2: Borrower = { id: "2", name: "Jane Smith" };


library.addBook(book1);
library.addBook(book2);
library.addBorrower(borrower1);
library.addBorrower(borrower2);


console.log("Kölcsönzési művelet indul...");
library.borrowBook("1", "1"); 
library.borrowBook("2", "2"); 


console.log("The Great Gatsby kölcsönzési státusza:", book1.isAvailable ? "Elérhető" : "Kölcsönözve");
console.log("A Brief History of Time kölcsönzési státusza:", book2.isAvailable ? "Elérhető" : "Kölcsönözve");


console.log("Visszavételi művelet indul...");
library.returnBook("1"); 


console.log("The Great Gatsby kölcsönzési státusza:", book1.isAvailable ? "Elérhető" : "Kölcsönözve");


const loanManager = new LoanManager<Book>();
loanManager.loan(book1, book1.id);
console.log(`Kölcsönzési státusz (generikus):`, loanManager.isLoaned(book1.id) ? "Kölcsönözve" : "Elérhető");


loanManager.return(book1.id);
console.log(`Kölcsönzési státusz visszavétel után (generikus):`, loanManager.isLoaned(book1.id) ? "Kölcsönözve" : "Elérhető");
