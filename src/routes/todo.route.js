import express from "express";
import { AuthMiddleware } from "../middleware/auth.middleware.js";
import { TodoController } from "../controller/todo.controller.js";

const routes = express.Router();
const todoController = new TodoController();

// GET all todos
routes.get("/", AuthMiddleware, controller.getAllTodos);

// GET single todo
routes.get("/:id", controller.getTodo);

// POST new todo
routes.post("/", AuthMiddleware, controller.createTodo);

// PUT update todo
routes.put("/:id", controller.updateTodo);

// DELETE todo
routes.delete("/:id", controller.deleteTodo);

export default routes;