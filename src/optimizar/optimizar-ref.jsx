import { useState, useRef } from 'react';

const OptimizarRef = () => {
    // const nombreRef = useRef(null);
    // const edadRef = useRef(null);
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState(1);
    const [message, setMessage] = useState({ nombre: '', edad: ''});
    console.log('renderizando Ref');
    return (
        <div className='flex flex-col pt-[200px] justify-center items-center'>
            <form className='mb-10 border-b-2 border-orange-400 p-24'>
                <input className="mr-10" type="text" value={nombre} placeholder='nombre' onChange={(event)=> setNombre(event.currentTarget.value)} />
                {/* <input id="name" name="name" ref={nombreRef} className="mr-10" type="text" placeholder='nombre' /> */}
                <input type="range" min={1} max={65} value={edad} className='mr-7' onChange={(event) => setEdad(Number(event.currentTarget.value))}/>
                {/* <input id="edad" name="edad" ref={edadRef} type="range" min={1} max={65} className='mr-7'/> */}
                {/* <button
                    type="button"
                    className="bg-green-300 text-lg px-4 py-1 rounded"
                    onClick={()=> setMessage({ nombre: nombreRef.current.value, edad: edadRef.current.value })}
                >
                    Enviar
                </button> */}
                <button
                    type="button"
                    className="bg-green-300 text-lg px-4 py-1 rounded"
                    onClick={()=> setMessage({ nombre, edad })}
                >
                    Enviar
                </button>
            </form>
            <div className='flex'>
                <p className='mr-5 text-white'>{message.nombre}</p>
                {/* {message.nombre && <p className='mr-5 text-white'>{nombreRef?.current?.value}</p>} */}
                <p className='mr-5 text-white'>{message.edad}</p>
                {/* {message.edad && <p className='mr-5 text-white'>{edadRef?.current?.value}</p>} */}
            </div>
        </div>
    );
}

export default OptimizarRef;