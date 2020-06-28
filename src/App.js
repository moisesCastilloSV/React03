import React, {useState} from 'react';
import logo from './logo.svg';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';


function App() {

//Definir el state 
const [presupuesto,guardarPresupuesto]=useState(0);
const [restante,guardarRestante]= useState(0);
const [mostrarPregunta,guardarmostrarPregunta]= useState(true);





  return (

    <div  className="container">
     <header>
     <h1>Gastos Semanal</h1>
     <div className="contenido-principal contenido">
       {
       mostrarPregunta ? 
       ( <Pregunta 
          guardarPresupuesto={guardarPresupuesto}
          guardarRestante={guardarRestante}
          guardarmostrarPregunta={guardarmostrarPregunta}
     />)
     : 
     (
      <div className="row">
      <div className="one-half column">
      <Formulario />
      </div>
      <div className="one-half column">
        2
      </div>
 
      </div>
     )
     
     }
     



     </div>
     </header>


    </div>
 
  );
}

export default App;
