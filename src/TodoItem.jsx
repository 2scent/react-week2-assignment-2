const TodoItem = ({ todo, onComplete }) => (
  <li>
    {todo.title}
    <button
      type="button"
      onClick={() => onComplete(todo.id)}
    >
      완료
    </button>
  </li>
);

export default TodoItem;
