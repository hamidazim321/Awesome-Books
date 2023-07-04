let books = JSON.parse(localStorage.getItem('books')) || [];
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
      books = books.filter((b) => b !== book);
      localStorage.setItem('books', JSON.stringify(books));
      renderBookList();
    });

    listItem.appendChild(removeButton);
    bookList.appendChild(listItem);
  });
}

function addBook(title, author) {
  const newBook = { title, author };
  books.push(newBook);
  localStorage.setItem('books', JSON.stringify(books));
  renderBookList();
}

const addForm = document.getElementById('addForm');
addForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const titleInput = document.getElementById('titleInput');
  const authorInput = document.getElementById('authorInput');
  const title = titleInput.value;
  const author = authorInput.value;
  addBook(title, author);
  titleInput.value = '';
  authorInput.value = '';
});

renderBookList();