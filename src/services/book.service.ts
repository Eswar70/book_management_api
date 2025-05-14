import { Book } from '../models/book.model';
import { v4 as uuidv4 } from 'uuid';

let books: Book[] = [];

export const getAllBooks = () => books;

export const getBookById = (id: string) => books.find(book => book.id === id);

export const addBook = (bookData: Omit<Book, 'id'>): Book => {
  const newBook = { id: uuidv4(), ...bookData };
  books.push(newBook);
  return newBook;
};

export const updateBook = (id: string, update: Partial<Book>) => {
  const index = books.findIndex(book => book.id === id);
  if (index !== -1) {
    books[index] = { ...books[index], ...update };
    return books[index];
  }
  return null;
};

export const deleteBook = (id: string) => {
  const index = books.findIndex(book => book.id === id);
  if (index !== -1) {
    return books.splice(index, 1)[0];
  }
  return null;
};

export const importBooks = (bookList: Omit<Book, 'id'>[]) => {
  const added: Book[] = [];
  const errors: { row: number; error: string }[] = [];

  bookList.forEach((b, index) => {
    if (!b.title || !b.author || isNaN(b.publishedYear)) {
      errors.push({ row: index + 1, error: 'Invalid data' });
    } else {
      const book = addBook(b);
      added.push(book);
    }
  });

  return { addedCount: added.length, errors };
};
