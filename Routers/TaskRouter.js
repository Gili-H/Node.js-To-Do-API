import express from "express";
import crypto from 'crypto';

import TasksController from "../Controllers/TasksController.js";

const TasksRouter = express.Router();

const logMiddleware = (req, res, next) => {
  req.UUID = crypto.randomUUID();
  console.log(`request ${req.UUID} started.`);
  next();
};

// ניתן ליישם את ה-middleware על כל הראוטר
TasksRouter.use(logMiddleware);
TasksRouter.get("/", TasksController.getList);
TasksRouter.get("/:id", TasksController.getById);
TasksRouter.post("/", TasksController.add);
TasksRouter.put("/:id", TasksController.update);
TasksRouter.delete("/:id", TasksController.delete);

export default TasksRouter;