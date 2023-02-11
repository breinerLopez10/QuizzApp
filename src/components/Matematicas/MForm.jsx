import React from 'react';
import "../Algebra/Aestilos.css"
import {NavLink} from 'react-router-dom'
import "../Algebra/Aestilos.css"

const MForm = ({dato, setDato}) => {
    const handleChange = e => {
        setDato({
            ...dato,
            [e.target.name]: e.target.value
        })
    }
    let{Tema, Descripcion, respuestas, respuestas2, respuestas3, respuestas4, respuesta_correcta, Puntaje} = dato
    const handleSubmit = () => {
     
        //validación de los datos
if (Tema === '' || Descripcion === '' || respuestas  === ''|| respuestas2  === ''||respuestas3 === ''||respuestas4  === ''|| respuesta_correcta  === ''|| Puntaje==='' ) {
            alert('Todos los campos son obligatorios')
            return
        }
        //consulta
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(dato)
        }
        fetch('http://localhost:9000/api', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //reiniciando state de libro
        setDato({
            Tema: '',
            Descripcion: '',
            respuestas:'' ,
            respuesta_correcta: '',
            Puntaje:''
        })           
    }



    return ( 
        
        <form className="form1" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="Tema" className="label_tema">Tema</label>
                <input value={Tema} name="Tema" onChange={handleChange} type="text" id="Tema" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="Descripcion" className="label_tema">Descripción</label>
                <input value={Descripcion} name="Descripcion" onChange={handleChange} type="text" id="Decripcion" className="form-control"/>
            </div>
            <label htmlFor="respuestas" className="titteRespuesta">Respuestas</label>
            <div className="mb-3"  id='cont'>
            <input value={respuestas}     placeholder="A)"  name="respuestas" onChange={handleChange} type="text" id="respuestas" className="form-control"/>
            <input value={respuestas2}    placeholder="B)" name="respuestas2" onChange={handleChange} type="text" id="respuestas2" className="form-control"/>
            <input value={respuestas3}    placeholder="C)" name="respuestas3" onChange={handleChange} type="text" id="respuestas3" className="form-control"/>
            <input value={respuestas4}    placeholder="D)" name="respuestas4" onChange={handleChange} type="text" id="respuestas4" className="form-control"/>


        

            </div>
            <div className="mb-3">
                <label htmlFor="respuesta_correcta" className="label_tema">Respuesta correcta</label>
                    <select  value={respuesta_correcta}  name="respuesta_correcta" onChange={handleChange} type="text" id="respuesta_correcta"   >
                    <option>Selecciona una respuesta</option>
                    <option>a</option>
                    <option>b</option>
                    <option>c</option>
                    <option>d</option>
                    </select>
            </div>
            <div className="mb-3">
                <label htmlFor="Puntaje" className="label_tema">Puntaje</label>
                <input value={Puntaje}  name="Puntaje" onChange={handleChange} type="text" id="Puntaje" className="form-control"/>
            </div>
            <div className='divStart'>
            <NavLink className="start" to="/Start"><span className="material-symbols-outlined">play_arrow  </span>Iniciar repaso</NavLink>
            <button type="submit" className="btn añadir">Añadir pregunta</button>
            </div>            
        </form>         
    );
}
 
export default MForm;