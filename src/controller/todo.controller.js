import { TodoService } from "../service/todo.service.js";

export class TodoController {
  constructor() {
    this.service = new TodoService();
    this.getAllTodos = this.getAllTodos.bind(this);
    this.getTodo = this.getTodo.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    
  }

  // GET /todos
  async getAllTodos(req, res) {
    try {
      const todos = await this.service.getTodos(req.user.userId);
      return res.status(200).json(todos);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // GET /todos/:id
  async getTodo(req, res) {
    try {
      const id = Number(req.params.id);
      const todo = await this.service.getTodoById(id);
      return res.status(200).json(todo);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }

  // POST /todos
  async create(req, res) {
    try {
      const userId = req.user.userId;
    const payload = { ...req.body };
      const newTodo = await this.service.createTodo(payload, userId);
      return res.status(201).json(newTodo);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  // PUT /todos/:id
  async update(req, res) {
    try {
      const id = Number(req.params.id);
      const payload = req.body;
      const updatedTodo = await this.service.updateTodo(id, payload);
      return res.status(200).json(updatedTodo);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  // DELETE /todos/:id
  async delete(req, res) {
    try {
      const id = Number(req.params.id);
      const result = await this.service.deleteTodo(id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}
