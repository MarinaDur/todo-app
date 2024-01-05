import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorage";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useLocalStorageState([], "todoList");
  const [filter, setFilter] = useState("All");
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, "isDarkMode");
  const activeItems = todoList.filter(
    (item) => item.completed === false
  ).length;

  function handleValue(e) {
    setValue(e.target.value);
  }

  function handleDownKey(e) {
    const itemId = Math.random().toString(36).substring(2, 8);
    if (e.key === "Enter") {
      setTodoList((prevTodo) => [
        ...prevTodo,
        { id: itemId, task: value, completed: false },
      ]);
      e.preventDefault();
      setValue("");
    }
  }

  function deleteTodoItem(id) {
    setTodoList((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  }

  function handleCompleted(item) {
    setTodoList((prevList) => {
      return prevList.map((todo) =>
        todo.id === item.id ? { ...todo, completed: !todo.completed } : todo
      );
    });
  }

  function handleFilter(filter) {
    setFilter(filter);
  }

  function handleClearCompleted() {
    setTodoList((prevList) =>
      prevList.filter((item) => item.completed === false)
    );
  }

  function handleDragNDrop(results) {
    const { source, destination, type } = results;
    if (destination === null) {
      // Reset the state to trigger re-render and snap back immediately
      setTodoList(todoList);
      return;
    }
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === "group") {
      const reorderedList = [...todoList];
      const sourceIndex = source.index;
      const destinationIndex = destination.index;

      const [removedTodo] = reorderedList.splice(sourceIndex, 1);
      reorderedList.splice(destinationIndex, 0, removedTodo);

      setTodoList(reorderedList);
    }
  }

  function toggleColorTheme() {
    setIsDarkMode((prev) => !prev);
  }

  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
      } else {
        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");
      }
    },
    [isDarkMode]
  );

  return (
    <TodoContext.Provider
      value={{
        handleValue,
        value,
        handleDownKey,
        deleteTodoItem,
        handleCompleted,
        handleFilter,
        filter,
        activeItems,
        handleClearCompleted,
        handleDragNDrop,
        todoList,
        toggleColorTheme,
        isDarkMode,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

function useTodo() {
  const context = useContext(TodoContext);
  if (context === undefined)
    throw new Error("TodoContext was used outside of the TodoProvider");
  return context;
}

export { TodoProvider, useTodo };
