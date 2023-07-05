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

  static removeBook(i) {
    const storedBooks = BookManager.getStoredBooks();
    storedBooks.splice(i, 1);
    BookManager.updateStoredBooks(storedBooks);
    BookManager.displayBooks();
  }

  static createBookListHTML(books) {
    let bookListHTML = '';
    for (let i = 0; i < books.length; i += 1) {
      const { title, author } = books[i];
      bookListHTML += `
      <div class="book-list">
        <p>"${title}" by "${author}"</p>
        <button onClick="BookManager.removeBook(${i})">Remove</button>
      </div>
      `;
    }
    return bookListHTML;
  }

  static displayBooks() {
    const bookContainer = document.querySelector('.book-container');
    const storedBooks = BookManager.getStoredBooks();
    const bookListHTML = BookManager.createBookListHTML(storedBooks);
    bookContainer.innerHTML = `
      <ul class="book-ul">${bookListHTML}</ul>
    `;
  }
}

const bookForm = document.querySelector('.book-form');
bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const bookTitleInput = document.querySelector('.book-title');
  const bookAuthorInput = document.querySelector('.book-author');
  const bookTitle = bookTitleInput.value;
  const bookAuthor = bookAuthorInput.value;
  BookManager.addNewBook(bookTitle, bookAuthor);
  bookTitleInput.value = '';
  bookAuthorInput.value = '';
});

BookManager.displayBooks();
