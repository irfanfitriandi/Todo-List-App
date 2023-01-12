import React, { FC } from "react";

interface InputProps {
  createTodoItem: any;
}

const Input: FC<InputProps> = ({ createTodoItem }) => {
  const [value, setValue] = React.useState("");

  const handleSubmit = (sub: any) => {
    sub.preventDefault();
    if (value === "") {
      return console.log("Please add something to-do");
    }
    createTodoItem(value);
    setValue("");
  };

  return (
    <div className="pt-20">
      <form className="flex justify-center" onSubmit={handleSubmit}>
        <input className="input input-bordered w-full max-w-xs bg-slate-800" type="text" placeholder="What do you want to do?" value={value} onChange={(e) => setValue(e.target.value)} />
        <button className="btn mx-2" onClick={handleSubmit}>
          ADD
        </button>
      </form>
    </div>
  );
};

export default Input;
