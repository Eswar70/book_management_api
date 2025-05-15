"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.importBooks = exports.deleteBook = exports.updateBook = exports.createBook = exports.getBook = exports.getBooks = void 0;
const BookService = __importStar(require("../services/book.service"));
const csvParser_1 = require("../utils/csvParser");
// ✅ Return type: Promise<void> and use async
const getBooks = async (req, res, next) => {
    try {
        const books = BookService.getAllBooks();
        res.json(books);
    }
    catch (error) {
        next(error);
    }
};
exports.getBooks = getBooks;
const getBook = async (req, res, next) => {
    try {
        const book = BookService.getBookById(req.params.id);
        if (!book) {
            res.status(404).json({ error: 'Book not found' });
            return;
        }
        res.json(book);
    }
    catch (error) {
        next(error);
    }
};
exports.getBook = getBook;
const createBook = async (req, res, next) => {
    try {
        const { title, author, publishedYear } = req.body;
        if (!title || !author || isNaN(publishedYear)) {
            res.status(400).json({ error: 'Invalid book data' });
            return;
        }
        const newBook = BookService.addBook({ title, author, publishedYear });
        res.status(201).json(newBook);
    }
    catch (error) {
        next(error);
    }
};
exports.createBook = createBook;
const updateBook = async (req, res, next) => {
    try {
        const updated = BookService.updateBook(req.params.id, req.body);
        if (!updated) {
            res.status(404).json({ error: 'Book not found' });
            return;
        }
        res.json(updated);
    }
    catch (error) {
        next(error);
    }
};
exports.updateBook = updateBook;
const deleteBook = async (req, res, next) => {
    try {
        const deleted = BookService.deleteBook(req.params.id);
        if (!deleted) {
            res.status(404).json({ error: 'Book not found' });
            return;
        }
        res.json(deleted);
    }
    catch (error) {
        next(error);
    }
};
exports.deleteBook = deleteBook;
const importBooks = async (req, res, next) => {
    try {
        if (!req.file) {
            res.status(400).json({ error: 'CSV file required' });
            return;
        }
        const text = req.file.buffer.toString('utf-8');
        const parsed = (0, csvParser_1.parseCSV)(text);
        const result = BookService.importBooks(parsed);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
};
exports.importBooks = importBooks;
