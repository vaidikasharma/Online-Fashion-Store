import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './../node_modules/bootstrap/dist/css/bootstrap.css'


const SingleProduct = () => {

const [items, setItems] = useState("")

    const {id} = useParams()

    const getSingleData = async () => {
      try{
        const data = await fetch(`https://fakestoreapi.com/products/${id}`)
        const res = await data.json()
        console.log(res)
        setItems(res)
      }
      catch(err) {
        console.log(err)
      }
    }
    getSingleData()
  return (
    <>
   <div className='container'>
    <div className='row'>
      <div className='col-md-6 offset-md-3'>
        <div className='row align-items-center'>
          <div className='col-md-6'>
            <img src={items.image} alt='' height='350px' width='100%'></img>

          </div>
          <div className='col-md-6'>
            <h5><i>Title - {items.title}</i></h5>
            <h5><i>Category - {items.category}</i></h5>
            <h5 className='mb-5'><i>Price - {items.price}</i></h5>
            <button className='btn btn-primary me-3'>Buy Now</button>
            <button className='btn btn-warning'>Add to Cart</button>

          </div>
        </div>
      </div>
    </div>
   </div>
    </>
  )
}
                                      
export default SingleProduct