
function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((json) => {
      // console.log response
      console.log(json);

      // To find the 5th book in the series
      const theFifthBook = json[4];
      console.log("The 5th book in the series:", theFifthBook);

    
      // to calculate the total number of pages of all the books
      const totalNumberOfPages = json.reduce((total, book) => total + book.numberOfPages, 0);
      console.log("The total number of pages of all the books:", totalNumberOfPages);

      // Render the books on the webpage
      renderBooks(json);
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
