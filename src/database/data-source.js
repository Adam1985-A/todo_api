import "reflect-metadata";
import { DataSource } from "typeorm";
import { TodoEntity } from "./entity/todo-entity.js";

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "saidat1985",
    database: "todo_api",
    synchronize: true,
    logging: false,
    entities: [TodoEntity],
    migrations: [],
    subscribers: [],
});

export default AppDataSource;

