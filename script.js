class BookManager {
  static getStoredBooks() {
    if (localStorage.getItem('AddedBooks') === null) {
      localStorage.setItem('AddedBooks', JSON.stringify([]));
    }
    return JSON.parse(localStorage.getItem('AddedBooks'));
  }

  static updateStoredBooks(books) {
    localStorage.setItem('AddedBooks', JSON.stringify(books));
  }

  static addNewBook(bookTitle, bookAuthor) {
    const storedBooks = BookManager.getStoredBooks();
    const newBook = {
      title: bookTitle,
      author: bookAuthor,
    };
    storedBooks.push(newBook);
    BookManager.updateStoredBooks(storedBooks);
    BookManager.displayBooks(storedBooks);
  }
}