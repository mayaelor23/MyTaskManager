import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { Task, statusTask } from '../types/task.types';




export async function fetchGetAllTasks() {
const getAPI= "http://localhost:4001/api/tasks/"   

try{
    const response: AxiosResponse = await axios.get(getAPI);
    return response.data; 
}
catch(error){
    if (axios.isAxiosError(error)) {
    console.error("Axios error:", error.message);
  } else {
    console.error("General error:", error);
  }}}

export async function postCreateTask(dataToSend:Partial<Task>) {
const postAPI= "http://localhost:4001/api/tasks/create"   
try{
    const response: AxiosResponse = await axios.post(postAPI,dataToSend);
    return response.data;
}
catch(error){
    if (axios.isAxiosError(error)) {
    console.error("Axios error:", error.message);
  } else {
    console.error("General error:", error);
  }}}



export async function fetchStatusCount(statusToSend:statusTask) {
const getAPITasksStatus= "http://localhost:4001/api/tasks/stats"   

try{
    const response: AxiosResponse = await axios.get(getAPITasksStatus,{
        params: {
            status:statusToSend
        }
    });
    return response.data;
}
catch(error){
    if (axios.isAxiosError(error)) {
    console.error("Axios error:", error.message);
  } else {
    console.error("General error:", error);
  }
}
}
