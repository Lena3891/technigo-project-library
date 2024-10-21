const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Fiction",
    rating: 4.2,
    image: "books-images/the-great-gatsby.jpg",
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "Science Fiction",
    rating: 4.5,
    image: "books-images/1984.jpg",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Fiction",
    rating: 4.3,
    image: "books-images/to-kill-a-mockingbird.jpg",
  },

  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genre: "Fiction",
    rating: 4.5,
    image: "books-images/pride-and-prejudice.jpg",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    genre: "Fantasy",
    rating: 4.6,
    image: "books-images/the-hobbit.jpg",
  },
  {
    title: "Humans of New York",
    author: "Brandon Stanton",
    year: 2013,
    genre: "Fotografie/Dokumentation",
    rating: 4.7,
    image: "books-images/Humans of New York.jpg",
  },
  {
    title: "National Geographic Image Collection",
    author: "National Geographic",
    year: 2009,
    genre: "Fotografie/Natur",
    rating: 4.8,
    image: "books-images/National Geographic 2009.jpeg",
  },
  {
    title: "The Family of Man",
    author: "Edward Steichen",
    year: 1955,
    genre: "Fotografie/Kunst",
    rating: 4.6,
    image: "books-images/the family of man.jpeg",
  },
  {
    title: "Earth from Above",
    author: "Yann Arthus-Bertrand",
    year: 1999,
    genre: "Fotografie/Umwelt",
    rating: 4.7,
    image: "books-images/earth from above.jpeg",
  },
  {
    title: "The Americans",
    author: "Robert Frank",
    year: 1958,
    genre: "Fotografie/Dokumentation",
    rating: 4.5,
    image: "books-images/americans.jpg",
  },
  {
    title: "A Beautiful Mess Photo Idea Book",
    author: "Elsie Larson und Emma Chapman",
    year: 2013,
    genre: "Fotografie/Kreativität",
    rating: 4.3,
    image: "books-images/a beautiful mess photo idea book.jpeg",
  },
  {
    title: "Underwater Dogs",
    author: "Seth Casteel",
    year: 2012,
    genre: "Fotografie/Tiere",
    rating: 4.8,
    image: "books-images/underwater dogs.jpeg",
  },
  {
    title: "The Secret Life of Trees",
    author: "Colin Tudge",
    year: 2005,
    genre: "Wissenschaft/Natur",
    rating: 4.5,
    image: "books-images/The Secret Life of Trees.jpg",
  },
];

const bookList = document.getElementById("book-list");
const filterGenre = document.getElementById("filter-genre");
const sortBy = document.getElementById("sort-by");
const randomButton = document.getElementById("random-book");

function displayBooks(booksToDisplay) {
  bookList.innerHTML = "";
  booksToDisplay.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.innerHTML = `
            <img src="${book.image}" alt="${book.title} cover" class="book-cover">
            <h3>${book.title}</h3>
            <p>Autor: ${book.author}</p>
            <p>Jahr: ${book.year}</p>
            <p>Genre: ${book.genre}</p>
            <p>Bewertung: ${book.rating}</p>
        `;
    bookList.appendChild(bookCard);
  });
}

function filterBooks() {
  const selectedGenre = filterGenre.value;
  const filteredBooks = selectedGenre
    ? books.filter((book) => book.genre === selectedGenre)
    : books;
  displayBooks(filteredBooks);
}

function sortBooks() {
  const sortValue = sortBy.value;
  let sortedBooks = [...books];

  switch (sortValue) {
    case "year-asc":
      sortedBooks.sort((a, b) => a.year - b.year);
      break;
    case "year-desc":
      sortedBooks.sort((a, b) => b.year - a.year);
      break;
    case "rating-asc":
      sortedBooks.sort((a, b) => a.rating - b.rating);
      break;
    case "rating-desc":
      sortedBooks.sort((a, b) => b.rating - a.rating);
      break;
  }

  displayBooks(sortedBooks);
}

function getRandomBook() {
  const randomIndex = Math.floor(Math.random() * books.length);
  displayBooks([books[randomIndex]]);
}

filterGenre.addEventListener("change", filterBooks);
sortBy.addEventListener("change", sortBooks);
randomButton.addEventListener("click", getRandomBook);

// Initial display
displayBooks(books);
