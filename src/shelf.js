function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
    return shelf
  }
}

function unshelfBook(book, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if(shelf[i].title === book) {
      shelf.splice(i, 1);
      return shelf;
    }
  }
};

function listTitles( shelf) {
  // take titles from each object, and put them into a single string data type
  titles = []
  for (var i = 0; i < shelf.length; i++) {
    titles.push(shelf[i].title);
    console.log(titles);
  }
  return titles.join(", ");
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  // searchShelf
};