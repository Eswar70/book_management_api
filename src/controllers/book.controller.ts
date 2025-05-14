import { Request, Response, NextFunction } from 'express';
import * as BookService from '../services/book.service';
import { parseCSV } from '../utils/csvParser';

// ✅ Return type: Promise<void> and use async
export const getBooks = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const books = BookService.getAllBooks();
    res.json(books);
  } catch (error) {
    next(error);
  }
};

export const getBook = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const book = BookService.getBookById(req.params.id);
    if (!book) {
      res.status(404).json({ error: 'Book not found' });
      return;
    }
    res.json(book);
  } catch (error) {
    next(error);
  }
};

export const createBook = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { title, author, publishedYear } = req.body;
    if (!title || !author || isNaN(publishedYear)) {
      res.status(400).json({ error: 'Invalid book data' });
      return;
    }
    const newBook = BookService.addBook({ title, author, publishedYear });
    res.status(201).json(newBook);
  } catch (error) {
    next(error);
  }
};

export const updateBook = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const updated = BookService.updateBook(req.params.id, req.body);
    if (!updated) {
      res.status(404).json({ error: 'Book not found' });
      return;
    }
    res.json(updated);
  } catch (error) {
    next(error);
  }
};

export const deleteBook = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const deleted = BookService.deleteBook(req.params.id);
    if (!deleted) {
      res.status(404).json({ error: 'Book not found' });
      return;
    }
    res.json(deleted);
  } catch (error) {
    next(error);
  }
};

export const importBooks = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).json({ error: 'CSV file required' });
      return;
    }

    const text = req.file.buffer.toString('utf-8');
    const parsed = parseCSV(text);
    const result = BookService.importBooks(parsed);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
