import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import jwt from "jsonwebtoken";

import TasksRouter from './Routers/TaskRouter.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.text());

// שימוש בראוטר המרכזי למשימות
app.use('/tasks', TasksRouter); // כל הנתיבים שמתחילים ב- /tasks יעברו ל-TasksRouter

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});