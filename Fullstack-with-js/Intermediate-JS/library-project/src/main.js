const myLibrary = [
  new Book("The Hobbit", "J.R.R. Tolkien", 295, true),
  new Book("The Lord of the Rings", "J.R.R. Tolkien", 1178, false),
  new Book("To Kill a Mockingbird", "Harper Lee", 281, true)
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read; 
}

const addBookButton = document.getElementById('add-book-button');
const cancelButton = document.getElementById('cancel-button');
const modal = document.getElementById('add-book-modal');
const addBookForm = document.getElementById('add-book-form');
const bookGrid = document.getElementById('book-grid');

function renderLibrary() {
  bookGrid.innerHTML = '';

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('flex', 'flex-col', 'p-4', 'border-2', 'border-gray-300', 'rounded-lg', 'shadow-md', 'bg-white');
    bookCard.setAttribute('data-index', index); 

    bookCard.innerHTML = `
      <div class="font-bold text-xl mb-2">${book.title}</div>
      <div class="text-lg text-gray-700 mb-1">by ${book.author}</div>
      <div class="text-md text-gray-600 mb-3">${book.pages} pages</div>
      <div class="text-md font-semibold ${book.read ? 'text-green-600' : 'text-red-600'} mb-4">${book.read ? "Read" : "Not Read"}</div>
      <div class="flex justify-between items-center mt-auto">
        <button class="toggle-read-btn text-sm flex bg-yellow-500 hover:bg-yellow-600 active:scale-95 rounded-lg p-2 items-center justify-center font-bold text-white">Toggle Read</button>
        <button class="remove-btn text-sm flex bg-red-500 hover:bg-red-600 active:scale-95 rounded-lg p-2 items-center justify-center font-bold text-white">Remove</button>
      </div>
    `;

    bookGrid.appendChild(bookCard);
  });
}

function showModal() {
  modal.classList.remove('hidden');
}

function hideModal() {
  modal.classList.add('hidden');
}

function addBookToLibrary(title, author, pages, hasRead) {
    const newBook = new Book(title, author, pages, hasRead);
    myLibrary.push(newBook);
    renderLibrary(); 
}

addBookButton.addEventListener('click', showModal);
cancelButton.addEventListener('click', hideModal);

addBookForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const hasRead = document.getElementById('read-status').checked;

  addBookToLibrary(title, author, pages, hasRead);

  hideModal();
  addBookForm.reset();
});


bookGrid.addEventListener('click', (event) => {
  const card = event.target.closest('[data-index]');
  if (!card) return; 

  const index = card.dataset.index;


  if (event.target.classList.contains('remove-btn')) {
    myLibrary.splice(index, 1); 
    renderLibrary(); 
  }

  if (event.target.classList.contains('toggle-read-btn')) {
    myLibrary[index].read = !myLibrary[index].read;
    renderLibrary();
  }
});

renderLibrary();
