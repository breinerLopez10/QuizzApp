import React, {Fragment, useState, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import FTabla from './FTabla'
import FForm from './FForm'
import {NavLink} from 'react-router-dom'

export default function Fbody(){

  const [dato, setDato] = useState({
    Tema: '',
    Descripcion: '',
    respuestas:'' ,
    respuesta_correcta: '',
    Puntaje:''
  })

const [datos, setDatos] = useState([])
const [listUpdated, setListUpdated] = useState(false)


//petición de datos
useEffect(() =>{
const getDatos = ()=>{
fetch('http://localhost:9000/api6')
.then(response => response.json())
// .then(response => console.log(response))
.then(response => setDatos(response))
}
getDatos()

setListUpdated(false)
}, [listUpdated])
//agregar: 
//funciona
return (
<>
<body>
<h2 className='title2'>Física</h2>
<Fragment>

 <div className="container">
        <div className="row ">
          <div className="col-7">
        
              <h2 className='lista'>Lista de preguntas</h2>
               <FTabla  datos={datos}   dato={dato} setDato={setDato} setListUpdated={setListUpdated}/>
</div>

<div className="col-5">
             <br/>
             <br/>
            <FForm dato={dato} setDato={setDato}/> 
          </div>
        </div>
      </div>
    </Fragment>
  

   
{/* botones */}


{/* <div className='divStart'>
        <NavLink className="start" to="/Inicio"><span className="material-symbols-outlined">
play_arrow
</span>Iniciar repaso</NavLink>
</div> */}
</body> 
</>
  )
}