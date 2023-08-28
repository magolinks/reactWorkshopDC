import { useState, useCallback } from "react";
import OptimizarHijo from "./optimizar-hijo-memo";

const OptimizarMemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };


  return (
    <div className="flex flex-col justify-center items-center p-5 mb-5">
        <OptimizarHijo todos={todos} />
        <p className="text-white mb-5">
            Monto: {count}
        </p>
        <div className="flex">
          <button
              className="bg-green-300 text-lg px-4 py-1 rounded mr-2"
              onClick={increment}
          >
              Incrementar
          </button>
          <button
              className="bg-green-300 text-lg px-4 py-1 rounded"
              onClick={addTodo}
          >
              Agregar todo
          </button>
        </div>
    </div>
  );
};

export default OptimizarMemo;