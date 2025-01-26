import { NewTodoForm } from "./NewTodoForm";
import "./styles.css";
import { useEffect, useState } from "react";
import { TodoLists } from "./TodoLists";
export default function App() {
  const [toDo, setTodo] = useState(()=>{
    const localValue = localStorage.getItem('todos');
    if (localValue == null)
      return [];
    return JSON.parse(localValue);
  });
useEffect(()=>{
  localStorage.setItem("todos", JSON.stringify(toDo));
  
}, [toDo])
  function addTodo(title) {
    setTodo((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }
  function toggleTodo(id, completed) {
    setTodo((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodo((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }
  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1>Todo List</h1>
      <TodoLists toDo={toDo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  );
}
