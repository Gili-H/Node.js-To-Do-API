import express from 'express' 
import cors from "cors"
import bodyParser from "body-parser";

import TasksController from "./Controllers/TasksController.js";

const app = express()

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.text());
const port = 3000

app.get("/tasks", TasksController.getList);
app.get("/tasks/:id", TasksController.getById);

app.post("/tasks/",(req,res)=>{
  res.send("add a new task");
})

app.put("/tasks/:id",(req,res)=>{
  res.send("update a task");
})

app.delete("/tasks/:id",(req,res)=>{
  res.send("delete a task");
})
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})