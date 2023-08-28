// import { memo } from "react";

const OptimizarHijo = ({ todos }) => {
  console.log("child memo render");
  return (
    <div className="flex flex-col justify-center items-center p-5 mb-5">
        <h2 className="text-[25px] text-white mb-5">My Todos</h2>
            <div className="flex h-[48px]">
                {todos.map((todo, index) => {
                    return <p className="px-1 py-2 rounded odd:bg-orange-400 even:bg-cyan-600 text-white m-1" key={index}>{todo}</p>;
                })}
            </div>
    </div>
  );
};

// export default memo(OptimizarHijo);
export default OptimizarHijo;