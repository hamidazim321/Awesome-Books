let books = JSON.parse(localStorage.getItem('books')) || [];
function renderBookList() {
  const bookList = document.getElementById('bookList');
  bookList.innerHTML = '';
  const reversedBooks = books.slice().reverse();
  reversedBooks.forEach((book) => {
    let shelf = document.createElement('div')
    let name = document.createElement('p')
    let author = document.createElement('p')
    name.textContent = book.title
    author.textContent = book.author
    shelf.appendChild(name)
    shelf.appendChild(author)

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      books = books.filter((b) => b !== book);
      localStorage.setItem('books', JSON.stringify(books));
      renderBookList();
    });

    shelf.appendChild(removeButton);
    shelf.appendChild(document.createElement('hr'))
    bookList.appendChild(shelf);
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