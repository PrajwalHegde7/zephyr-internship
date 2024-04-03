// Define the Book object
function Book(title, author) {
    // Implement the constructor here
    this.title = title;
    this.author = author;
    this.isAvailable = true;
}
// Array to store books
const library = [];
// Function to add a new book to the library
function addBook(title, author) {
    // Implement the function here
    library.push(new Book(title, author));
}

// Function to borrow a book
function borrowBook(title) {
    // Implement the function here
    const book = library.find((book) => book.title === title);
    if (book) {
        if (book.isAvailable) {
            book.isAvailable = false;
            console.log("Book borrowed\n");
        } else console.log("Book Not Available");
    } else console.log("Book not found");
}

// Function to return a book
function returnBook(title) {
    // Implement the function here
    const book = library.find((book) => book.title === title);
    if (book) {
        book.isAvailable = true;
    } else console.log("Book Not Found");
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
