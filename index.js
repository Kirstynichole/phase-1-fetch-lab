function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
  .then(response => response.json())
  .then(books => {
    // const h1 = document.createElement("h1");
    // h1.textContent = books[5].name;
    // console.log(books[5]);
    // document.body.append(h1);
    renderBooks(books);
})
.catch(error => {
  console.log(error);
  });
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
