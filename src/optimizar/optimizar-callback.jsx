import { useState, useCallback } from "react";
import OptimizarHijo from "./optimizar-hijo-callback";

const OptimizarCallback = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  // const addTodo = useCallback(() => {
  //   setTodos((t) => [...t, "New Todo"]);
  // },[todos]);


  return (
    <div className="flex flex-col justify-center items-center p-5 mb-5">
        <OptimizarHijo todos={todos} addTodo={addTodo} />
        <p className="text-white mb-5">
            Monto: {count}
        </p>
        <button
            className="bg-green-300 text-lg px-4 py-1 rounded"
            onClick={increment}
        >
            Incrementar
        </button>
    </div>
  );
};

export default OptimizarCallback;