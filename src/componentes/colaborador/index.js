import "./colaborador.css"
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai"

const Colaborador = (props) => {
    const {nombre,puesto,foto,equipo, id, fav} =props.datos
    const {colorPrimario, eliminarColaborador, like} = props

    //condición ? verdader : falso
    //(si la condicion es verdadera todo lo que venga despues 
    //del simbolo ? es lo que va a mostrar, si es falso colocamos
    //dos puntos y digitamos el valor false )

    return <div className = "colaborador">
        <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)}/>
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} al={nombre}></img>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            <div className="fav">
            {fav  ? <AiFillHeart color="red" onClick={() => like (id)}/>: 
            <AiOutlineHeart  onClick={() => like (id)}/> }
            </div>
            
            
        </div>
    </div>
}

export default Colaborador