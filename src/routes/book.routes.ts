import express from 'express';
import multer from 'multer';
import {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
  importBooks,
} from '../controllers/book.controller';

const upload = multer();

const router = express.Router();

router.get('/', getBooks);
router.get('/:id', getBook);
router.post('/', createBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);
router.post('/import', upload.single('file'), importBooks); // was `importBooksFromCSV`

export default router;
