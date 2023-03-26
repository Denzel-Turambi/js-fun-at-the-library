function createLibrary(name) {
  library = {
    name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return library;
}

function addBook(library, book) {
  // if (book.genre === "fantasy") {
  //   libraryInfo.shelves.fantasy.push(book);
  //   return library;
  // } else if (book.genre === "fiction") {
  //   libraryInfo.shelves.fiction.push(book);
  //   return library;
  // } else if (book.genre === "nonFiction") {
  //   libraryInfo.shelves.nonFiction.push(book);
  //   return library;
  // }
  // Below is the above code but refactored to become more dry
  var bookGenre = book.genre;
  library.shelves[bookGenre].push(book);
  return library;
}

function checkoutBook(library, bookTitle, bookGenre) {
  var bookExists = false;
  for(var i = 0; i < library.shelves[bookGenre].length; i++) { 
    if(library.shelves[bookGenre][i].title === bookTitle) {
      library.shelves[bookGenre].splice(i, 1); 
      bookExists = true;
    }
  } 
  if(bookExists === true) {
    return `You have now checked out ${bookTitle} from the ${library.name}.`; 
  }
    return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}.`
}

function takeStock(library, bookGenre) {
  if (bookGenre === undefined) {
    return `There are a total of 3 books at the ${library.name}.`
  }
  for(var i = 0; i < library.shelves[bookGenre].length; i++) {
    return `There are a total of ${library.shelves[bookGenre].length} ${bookGenre} books at the ${library.name}.`
  }
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};