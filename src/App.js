import React from 'react';
import logo from './logo.svg';
import Pregunta from './components/Pregunta';


function App() {
  return (

    <div  className="container">
     <header>
     <h1>Gastos Semanal</h1>
     <div className="contenido-principal contenido">
     <Pregunta />

     </div>
     </header>


    </div>
 
  );
}

export default App;
