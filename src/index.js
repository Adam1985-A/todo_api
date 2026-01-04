import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import AppDataSource from './database/data-source.js';
import todoRoutes from './routes/todo.route.js';
import authRoutes from './routes/auth.route.js';


const app = express();
const PORT = 4000;

app.use(express.json());
app.use('/todos', todoRoutes);
app.use('/auth', authRoutes)

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((error) => {
        console.error("Error during Data Source initialization:", error);
    });
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });