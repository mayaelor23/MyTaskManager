import express from "express";
import cors from "cors" ; 
import { TasksRouter } from "./routes/tasks.routes";
import { connectToDatabase } from "./config/db";

connectToDatabase();

const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (_, res) => {
  res.send("Task Management Server is  ✅");
});

const tasksRouter = new TasksRouter();
app.use("/api/tasks", tasksRouter.router);


export default app;
