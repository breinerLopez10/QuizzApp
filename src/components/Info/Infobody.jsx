import React from 'react'
import"./Info.css";
import img2 from './img2.jpeg'
import {NavLink} from 'react-router-dom'

export default function Infobody(){
return(
<>
<body className='body2'>
<h2 className='des2'>¿Qué es quizz App?</h2>
<br/>
<br/>

<div className='cont2'>
<p className='text2'>Quiz App es un sitio online en el cual 
podras poner a prueba tus conocimientos en diferentes áreas
de manera ingeniosa e intuitiva.
</p>

<p className='text2'>Quiz App También ofrece servicios gratuitos de alojamiento de preguntas
en donde podras personalizar tus propias preguntas con su respectiva respuesta para así tener 
tus repasos de temas personalizados
</p>

<p className='text2'>En Quiz App podras practicar en forma de juego con las preguntas que desees 
y adicional a eso podras calificar y puntuar esas preguntas dependiendo de la dificultad que tengas
</p>
</div>
<div className='btnInfo'>
<NavLink className="LINKINFO" to="/Inicio">Comienza ahora</NavLink>
</div>
<div className='divImg2'>
    <img className="img2" src={img2} /> </div>
</body>
</>
)}