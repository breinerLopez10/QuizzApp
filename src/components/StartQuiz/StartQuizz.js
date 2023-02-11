
import "./Start.css"
import Swal, * as sweet from "sweetalert2"; 
import React, {Fragment, useState, useEffect} from 'react'
import logo from "../Inicio/logoProp.png"
import axios from 'axios';
const StartQuizz = () => {

// const [dato, setDato] = useState({
//   Tema: '',
//   Descripcion: '',
//   respuestas:'' ,
//   respuestas2:'' ,
//   respuestas3:'' ,
//   respuestas4:'' ,
//   respuesta_correcta: '',
//   Puntaje:''
// })
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
//intento 2
// var i= 0
//funcion 1
// function nextPage(){   
// let mount = datos.length
// for(let j=0;j<mount;j++){
//     if(i===mount){
//         i=0
//     }else{
//       i=i+1
//     }
//   } 
//   console.log(i)

// return [i];
// }nod

// i=nextPage();
// let g=nextPage()

// console.log("hola",g)

const [i,setI]= useState(0)
const nextPage = () => {   
 
  let mount = datos.length
for(let j=0;j<mount;j++){
    if(i>=mount){
        setI(i=0)
        console.log(i)
    }else{
      setI(i+1)
      console.log(i)
    }
  } 
}


let datoss = datos.map(function(x){
  return datos[i];
})
console.log(datoss)

function backPage(){
  let answer=datos[i].respuesta_correcta
  if(datos[i].respuestas === answer) {
  
  return 
  }
  }
function seeAnswer(){
let answer=datos[i].respuesta_correcta
if(datos[i].respuestas === answer) {

return 
}


}
function selectId(id){ 
    return document.getElementById(id)
}
return (
<>
<a className="navbar-brand"><img alt="" src={logo} width="40px" height="40px"/></a>
    <div className="buttons_top">
    <div>
          <button onClick={seeAnswer} className="see">Ver respuesta</button>
      </div>
      <div>
        <button className="finish">Terminar</button>
      </div>
      <div>
          <button  onClick={backPage} className="back">Anterior</button>
      </div>
      <div>
          <button onClick={nextPage} className="next">Siguiente</button>
      </div>
    </div>


{datoss.map(dato=>(
<div key={dato.id}>
<div>
</div>
<div className='content_area'>
<label className="area" >{dato.Descripcion}</label>
</div>
<section className='questions'>
    <div className='cont_btn_1' >
    <button    id="btn_11" className="btn_11">{dato.respuestas}</button>
    </div>
    {/* <div className='cont_btn_2'>
    <button  id="btn_22" className="btn_22">{dato.respuestas2}</button>
    </div> 

    <div className='cont_btn_3'>
    <button  id="btn_33"className="btn_33">{dato.respuestas3}</button>
    </div>

    <div className='cont_btn_4'>
      <button type="submit"  id="btn_44"className="btn_44">{dato.respuestas4}</button>
    </div> */}

   
    </section> 
    </div>
     ))} 
 
   </>
  )
}

export default StartQuizz