import { useState } from 'react';
import DontTouchProps from './dont-touch-props';
import ManageUseState from './manage-use-state';
import ManageUseEffect from './manage-use-effect';

const Errores = () => {
    const [monto, setMonto] = useState(20);
    // let monto = 20;
    //modificar las props no modifica el estado
    return <div className='flex flex-col justify-center items-start p-[30px]'>
        <p className='text-[32px] text-red-400'>No tocar las props</p>
        <div className="pl-8">
            <p className="text-[24px] text-cyan-200">Monto desde el padre antes {monto}</p>
            <DontTouchProps monto={monto} />
            <p className="text-[24px] text-cyan-200">Monto desde el padre despues {monto}</p>
        </div>
        <p className='text-[32px] text-red-400'>useState no anda como creia</p>
        <div className="pl-8">
            <button
                className="bg-green-300 text-lg px-4 py-1 rounded"
                onClick={()=> setMonto((prevState)=> prevState + 1)}
            >
                Incrementar
            </button>
            <ManageUseState initial={monto} />
        </div>
        <p className='text-[32px] text-red-400'>useEffect no anda como creia</p>
        <div className="pl-8">
            <ManageUseEffect />
        </div>
    </div>
}
export default Errores;