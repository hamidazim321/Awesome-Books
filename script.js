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

  function addBook(title, author) {
    var newBook = { title: title, author: author };
    books.push(newBook);
    localStorage.setItem("books", JSON.stringify(books));
    renderBookList();
  }

  function removeBook(book) {
    books = books.filter(function(b) {
      return b !== book;
    });
    localStorage.setItem("books", JSON.stringify(books));
    renderBookList();
  }

  var addForm = document.getElementById("addForm");
  addForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var titleInput = document.getElementById("titleInput");
    var authorInput = document.getElementById("authorInput");
    var title = titleInput.value;
    var author = authorInput.value;
    addBook(title, author);
    titleInput.value = "";
    authorInput.value = "";
  });

  renderBookList();