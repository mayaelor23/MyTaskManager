import {Task} from "../types/task.types";

import mongoose, { Schema, model } from 'mongoose';

const taskSchema = new Schema<Task> ({
    title: { type: String, required: true },
    description: { type: String, required: true },
    statusTask: { type: String, required: true },
    priorityTask: { type: String, required: true },
    dueDate:  { type: Date, required: true },
    createAt: { type: Date, required: true },
});

export const TaskModel = mongoose.model('Task', taskSchema); 


