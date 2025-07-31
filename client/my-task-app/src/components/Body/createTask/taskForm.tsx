import { useState } from "react";

import React from "react"
import './taskForm.css'
import { postCreateTask } from "../../../services/tasksApi";
import type { Task } from "../../../types/task.types";

interface IFormCreateTask {
    title: string;
    description: string;
    statusTask: string;
    priorityTask: string;
    dueDate: Date;
}

const defaultFormData: IFormCreateTask = {
  title: "",
  description: "",
  statusTask: "" ,
  priorityTask: "",
  dueDate: new Date(), 
};




const CreateTaskForm: React.FC = () => {
  const [formData, setFormData] = useState<IFormCreateTask>(defaultFormData);

const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: id ==="dueDate" ? new Date(value) : value,
    }));
  };

  const onSubmit  = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
    const success = await postCreateTask(formData as Partial<Task>);
    if(success){
    console.log("Task save in DB:", formData);
    }
    else {
      console.log("Error to save in DB:");
    }
    setFormData(defaultFormData); 
    } catch(error){
      console.error("Error in submit:", error);
    }

  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Create New Task!</h2>
      <div className="form" > 
     <div>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        value={formData.title}
        onChange={onChange}
      />
      </div>
      <div>
      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        value={formData.description}
        onChange={onChange}
      />
      </div>

      <div>
      <label htmlFor="statusTask">Status</label>
        <select
        id="statusTask"
        value={formData.statusTask}
        onChange={onChange}
        >
        <option value="">Choose the status </option>
        <option value="open">open</option>
        <option value="in progress">in progress</option>
        <option value="done">done</option>
        </select>
      </div>

        <div>
      <label htmlFor="priorityTask">Priority Status</label>
        <select
        id="priorityTask"
        value={formData.priorityTask}
        onChange={onChange}
        >
        <option value="">Choose the priority </option>
        <option value="open">low</option>
        <option value="in progress">medium</option>
        <option value="done">medium</option>
        </select>
      </div>

       <div>
      <label htmlFor="dueDate">dueDate</label>
      <input
        type="date"
        id="dueDate"
        value={formData.dueDate.toISOString().split("T")[0]} 
        onChange={onChange}
      />
      </div>

      <button type="submit">Create Task</button>
      </div>
    </form>
  );
};


export default CreateTaskForm;