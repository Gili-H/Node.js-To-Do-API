import express from 'express' 
import cors from "cors"

const app = express()

app.use(cors());
const port = 3000

app.get("/tasks/:id",(req,res)=>{
  res.send("get task by id");
})

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