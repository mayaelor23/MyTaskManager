import express, { Request, Response, Router } from "express";
import { TasksController } from "../controllers/tasks.controller";
import { Task } from "../types/task.types";



export class TasksRouter{
    public router:Router ;
    private controller:TasksController


    constructor(){
        this.router = Router();
        this.controller = new TasksController();

    this.router.post("/create", this.controller.createTask);
    this.router.get("/", this.controller.getTasks);
    this.router.get("/stats", this.controller.getStatusCount);
    this.router.patch("/:id/status", this.controller.changeStatus);
    }
}