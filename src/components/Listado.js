import Item from './Item'
import productList from './data.json'

export default function Listado({ setCounter }) {

  return (
    <div className='container'>
      {
        productList.map( product => {
          return  <Item
                      key={ product.id }
                      product={ product }
                      setCounter={ setCounter }
                  />
        })
      }
    </div>
  )
}
