const books = JSON.parse(localStorage.getItem('books')) || [];

function renderBookList() {
  const bookList = document.getElementById('bookList');
  bookList.innerHTML = '';

  const reversedBooks = books.slice().reverse();

  reversedBooks.forEach((book) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${book.title} by ${book.author}`;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      removeBook(book);
    });

    listItem.appendChild(removeButton);
    bookList.appendChild(listItem);
  });
}