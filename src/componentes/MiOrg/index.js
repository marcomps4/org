import { useState } from "react"
import "./miOrg.css"

const MiOrg = (props) => {

// Estado -hooks
//useState
//useState ()
//Forma de usarlo = const [nombreVariable, funcionActualiza] = userState(valorInicial)
//const [nombre, actualizarNombre] useState("Matrc")

 //   const [mostrar,actualizarMostrar] = useState(true)
 //   const manejarClick = () => {
 //       console.log("Mostrar/Ocultar elemento", !mostrar)
//      actualizarMostrar(!mostrar)

//    }
    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/btn.png" alt="boton" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg