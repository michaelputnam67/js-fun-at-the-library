

// function shelfBook(book, sciFiShelf) {
//   sciFiShelf.unshift(book);
// }

function shelfBook(book, sciFiShelf) {
  if (sciFiShelf.length > 2) {
    return sciFiShelf
  } else {
  sciFiShelf.unshift(book);
  return sciFiShelf;
}
}


function unshelfBook(book, bookShelf) {
 for(var i = 0; i < bookShelf.length; i++) {
   if (book === bookShelf[i].title) {
     bookShelf.splice(i, 1)
   }
 }
}

function listTitles(bookShelf) {
  var titles = ''
  for (var i = 0; i < bookShelf.length; i++) {
    if (i < bookShelf.length - 1) {
      titles += bookShelf[i].title + ', ';
    } else {
      titles += bookShelf[i].title;
    }
  } return titles
}



// function listTitles(bookShelf) {
//   var titles = ""
//   for (var i = 0; i < bookShelf.length; i++) {
//     titles += bookShelf[i].title + ', '
//   }
//   return titles
// }













function searchShelf(sciFiShelf, book) {
  for (var i = 0; i < sciFiShelf.length; i++) {
    if (book == sciFiShelf[i].title) {
      return true
    }
  } return false
}










//
//   var shelfLocation = sciFiShelf.indexOf(book);
//   sciFiShelf.splice(shelfLocation, 1);
//   sciFiShelf.push(book);
//   return sciFiShelf.pop(book);
// }



module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
