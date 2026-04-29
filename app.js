import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/data', (req, res) => {
    const data = req.query;
    console.log(data);
 		res.send("收到資料了");
    //res.json(data);
});

app.post('/data', (req, res) => {
    const data = req.body;
		console.log(data);
		res.send("post data" + data.text);
    //res.json(data);
});

export default app;
