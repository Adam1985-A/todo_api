import express from "express";
import { AuthMiddleware } from "../middleware/auth.middleware.js";
import { TodoController } from "../controller/todo.controller.js";

const routes = express.Router();
const controller = new TodoController();

// GET all todos
routes.get("/", AuthMiddleware, controller.getAllTodos);

// GET single todo
routes.get("/:id", AuthMiddleware, controller.getTodo);

// POST new todo
routes.post("/", AuthMiddleware, controller.create);

// PUT update todo
routes.put("/:id", AuthMiddleware, controller.update);

// DELETE todo
routes.delete("/:id", AuthMiddleware, controller.delete);

export default routes;