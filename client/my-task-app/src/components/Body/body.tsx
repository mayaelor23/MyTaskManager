//import React from "react"
import './body.css'
import StatusCircles from './tasksDashboard/statusCircles'; 
import CreateTaskForm from './createTask/taskForm';
import TasksList from './tasksDashboard/TasksList';

export default function Body(){
    return (
        <div className="bodyContainer">
        <div className="left-panel">
            <StatusCircles />
            <TasksList />
        </div>

        <div className="right-panel">
            <CreateTaskForm />
        </div>
        </div>

    )
}