import { useState } from "react";

export default function Item( {product, setCounter} ) {

  const { producto, stock } = product;
  const { nombre, descripcion } = producto;
  
  const [total, setTotal] = useState(stock)

  const handleClick = () => {
      setTotal(t => t - 1);
      setCounter(c => c + 1);
  }

  return (
    <div className='producto'>
      <h3>{ nombre }</h3>
      <p>{ descripcion }</p>
      <h5>En stock:  
        <span className={ total === 0 ? 'agotado' : '' }>
            { total === 0 ? 'AGOTADO' : total }
        </span>
      </h5>
      <button
        onClick={ handleClick }
        disabled={ total === 0 }
      >
        { total > 0  ? 'COMPRAR' : 'SIN STOCK' }
      </button>
    </div>
  )
}
