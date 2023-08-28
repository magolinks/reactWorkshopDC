import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const urlBase = 'https://pokeapi.co/api/v2/pokemon/'

const ManageUseEffect = () => {
    const [id, setId] = useState(1);
    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(false);

    const callApi = useCallback(async () => {
        try {
            setloading(true);
            const response = await axios.get(urlBase+id);
            setPokemon(response);
            setloading(false);
        }catch(error){
            setPokemon(null);
            setloading(false);
            setError('No pudimos obtener tu pokemon');
            return null;
        }

    },[]);
    //no olvidar dependencias
    useEffect(()=>{
        callApi();
    },[callApi]);

    return pokemon != null
        ?(
            <div className="flex flex-col">
                <p className="text-[24px] text-green-400">{pokemon.data.name}  id: {id}</p>
                <img src={pokemon.data.sprites.front_default} alt="poke-sprite" />
                <div className="flex">
                    <button
                        className={`${id === 1 ? 'bg-green-100' : 'bg-green-300'} text-lg px-4 py-1 rounded mr-4`}
                        onClick={()=> setId((prevState)=> prevState - 1)}
                        disabled={id === 1 || loading }
                    >
                        Anterior
                    </button>
                    <button
                        className="bg-green-700 text-lg px-4 py-1 rounded"
                        onClick={()=> setId((prevState)=> prevState + 1)}
                        disabled={loading}
                    >
                        Siguiente
                    </button>
                </div>
            </div>
        ): loading ?(
                <p className="text-[24px] text-indigo-400">Buscando tu pokemon</p>
            ):(
                <p className="text-[24px] text-orange-600">{error}</p>
            );
}

export default ManageUseEffect;