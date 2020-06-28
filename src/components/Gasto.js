import React from 'react';
import PropTypes from 'prop-types';

const Gasto = ({gasto}) => (
<li className="gasto">
<p>
{gasto.nombreGasto}
<span className="gasto">$ {gasto.cantidadGasto}</span>

</p>

</li>

);

//documentacion 
Gasto.propTypes ={
    gasto : PropTypes.object.isRequired
}
 
export default Gasto;