import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='container'>
                    <p className='pt-3'>&copy; 2024 All Rights Reserved</p>
                    <p>Designed By <Link to="#">Vaidika Sharma</Link></p>



                </div>
            </div>

        </>
    )
}

export default Footer 