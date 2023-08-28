import { useEffect, useState } from "react";

const CicloDeVida = () =>{
    const [trigger, setTrigger] = useState(0);

    useEffect(()=>{
        console.log('useEffect Ciclo de Vida', trigger);
    })

    console.log('Renderizando Ciclo de Vida');
    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <h1 className="text-[25px] text-white mb-5">Ciclo de vida</h1>
            <img className="mb-5" src="https://picsum.photos/480/150" alt="lorem-picsum" />
            <p className="text-white mb-5">Abre la consola del navegador para observar el comportamiento</p>
            <button
                onClick={()=> setTrigger((prevState)=> prevState + 1)}
                className="bg-green-300 text-lg px-4 py-1 rounded"
            >
                Generar nuevo render
            </button>
        </div>);
}

export default CicloDeVida;