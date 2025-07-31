//import React from "react"
import './Header.css'

import TitleWithDateComponent from "./titleWithDate"
import UserCircleComponent from "./UserCircle";

export default function Header(){
    const today = new Date();
    return (
        <header className="headerContainer">
            <div className='TitleWithDate'> 
            <TitleWithDateComponent title="Welcome to your Task Manager" dateOfToday={today} />
            </div>
            <div className='UserCircle'> 
            <UserCircleComponent name="Maya Elor" />
            </div>


        </header>
    )
}