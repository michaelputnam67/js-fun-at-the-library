


class Librarian {
  constructor(name, library) {
    this.name = name
    this.library = library

  }


  greetPatron(name, isItMorning) {
    if(isItMorning === true) {
    return `Good morning, ${name}!`;
  } else {
    return `Hello, ${name}!`;
  }
  }

// need to find a way to obtain genre using title
// to make the function more dynamic.
// can I take all the arrays within an object and add them together?
  findBook(title) {

    var masterArray = this.library.shelves.fantasy.concat(this.library.shelves.nonFiction, this.library.shelves.fiction)
    for(var i = 0; i < masterArray.length; i++) {
      if(title == masterArray[i].title) {
        if(masterArray[i].genre === 'fantasy') {
          this.library.shelves.fantasy.splice(i, 1)
        } else if(masterArray[i].genre === 'nonFiction') {
          this.library.shelves.nonFiction.splice(i, 1)
        } else if(masterArray[i].genre === 'fiction') {
          this.library.shelves.fiction.splice(i, 1)
        }
        return `Yes, we have ${title}`
      } else {
        return `Sorry, we do not have ${title}`
      }
    }
}



  calculateLateFee(daysLate) {
  var lateFee =   Math.ceil(.25 * daysLate);
  return lateFee
  }








}
module.exports = Librarian;
