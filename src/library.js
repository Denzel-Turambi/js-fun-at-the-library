function createLibrary(name) {
  libraryInfo = {
    name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return libraryInfo;
}

function addBook(library, book) {
  if (book.genre === "fantasy") {
    libraryInfo.shelves.fantasy.push(book);
    return library;
  } else if (book.genre === "fiction") {
    libraryInfo.shelves.fiction.push(book);
    return library;
  } else if (book.genre === "nonFiction") {
    libraryInfo.shelves.nonFiction.push(book);
    return library;
  }
}

module.exports = {
  createLibrary,
  addBook,
  // checkoutBook,
  // takeStock
};