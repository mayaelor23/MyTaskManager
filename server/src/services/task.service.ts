import { Task,statusTask } from "../types/task.types";
import { TaskModel } from "../models/task.model";
import { Document } from "mongoose";

export class TaskSerivce {

constructor(){}

public async addNewTask(newTask: Task):Promise<Task>{
    const addTask = await TaskModel.create(newTask)
    return addTask;
}

public async getAllTasks():Promise<Task[]>{
    return await TaskModel.find();
}

public async getTotalTaskInStatus(requestedStatus:statusTask):Promise<Number>{
        return await TaskModel.countDocuments({statusTask: requestedStatus})
}

public async updateTaskStatus(idTask:string,newStatus:statusTask):Promise<Boolean>{
     const newDoc = await TaskModel.findByIdAndUpdate(idTask, {
        statusTask: newStatus
});
    return !!newDoc;
}
}


/*
old version before db
export function getTotalTaskInStatus(requestedStatus:statusTask):Promise<Number>{
    let TotalTaskInStatus:number = 0; 

    for (const task of listOfTasks){
        if (task.statusTask === requestedStatus){
            TotalTaskInStatus ++
        }
    }
        return TotalTaskInStatus
}

export function updateTaskStatus(idTask:string,newStatus:statusTask):boolean{
    console.log("listOfTasks: in the service", listOfTasks);
    for (const task of listOfTasks){
        if(task.id === idTask){
        task.statusTask = newStatus
        return true
        }
    }
    return false
}

*/