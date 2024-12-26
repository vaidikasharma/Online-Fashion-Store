import React, { useState } from "react"
import'./../node_modules/bootstrap/dist/css/bootstrap.css'
import {useNavigate } from "react-router-dom"

const Product = () => {

    const [data, setData] = useState([])

    const navigate = useNavigate()

    const getData = async () =>{
        try{
            const data = await fetch('https://fakestoreapi.com/products')
            const res = await data.json()
            console.log(res)
            setData(res)
        }
        catch(err) {
            console.log(err)
        }

       }
       getData()
    return(
        <>
        <div className="container">
            <h1 className="text-center">Our Products</h1>
            <div className="row">
                {
                    data.map((value, index) => {
                        return <div className="col-md-4 mt-3">
                            <div className="card">
                                <div className="card-body">
                                    <img src={value.image} alt='' height="350px" width="100%"></img>
                                    <h4>{value.title}</h4>
                                    <h5>{value.category}</h5>
                                    <button className="btn btn-primary" onClick={() => navigate(`/product/${value.id}`)} >See More</button>

                                </div>

                            </div>

                        </div>
                    })
                    
                }
            </div>

        </div>
        </>
    )
}
export default Product