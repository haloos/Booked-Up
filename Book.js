class Book {
  constructor(title, author, pages, description, currentPage, read) {
    this.title = 'Feel Free';
    this.author = 'Zadie Smith'; 
    this.pages = 300; 
    this.description = 'Arranged into five sections--In the World, In the Audience, In the           Gallery, On the Bookshelf, and Feel Free--this new collection poses questions we              immediately recognize'; 
    this.currentPage = 1; 
    this.read = true; 
  } 
  readBook(currentPage) {
    this.currentPage.push(currentPage); 
    let sum = 1; 
    for (let currentPage of this.currentPage) {
      sum += currentPage;
    } this.currentPage = sum = read;
  }
}
export { Book };

