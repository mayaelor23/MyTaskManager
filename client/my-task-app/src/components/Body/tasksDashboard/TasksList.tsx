    import React from "react"
    import  { useState, useEffect } from "react";
    import { fetchGetAllTasks } from "../../../services/tasksApi";
    import type { Task } from "../../../types/task.types";


const TasksList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const data = await fetchGetAllTasks();
        setTasks(data); 
      } catch (error) {
        console.error("error in gets the tasks", error);
      }
    };

    getTasks();
  }, []);
return (
    <div className="tasks-list-container">
      {tasks.map((task) => (
        <div key={task.id} className={`task-card ${task.priorityTask}`}>
          <div className="task-header">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <span className="priority">{task.priorityTask}</span>
          </div>
          <div className="task-footer">
            <span>{new Date(task.dueDate).toLocaleDateString()}</span>
            <span className={`status ${task.statusTask}`}></span>
          </div>
        </div>
      ))}
    </div>
  );
};


    export default TasksList;