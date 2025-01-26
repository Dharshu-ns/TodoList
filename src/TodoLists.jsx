import { TodoItems } from "./TodoItems";

export function TodoLists({ toDo, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {toDo.length === 0 && "No Todos"}
      {toDo.map((toDo) => {
        return(
            <TodoItems {...toDo} key={toDo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        )
      })}
    </ul>
  );
}
