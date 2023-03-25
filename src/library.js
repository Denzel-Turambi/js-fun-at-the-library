function createLibrary(name, shelves) {
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

module.exports = {
  createLibrary,
  // addBook,
  // checkoutBook,
  // takeStock
};