import AppDataSource from "../database/data-source.js";
import TodoEntity from "../entity/todo.entity.js";

export class TodoService {
    constructor() {
        this.repository = AppDataSource.getRepository(TodoEntity);
    }

    async getTodos(userId) {
       return await this.repository.find({
        where: {
            user: { id: userId }
        }
    });
}    
    async getTodoById(id) {
  const todo = await this.repository.findOneBy({ id });

  if (!todo) {
    throw new Error('Todo not found');
  }

  return todo;
}
 async createTodo(payload, userId) {
        const todo = this.repository.create({...payload, user:{id: userId}});
        return await this.repository.save(todo);
    }

async updateTodo(id, payload) {
      

       const todo = await this.getTodoById(id);  
        //merge existing todo with new payload
        Object.assign(todo, payload);
        return await this.repository.save(todo);
    }

    async deleteTodo(id) {
        const todo = await this.getTodoById(id);
       await this.repository.remove(todo);
        return{ message: "Todo deleted successfully"};
    }
}