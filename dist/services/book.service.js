"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.importBooks = exports.deleteBook = exports.updateBook = exports.addBook = exports.getBookById = exports.getAllBooks = void 0;
const uuid_1 = require("uuid");
let books = [];
const getAllBooks = () => books;
exports.getAllBooks = getAllBooks;
const getBookById = (id) => books.find(book => book.id === id);
exports.getBookById = getBookById;
const addBook = (bookData) => {
    const newBook = { id: (0, uuid_1.v4)(), ...bookData };
    books.push(newBook);
    return newBook;
};
exports.addBook = addBook;
const updateBook = (id, update) => {
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
        books[index] = { ...books[index], ...update };
        return books[index];
    }
    return null;
};
exports.updateBook = updateBook;
const deleteBook = (id) => {
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
        return books.splice(index, 1)[0];
    }
    return null;
};
exports.deleteBook = deleteBook;
const importBooks = (bookList) => {
    const added = [];
    const errors = [];
    bookList.forEach((b, index) => {
        if (!b.title || !b.author || isNaN(b.publishedYear)) {
            errors.push({ row: index + 1, error: 'Invalid data' });
        }
        else {
            const book = (0, exports.addBook)(b);
            added.push(book);
        }
    });
    return { addedCount: added.length, errors };
};
exports.importBooks = importBooks;
