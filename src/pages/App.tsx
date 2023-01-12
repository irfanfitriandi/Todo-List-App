import { useState } from "react";

import Input from "../components/Input";
import List from "../components/List";

interface TodoType {
  todo: string;
  complete: boolean;
}

const App = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const createTodoItem = (todo: string) => {
    const newTodoItems = [...todos, { todo, complete: false }];
    setTodos(newTodoItems);
  };

  const deleteTodoItem = (index: number) => {
    const newTodoItems = [...todos];
    newTodoItems.splice(index, 1);
    setTodos(newTodoItems);
  };

  const completeTodoItem = (index: number) => {
    const newTodoItems = [...todos];
    newTodoItems[index].complete === false ? (newTodoItems[index].complete = true) : (newTodoItems[index].complete = false);
    setTodos(newTodoItems);
  };

  const updateTodoItem = (index: number) => {
    const newTodoItems = [...todos];
    const item = newTodoItems[index];
    let newItem = prompt(`Update ${item.todo}?`, item.todo);
    let todoObj: any = { todo: newItem, complete: false };
    newTodoItems.splice(index, 1, todoObj);
    if (newItem === null || newItem === "") {
      return;
    } else {
      item.todo = newItem;
    }
    setTodos(newTodoItems);
  };

  return (
    <div className="container flex-col text-center">
      <Input createTodoItem={createTodoItem} />
      {todos.map((item, index) => (
        <List key={index} index={index} item={item} deleteTodoItem={deleteTodoItem} completeTodoItem={completeTodoItem} updateTodoItem={updateTodoItem} />
      ))}
    </div>
  );
};
export default App;
