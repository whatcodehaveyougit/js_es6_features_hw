class Library {
  constructor (books = []) {
  this.books = books;
  }
  bookCount() {
    return this.books.length;
  }
  addBook(newBook){
    this.books.push(newBook);
  }
  addBooks(newBooks) {
    newBooks.forEach(book => this.books.push(book));
  }
  printInventory(book){
    this.books.forEach((book) => {
      console.log(`${book.title} by ${book.author}`);
  }
}

};

module.exports = Library;
