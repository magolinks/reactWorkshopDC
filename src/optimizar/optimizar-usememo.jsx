import { useMemo, useState } from 'react';

const OptimizarUseMemo = () => {
    const [query, setQuery] = useState('');
    const [count, setCount] = useState(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const elementos = [
        "Aire",
        "Bicicleta",
        "Casa",
        "Delfín",
        "Elefante",
        "Flor",
        "Gato",
        "Helado",
        "Isla",
        "Jirafa",
        "Koala",
        "León",
        "Montaña",
        "Nube",
        "Océano",
        "Perro",
        "Química",
        "Río",
        "Sol",
        "Tortuga",
        "Unicornio",
        "Vela",
        "Waffle",
        "Xilófono",
        "Yate",
        "Zorro"
      ];


    const filtrar = () => {
        console.log('filtrando elementos');
        return query ? elementos.map(item => item.toLowerCase()).filter(elemento => elemento.includes(query)) : elementos
    }
    const elementosFiltrados = filtrar();
    // const elementosFiltrados = useMemo(filtrar, [query]);
    return (
        <div className="flex flex-col justify-center items-center pt-[200px]">
            <div className='flex mb-10'>
                <p className='text-red-500 text-[35px] font-semibold mr-6'>{count}</p>
                <button
                    className="bg-green-300 text-lg px-4 py-1 rounded"
                    onClick={() => setCount(prevCount => prevCount + 1)}
                >
                    Incrementar
                </button>
            </div>
            <input
                className='bg-white text-xl p-2 rounded outline-none mb-5'
                value={query}
                onChange={(evento)=> setQuery(evento.currentTarget.value)}
            />
            <ul className='flex flex-wrap w-[400px]'>
                {elementosFiltrados
                    .map(item => (
                        <li className='bg-sky-300 rounded m-2 p-2'>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default OptimizarUseMemo;