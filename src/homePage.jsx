import { useState} from "react";
import './homePage.css';
import {db} from './firebaseConfig';
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";
function HomePage (){

    const [text, setText] = useState("");
    const [todo, setTodo] = useState([]);

    // useEffect(()=>{
    //     const savedItems = localStorage.getItem("todos");
    //     if(savedItems){
    //         setTodo(JSON.parse(savedItems))
    //     }
    // },[setTodo])

    // useEffect(()=> {
    //     // if(todo.length > 0){
    //     localStorage.setItem("todos", JSON.stringify(todo));
    //     // }
    // }, [todo]);

    const addTodo = () =>{
        if(text.trim() === "") return;
        const newTodo    = {
            id: Date.now(),
            text: text,
            completed: false,
        };
        setTodo([...todo, newTodo]);
        setText("");
      } 
    const markDone = (id) => {
        setTodo(todo.map(item => item.id === id ? {...item,completed: !item.completed}: item

        ))
    }

    const deleteTask = (id) => {
        setTodo(todo.filter(item => item.id !== id))
    }
    return(
        <div className="container">
            <h4 style={{color:"black"}}>Todo List App</h4>
            <div className="inputContainerdiv">
                <input className='inputContainer' value={text} onChange={(e)=> setText(e.target.value)}
                placeholder="Add task"/>
                <button className='addButton' onClick={addTodo}>ADD</button>
                {/* <p style={{color: "black"}}>You typed: {text}</p> */}
            </div>
            <div className="todo-container">
                <h4>Your Tasks</h4>
                <table className="todo-table">
                    <tbody>
                        {todo.map((todo)=>(
                            <tr key={todo.id} style={{borderBottom: "1px solid #ccc"}}>
                                <td style={{width: "60%", textDecoration: todo.completed ? "line-through": "none"}}>
                                    {todo.text}
                                </td>
                                <td style={{ textAlign: "right" }}><button onClick={() => markDone(todo.id)}>
                                    {todo.completed ? "Not Done" : "Done"}</button></td>
                                <td><button style={{backgroundColor: "Red"}} onClick={() => deleteTask(todo.id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default HomePage;