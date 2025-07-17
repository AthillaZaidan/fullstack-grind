function Book (title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = read;
    this.info = function(){
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`);
    }
}

let theHobbit = new Book ("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");

theHobbit.info();
