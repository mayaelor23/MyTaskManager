import { Request, Response } from 'express';
import { Task, statusTask } from '../types/task.types';
import { TaskSerivce } from '../services/task.service';

const taskService = new TaskSerivce();

export class TasksController {
constructor() {}

public async createTask(req: Request, res: Response):Promise<void>{
try{
    const taskData = req.body
    const newTask = {
        ...taskData,
        createAt: new Date().toISOString(),
    }
    await taskService.addNewTask(newTask)
    res.status(201).json(newTask);
    //res.status(201).json({ message: newTask +  "Task status updated successfully" });
} catch (error){
res.status(500).json({error: "Failed to create task"})
}}

public async getTasks(req: Request, res: Response):Promise<void>{
try{
    const allTasks = await taskService.getAllTasks();
    res.status(200).json(allTasks);
} catch (error){
res.status(500).json({error: "Failed to send the tasks"})
}}

public async getStatusCount(req: Request, res: Response):Promise<any>{
try{
    const currentStatus = req.query.status as string;
      if (!currentStatus || !isValidStatus(currentStatus)){
        return res.status(400).json({ error: "Invalid status value" });
    }
    const totalCount = await taskService.getTotalTaskInStatus(currentStatus as statusTask)

    res.status(200).json(totalCount);
} catch (error){
res.status(500).json({error: "Failed to get total count"})
}}

public async changeStatus(req: Request, res: Response):Promise<any>{
try{
    const taskID = req.params.id 
    const {newStatus} = req.body

    //logs to delete
    console.log("Task ID:", taskID);
    console.log("New Status:", newStatus);
    
    if (!isValidStatus(newStatus)){
        return res.status(400).json({ error: "Invalid status value" });
    }
    const success = await taskService.updateTaskStatus(taskID, newStatus as statusTask);
    console.log("Update success?", success);


    if (success) {
      return res.status(200).json({ message: "Task status updated successfully" });
    } else {
      return res.status(404).json({ error: "Task not found" });
    }
} catch (error){
console.error("ERROR:", error);
res.status(500).json({error: "Failed to change the status"})
}}

}

function generateUniqueId() {
  return Math.random().toString(36).slice(2, 11);
}

// validStatuses
function isValidStatus(taskStatus:string):boolean{
    return [ "open","in Progress" , "done" ].includes(taskStatus);
}