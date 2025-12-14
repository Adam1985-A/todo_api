import AppDataSource from "../database/data-source.JS";
import TodoEntity from "../entity/todo.entity.js";

export class TodoService {
    constructor() {
        this.repository = AppDataSource.getRepository(TodoEntity);
    }
    
}