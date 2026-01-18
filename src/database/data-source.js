import "reflect-metadata";
import dotenv from "dotenv";
dotenv.config();
import { DataSource } from "typeorm";
import TodoEntity from "../entity/todo.entity.js";
import UserEntity from "../entity/user.entity.js";


const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,  
    ssl: process.env.NODE_ENV === "production" 
    ? { rejectUnauthorized: false } 
    : false, 
    synchronize: true,
    logging: false,
    entities: [TodoEntity, UserEntity],
    migrations: [],
    subscribers: [],
});

export default AppDataSource;

