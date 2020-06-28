import React,{Fragment,useState} from 'react';
import Error  from './Error';

const Pregunta = ({guardarPresupuesto,guardarRestante,guardarmostrarPregunta}) => {
// state para guardar la cantidad
const [cantidad,guardarCantidad]=useState(0);
const[error, guardarError]=useState(false);


//Funcion que lee el presupuesto
const definirPresupuesto=e =>{
     guardarCantidad(parseInt(e.target.value),10)
}


//Submit Para enviar el Presupuesti
const agregarPresupuesto = e =>{
 e.preventDefault();
 //validacion
 if(cantidad<1 || isNaN(cantidad)){
    guardarError(true);
    return;
 }

 guardarError(false);
 guardarPresupuesto(cantidad);
 guardarRestante(cantidad);
 guardarmostrarPregunta(false);


}






    return ( 
     <Fragment>
         <h2>Colos tu Presupuesto</h2>
         {error ?  <Error  mensaje="Presupuesto No Valido" /> :null}
         <form
         onSubmit={agregarPresupuesto}
         >
             <input
             type="number"
             className="u-full-width"
             placeholder="Coloca tu Presupuesto"
             onChange={definirPresupuesto}
             />

         <input
           type="submit"
           className="button-primary u-full-width"
           value="Definir Presupuesto"
         />    
         </form>



     </Fragment>


     );
}
 
export default Pregunta;