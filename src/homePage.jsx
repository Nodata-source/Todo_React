import { useEffect, useState} from "react";
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

    useEffect(()=>{
        const fetchTodos = async() => {
            const querySnapshot = await getDocs(collection(db, "todos"));
            const todos = [];
            querySnapshot.forEach((document) => {
                todos.push({ id: document.id, ...document.data() });
            });
            setTodo(todos);
        };
        fetchTodos();
    },[]);

    const addTodo = async () =>{
        if(text.trim() === "") return;
        const newTodo    = {
            text: text,
            completed: false,
        };
        await addDoc(collection(db, "todos"), newTodo);
        // setTodo([...todo, newTodo]);
        setText("");
        //refresh todos
        const querySnapshot = await getDocs(collection(db, "todos"));
        const todos = [];
        querySnapshot.forEach((document) => {
            todos.push({ id: document.id, ...document.data() });
        });
        setTodo(todos);
    }

    // Mark as done in Firestore
    const markDone = async (id, completed) => {
        const todoRef = doc(db, "todos", id);
        await updateDoc(todoRef, { completed: !completed });
        // Refresh todos
        const querySnapshot = await getDocs(collection(db, "todos"));
        const todos = [];
        querySnapshot.forEach((document) => {
            todos.push({ id: document.id, ...document.data() });
        });
        setTodo(todos);
    };

    const deleteTask = async (id) => {
        console.log("Deleting id:", id); // Add this
        await deleteDoc(doc(db, "todos", id));
        // Refresh todos
        const querySnapshot = await getDocs(collection(db, "todos"));
        const todos = [];
        querySnapshot.forEach((document) => {
            todos.push({ id: document.id, ...document.data() });
        });
        setTodo(todos);

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
                        {todo.map((todoItem)=>(
                            <tr key={todoItem.id} style={{borderBottom: "1px solid #ccc"}}>
                                <td style={{width: "60%", textDecoration: todoItem.completed ? "line-through": "none"}}>
                                    {todoItem.text}
                                </td>
                                <td style={{ textAlign: "right" }}><button onClick={() => markDone(todoItem.id, todoItem.completed)}>
                                    {todoItem.completed ? "Not Done" : "Done"}</button></td>
                                <td><button style={{backgroundColor: "Red"}} onClick={() => deleteTask(todoItem.id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default HomePage;