const books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925, isAvailable: true },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, isAvailable: false },
    { title: '1984', author: 'George Orwell', year: 1949, isAvailable: true },
    { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813, isAvailable: false }
];

const getAvailableBooks = () => books.filter(books => books.isAvailable)

const getBooksByAuthor = (author) => books.filter(books => books.author === author)

const addNewBook = (title, author, year, isAvailable) => {
    const newBook = {
        title: title,
        author: author,
        year: year,
        isAvailable: isAvailable
    }
    books.push(newBook);
}

const removeBookByTitle = (title) => {
    const index = books.findIndex(books => books.title === title);
    if(index !== -1) books.splice(index, 1);
}

const getSortedByYear = () => books.sort((a, b) => a.year - b.year).map(book => book.title)

const updateAvailability = (title, isAvailable) => {
    const book = books.find(book => book.title === title);
    if(book) boo
