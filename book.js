// Define the Book object
function Book(title, author) {
    // Implement the constructor here
    return { title, author, isAvailable: true };
}
// Array to store books
const library = [];
// Function to add a new book to the library
function addBook(title, author) {
    // Implement the function here
    library.push(Book(title, author));
}
// Function to borrow a book
function borrowBook(title) {
    // Implement the function here
    for (var i = 0; i < library.length; i++) {
        if (library[i].title === title) {
            library[i].isAvailable = false;
            break;
        }
    }
}
// Function to return a book
function returnBook(title) {
    // Implement the function here
    for (var i = 0; i < library.length; i++) {
        if (library[i].title === title) {
            library[i].isAvailable = true;
            break;
        }
    }
}
// Function to list all books
function listBooks() {
    // Implement the function here
    library.forEach((book) => {
        console.log(book.title);
        console.log(book.author);
        console.log(book.isAvailable);
        console.log();
    });
}
// Example usage
addBook("The Hobbit", "J.R.R. Tolkien");
addBook("Harry Potter and the Sorcerer's Stone", "J.K. Rowling");
borrowBook("The Hobbit");
listBooks();
returnBook("The Hobbit");
listBooks();
