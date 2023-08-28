import { useEffect, useState } from "react";

const CicloDeVida2 = () =>{
    const [time, setTime] = useState(new Date());
    useEffect(()=>{
        console.log('UseEffect reloj')
        const interval = setInterval(()=> {
            setTime(new Date());
        },1000);
        return ()=> {
            console.log('Desmontando');
            clearInterval(interval);
        }
    },[])
    // console.log('Renderizando reloj');
    return (
        <div className="w-full h-full flex justify-center items-center">
            <p className="text-white text-[24px] font-semibold">{time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</p>
        </div>
    );
}

export default CicloDeVida2;