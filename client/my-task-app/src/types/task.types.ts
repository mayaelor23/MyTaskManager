export type statusTask = "open" | "in Progress" | "done" 
export type priorityTask = "low" | "medium" | "high";


export interface Task {
    id:string;
    title:string;
    description:string;
    statusTask:statusTask;
    priorityTask: priorityTask;
    dueDate: Date;
    createAt:Date
}
