import React , {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';
//import { v4  as uuidv4 } from 'uuid'; //uuidv4();

const Formulario = () => {
const [nombreGasto,guardarnombreGasto]=useState('');
const [cantidadGasto,guardarcantidadGasto]=useState(0);
const [error,guardarError]=useState(false);

const agregarGasto = e =>{
    e.preventDefault();
    //validamos
     if (cantidadGasto< 0 || isNaN(cantidadGasto) ||  nombreGasto.trim()===''){
        guardarError(true);
        return;
     }
     guardarError(false);
    //contruimos el objeto  gasto
    const gasto ={
      nombreGasto,
      cantidadGasto,
      id:shortid.generate()

    }
 console.log(gasto);
    // pasamos   al  componente principal

    // limpiar el form
}



    return ( 
       <form
       onSubmit={agregarGasto}
       
       >
         <h2>Aagrega tus Gastos</h2>
         {error ? <Error mensaje="Gasto No Valido"/>
         :null}
         <div className="campo"> 
         <label>Nombre de Gastos</label>
         <input
         type="text"
         className="u-full-width"
          placeholder="Ej. Ropa"
          value={nombreGasto}
          onChange={e => guardarnombreGasto(e.target.value)}
         />
        
         </div>

         <div className="campo"> 
         <label>Cantidad de Gastos</label>
         <input
         type="numbrer"
         className="u-full-width"
          placeholder="Ej. 350"
          value={cantidadGasto}
          onChange={e => guardarcantidadGasto(parseInt(e.target.value),10 )}
         />
        
         </div>
         <input
         type="submit"
         className="button-primary u-full-width"
         value="Agregar Gastos"
         />

       </form>


     );
}
 
export default Formulario;