import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import bookRoutes from './routes/book.routes';
import { errorHandler} from './middlewares/errorHandler';

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/books', bookRoutes);
app.use(errorHandler);

export default app;
