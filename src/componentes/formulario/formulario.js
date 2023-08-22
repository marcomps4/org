import { useState } from "react"
import "./formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../boton"

const Formulario = (props) => {

    const [nombre,actulizarNombre] = useState("")
    const [puesto,actulizarPuesto] = useState("")
    const [foto,actulizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")


    const{ registrarColaborador, crearEquipo} = props

    const manejarEnvio =(e) =>{
        e.preventDefault()
        console.log("Manejar el envio")
        let datosAEnviar ={
            nombre,
            puesto,
            foto, 
            equipo
        }

        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo =(e) =>{
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo titulo = "Nombre" 
            placeholder ="Ingresar Nombre" 
            required 
            valor ={nombre} 
            actualizarValor={actulizarNombre}
            />
            <Campo titulo = "Puesto" 
            placeholder ="Ingresar Puesto" 
            required
            valor ={puesto} 
            actualizarValor={actulizarPuesto}
            />
            <Campo titulo = "Foto"
            placeholder ="Ingresar enlace de foto" 
            required
            valor ={foto} 
            actualizarValor={actulizarFoto}

            />
            <ListaOpciones 
            valor ={equipo}
            actualizarEquipo={actualizarEquipo}
            equipos={props.equipo}
            />
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo titulo = "Titulo" 
            placeholder ="Ingresar Titulo" 
            required 
            valor ={titulo} 
            actualizarValor={actualizarTitulo}
            />
            <Campo titulo = "Color" 
            placeholder ="Ingresar el color en Hex" 
            required
            valor ={color} 
            actualizarValor={actualizarColor}
            type ="color"
            />
            <Boton>
                Registrar Equipo
            </Boton>
            </form>
    </section>
}

export default Formulario