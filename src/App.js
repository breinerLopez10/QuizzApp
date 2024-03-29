import React from 'react'
import Inicio from "./pages/Inicio"
import Info from "./pages/Info"
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage'
import Matematicas from './pages/Matematicas'
import Calculo from './pages/Calculo'
import Algebra from './pages/Algebra'
import Trigonometria from './pages/Trigonometria'
import Programacion from './pages/Programacion'
import Fisica from './pages/Fisica'
import Introduccion from './pages/Introduccion'


import Start from './pages/Start'


// import index2 from './pages/Startquiz/index2.html'






export default function App(){
return(
<BrowserRouter>
<Routes>

<Route path="/" element ={<Introduccion/>} />
<Route path="/Introduccion" element ={<Introduccion/>} />
<Route path="/Inicio" element ={<Inicio/>} />
<Route path="/Info" element ={<Info/>} />
{/* <Route path="/*" element ={<NotFoundPage/>} /> */}

<Route path="/Math" element ={<Matematicas/>} />
<Route path="/Fisi" element ={<Fisica/>} />
<Route path="/Calculo" element ={<Calculo/>} />
<Route path="/Alge" element ={<Algebra/>} />
<Route path="/Trigono" element ={<Trigonometria/>} />
<Route path="/Progra" element ={<Programacion/>} />



<Route path="/Start" element ={<Start/>} />

</Routes>
</BrowserRouter>
)
}
