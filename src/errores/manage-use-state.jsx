import { useEffect, useState } from "react";

const ManageUseState = ({initial}) => {
    // iniciar el estado desde las props tiene riesgos
    const [estado, setEstado] = useState(initial);
    const [secundario, setSecundario] = useState(null);
    const [flag, setFlag] = useState(false);
    // solucion 1
    // useEffect(()=>{
    //     setEstado(initial);
    //     setFlag(false);
    // },[initial])

    const handleState = () => {
        const estadoModificado = estado + 5;
        setEstado(estadoModificado);
        setFlag(true);
        // el efecto del mutador es asincronico, no es seguro que luego
        // de llamarlo el estado cambie.
        setSecundario(estado)
        // solucion 2.1
        // setSecundario(estadoModificado)
    }

    //solucion 2.2
    // useEffect(()=>{
    //     if(flag){
    //         setSecundario(estado);
    //     }
    // },[flag, estado]);

    return (
        <div>
            <p className="text-[24px] text-white">Monto desde el hijo {estado}</p>
            <button
                className="bg-green-300 text-lg px-4 py-1 rounded"
                onClick={handleState}
            >
                Procesar desde el hijo
            </button>
            {secundario && <p className="text-[24px] text-white">Secundario desde el hijo {secundario}</p>}
        </div>
    );
}

export default ManageUseState;