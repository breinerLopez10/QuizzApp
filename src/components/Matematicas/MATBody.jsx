import React, {Fragment, useState, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Tabla from './Tabla'
import MForm from './MForm'
import {NavLink} from 'react-router-dom'
import "../Algebra/Aestilos.css"
import MATNavbar from './MATNavbar';

export default function MATBody(){
  const [dato, setDato] = useState({
    Tema: '',
    Descripcion: '',
    respuestas:'' ,
    respuestas2:'' ,
    respuestas3:'' ,
    respuestas4:'' ,
    respuesta_correcta: '',
    Puntaje:''
  })
const [datos, setDatos] = useState([])
const [listUpdated, setListUpdated] = useState(false)
//petición de datos
useEffect(() =>{
const getDatos = ()=>{
fetch('http://localhost:9000/api')
.then(response => response.json())
.then(response => setDatos(response))
}
getDatos()

setListUpdated(false)
}, [listUpdated])


console.log(datos)

//const [ users, setUsers ] = useState([])

  //setear los hooks useState
const searcher = (e) => {
    setSearch(e.target.value)   
}
//    //metodo de filtrado 2  
const [ search, setSearch ] = useState("")
const results = !search ? datos : datos.filter((dato)=> dato.Tema.toLowerCase().includes(search.toLocaleLowerCase()))
  
return (
<>

<body>
<MATNavbar datos={datos} search={search} searcher={searcher}  dato={dato} setDato={setDato} setListUpdated={setListUpdated}/>
<h2 className='title2'>Matematicas básicas</h2>
<Fragment>
<div className="container">
        <div className="row ">
          <div className="col-7">
        <h2 className='lista'>Lista de preguntas</h2>
      <Tabla  datos={results}   dato={dato} setDato={setDato} setListUpdated={setListUpdated}/>
</div>
<div className="col-5">
             <br/>
             <br/>
            <MForm dato={dato} setDato={setDato}/> 
          </div>
        </div>
      </div>
    </Fragment>
</body> 
</>
  )
}