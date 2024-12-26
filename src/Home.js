import React from 'react'
import { useNavigate } from 'react-router-dom'
import './../node_modules/bootstrap/dist/css/bootstrap.css'
import banner from './images/Banner.jpg'
import './Home.css'
import About from './About'

const Home = () => {

    // const navigate = useNavigate()

    // const change = () => {
    //     navigate('/contact')
    // }
    return (
        <>
            {/* <h1>This is home page</h1>
            <button onClick={() => navigate('/contact')}>Click me</button> */}
            <div className='home'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h1>Sale 20% Of <br /> On Everything</h1>
                            <p>Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.</p>
                            <button className='btn-shop'>Shop Now</button>

                        </div>
                        <div className='col-md-6'>
                            <img src={banner} alt='' height="auto" width="100%"></img>
                        </div>
                    </div>
                </div>
            </div>
            <About />
            
        </>
    )
}

export default Home