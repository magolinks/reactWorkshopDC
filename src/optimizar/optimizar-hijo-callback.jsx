import { memo } from "react";

const OptimizarHijo = ({ todos, addTodo }) => {
  console.log("child callback render");
  return (
    <div className="flex flex-col justify-center items-center p-5 mb-5">
        <h2 className="text-[25px] text-white mb-5">My Todos</h2>
        <div className="flex mb-5 h-[48px]">
            {todos.map((todo, index) => {
                return <p key={index} className="px-1 py-2 rounded odd:bg-orange-400 even:bg-cyan-600 text-white m-1">{todo}</p>;
            })}
        </div>
        <button
            onClick={addTodo}
            className="bg-green-300 text-lg px-4 py-1 rounded"
        >
            Add Todo
        </button>
    </div>
  );
};

export default memo(OptimizarHijo);