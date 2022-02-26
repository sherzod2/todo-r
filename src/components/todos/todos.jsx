import { useState, useRef } from "react";
import "./todos.css";

const Todos = () => {
  const inputValue = useRef();
  const checkboxCopmleted = useRef();

  const [todos, setTodos] = useState([
    {
      id: 0,
      title: "yaxshi",
      isCompleted: false,
    },
  ]);
  const [renderTodo, setRenderTodo] = useState(todos);

  function addTodo(todoTitle) {
    const newTodo = {
      id: todos[todos.length - 1].id + 1 || 0,
      title: todoTitle,
      isCompleted: false,
    };

    setTodos((state) => [...state, newTodo]);
    setRenderTodo((state) => [...state, newTodo]);
  }

  function deleteTodo(id) {
    setTodos((state) => {
      return state.filter((todo) => todo.id !== id);
    });
    setRenderTodo((state) => {
      return state.filter((todo) => todo.id !== id);
    });
  }

  function changeCompleted(completed, id) {
    console.log(completed);
    setTodos((state) => {
      state[id].isCompleted = !completed;
      return [...state];
    });

    if (!completed) {
    }

    setTodos((state) => state);
  }

  function controlButtonsFn(completed) {
    setRenderTodo(todos);
    setRenderTodo((state) => {
      return state.filter((todo) => todo.isCompleted === completed);
    });
  }

  function renderAll() {
    setRenderTodo(todos);
  }

  return (
    <>
      <form className="form">
        <input
          ref={inputValue}
          type="text"
          className="input"
          placeholder="typing..."
          required
        />
        <button
          className="form__btn"
          onClick={() => addTodo(inputValue.current.value)}
          type="button"
        >
          Add
        </button>
      </form>

      <div className="sec-title">
        <h2>Your's tasks</h2>
      </div>

      <div className="buttons">
        <button onClick={() => renderAll()} className="button-all form__btn">
          All {todos.length}
        </button>
        <button
          onClick={() => controlButtonsFn(true)}
          className="button-completed form__btn"
        >
          Completed {todos.filter((todo) => todo.isCompleted).length}
        </button>
        <button
          onClick={() => controlButtonsFn(false)}
          className="button-uncompleted form__btn"
        >
          Uncompleted {todos.filter((todo) => !todo.isCompleted).length}
        </button>
      </div>

      {renderTodo.map((todo) => {
        return (
          <li key={todo.id} className="todo__item">
            <div className="todo__item-checkbox-wrapper">
              <input
                checked={todo.isCompleted}
                onChange={() => changeCompleted(todo.isCompleted, todo.id)}
                className="todo__item-checkbox"
                type="checkbox"
              />
            </div>
            <label
              ref={checkboxCopmleted}
              style={{
                color: todo.isCompleted ? "red" : "black",
                textDecoration: todo.isCompleted ? "line-through" : "none",
                fontStyle: todo.isCompleted ? "italic" : "normal",
              }}
              className="todo__item-label"
            >
              {todo.title}
            </label>
            <button
              className="delete-btn"
              onClick={() => deleteTodo(todo.id)}
              type="button"
            >
              Delete
            </button>
          </li>
        );
      })}
    </>
  );
};

export default Todos;
