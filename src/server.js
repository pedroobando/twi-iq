import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

// initialization
const serve = express();
const rutaRaiz = path.join(__dirname,'/html');
const rutaStyles = path.join(__dirname,'/html/assets/css');
const rutaImages = path.join(__dirname,'/html/assets/images');

dotenv.config();

// initialization consts
export const thePort =  process.env.PORT || 8080;
export const theHost = process.env.HOST || '0.0.0.0';

// middlewares
if (process.env.NODE_ENV === 'DEV') {
  serve.use(morgan('dev'));
}

serve
  .use(cors())
  .use('/', express.static(rutaRaiz))
  .use('/css', express.static(rutaStyles))
  .use('/images', express.static(rutaImages))

export default serve;