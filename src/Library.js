

function createLibrary(nameLibrary) {
  var library = {
    name: nameLibrary,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  };
  return library
}
createLibrary()

// I need to take the book dracula and add it to the array
// fantasy in the object shelves within the denverLibrary.

function addBook(library, book) {
  if(book.genre === 'fantasy') {
    library.shelves.fantasy.push(book);
  } else if(book.genre === 'nonFiction') {
    library.shelves.nonFiction.push(book);
  } else if(book.genre === 'fiction') {
    library.shelves.fiction.push(book);
  } 
}

// I need to
// "You have now checked out Pride and Prejudice from the Denver Public Library"

function checkoutBook(library, title, genre) {
  var pos = library.shelves[genre]
  for(var i = 0; i < library.shelves[genre].length; i++) {
    if(pos[i].title === title) {
      pos.splice(i, 1);
      return `You have now checked out ${title} from the ${library.name}`;
  }
} return `Sorry, there are currently no copies of ${title} available at the ${library.name}`;
}



module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
