import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlProsupuesto from './components/ControlProsupuesto';


function App() {

//Definir el state 
const [presupuesto,guardarPresupuesto]=useState(0);
const [restante,guardarRestante]= useState(0);
const [mostrarPregunta,guardarmostrarPregunta]= useState(true);
const [gastos,guardarGastos]=useState([]);

// cuando se agrega un nuevo gasto
const [gasto,guardarGasto]=useState({});
const [crearGasto,guardacrearGasto]=useState(false);

//useefecct
useEffect(() =>{
  if(crearGasto){
    //agrega el nuevo presupuesto
    guardarGastos([
      ...gastos,
      gasto
   
     ]);

     // resta del presupuesto actual 
     const presupuestoRestante=restante-gasto.cantidadGasto;
     guardarRestante(presupuestoRestante);
     //resetear a false
     guardacrearGasto(false);
  }
},[gasto,crearGasto,gastos,restante]);




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
      <Formulario 
       guardarGasto={guardarGasto}
       guardacrearGasto={guardacrearGasto}
      />
      </div>
      <div className="one-half column">
        <Listado 
        gastos={gastos}
        
        />
        <ControlProsupuesto 
        presupuesto={presupuesto}
        restante={restante}
        />


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
