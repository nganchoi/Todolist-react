import "./App.css";
import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo !== "") {
      setTodo("");
      setTodos([...todos, todo]);
    }
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>TodoList</h1>
      <TodoInput todo={todo} setTodo={setTodo} addtodo={addTodo} />
      <TodoList list={todos} remove={deleteTodo} />
    </div>
  );
};

export default App;
