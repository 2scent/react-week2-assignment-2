import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onClick }) {
  const isEmpty = (arr) => arr.length === 0;
  if (isEmpty(todos)) {
    return (
      <p>할 일이 없어요!</p>
    );
  }
  return (
    <div>
      {
        todos.filter(({ done }) => !done)
          .map(({ id, text }) => (
            <TodoItem
              key={id}
              id={id}
              text={text}
              onClick={() => onClick(id)}
            />
          ))
      }
    </div>
  );
}

export default TodoList;
