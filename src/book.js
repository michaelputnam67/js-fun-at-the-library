function createTitle(bookIdea) {
  return `The ${bookIdea}`;
}


function buildMainCharacter(name, age, pronouns) {
    var character = {
    name: name,
    age: age,
    pronouns: pronouns
  };
  return character;
}
//
// function saveReview(string, reviews) {
//     return reviews.push(string);
//   for (var i = 0; i < 10; i++) {
//     if(review[i] === string) {
//     return reviews.pop();
//   } else {
//   }
//  }
// }

// function saveReview(string, reviews) {
//   if (reviews.indexOf(string) === -1) {
//     return reviews.push(string);
//   }
// }

// function saveReview(newReview, reviews) {
//   if (reviews.length === 0) {
//       return reviews.push(newReview);
//     } else {
//   for (var i = 0; i < reviews.length; i++) {
//     if (newReview === reviews[i]) {
//       return reviews
//     } else {
//         return reviews.push(newReview);
//     }
//   }
// }
// }

function saveReview(newReview, reviews) {
  for (var i = 0; i <= reviews.length; i++) {
    if (reviews[i] !== newReview) {
      return reviews.push(newReview)
    } else {
      return reviews
    }
  }
}






function calculatePageCount(bookTitle) {
  var bookPageCount = bookTitle.length * 20;
  return bookPageCount;
}

function writeBook(bookTitle, bookCharacter, string) {
  return book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    genre: string,
    pageCount: calculatePageCount(bookTitle)
  };
};
// console.log(book.mainCharacter)

function editBook(pageAdjustment) {
 book.pageCount = book.pageCount * .75;
 return pageAdjustment;
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
