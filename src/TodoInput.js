const TodoInput = ({ todo, setTodo, addtodo }) => {
  return (
    <div className="input-wrapper">
      <input
        type="text"
        name="todo"
        value={todo}
        placeholder="Create a new todo"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button className="add-button" onClick={addtodo}>
        Add
      </button>
    </div>
  );
};
export default TodoInput;
