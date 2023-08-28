const DontTouchProps = ({ monto }) => {
    // No se tocan las props
    // usar estados
    // pasar mutador via props/context/hook si modifica el estado del padre
    // o si modifica base de datos
    monto = monto *2;
    return <p className="text-[24px] text-white">Monto desde el hijo {monto}</p>
}

export default DontTouchProps;