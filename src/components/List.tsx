import { FC } from "react";

interface ListProps {
  item: any;
  index: any;
  deleteTodoItem: any;
  completeTodoItem: any;
  updateTodoItem: any;
}

const List: FC<ListProps> = ({ item, index, deleteTodoItem, completeTodoItem, updateTodoItem }) => {
  return (
    <div className="flex flex-row items-center justify-between m-5 card bg-slate-600 p-2">
      <li className="list-none text-xl" style={{ textDecoration: item.complete ? "line-through" : "" }}>
        {item.todo}
      </li>
      <div className="flex flex-col">
        <button className="btn m-1 text-xs" onClick={() => completeTodoItem(index)}>
          Done
        </button>
        <button className="btn m-1 text-xs" onClick={() => updateTodoItem(index)}>
          Edit
        </button>
        <button className="btn m-1 text-xs" onClick={() => deleteTodoItem(index)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default List;
