import React, {useState} from "react"

function ToDoList(){

    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")

    function HundelInputChange(event){
        setNewTask(event.target.value)
    }
    
    function AddTask(event){
        if(document.getElementById('TaskInput').value == ''){
            alert('Enter a Task')
        }else{
        setTasks(tasks => [...tasks, newTask ])
        setNewTask("")
        }
        
    }

    function DeleteAllTasks(){
        setTasks([])
    }


    function RemoveTask(index){
        setTasks(tasks.filter( (_,i) => i !== index))
    }


    function Uptask(index){
        if(index > 0){
            const UpdateTask =  [...tasks];
            [UpdateTask[index], UpdateTask[index - 1]] =
            [UpdateTask[index -1], UpdateTask[index]]
            setTasks(UpdateTask)
        }
           
    }

    function Downtask(index){
        if(index < tasks.length - 1){
            const UpdateTask =  [...tasks];
            [UpdateTask[index], UpdateTask[index + 1]] =
            [UpdateTask[index + 1], UpdateTask[index]]
            setTasks(UpdateTask)
        }
    }


    return(<div className="ToDoList">

        <h1> To do list</h1>
        
        <input id='TaskInput' type="text" placeholder="Enter a task..." value={newTask} onChange={HundelInputChange}></input>
        <button className="AddBtn" onClick={AddTask}>Add Task</button>
        <button className="DelAllBtn" onClick={DeleteAllTasks}>Delete All</button>

        <ol>
            {tasks.map((tasks,index) => 
            <li key={index}><span className="text"> {tasks} </span>
             <button className="DelAllBtn" onClick={() => RemoveTask(index)}>Delete</button>
             <button className="UpDownBtn" onClick={() => Uptask(index)}>Up</button>
             <button className="UpDownBtn" onClick={() => Downtask(index)}>Down</button>
             </li>
            )}
        </ol>
    </div>)
}

export default ToDoList