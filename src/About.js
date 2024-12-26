import React from 'react';
import "./About.css";
import men from './images/Men.png'

const About = () => {
  return (
    <>
      <div className='section2 mt-3'>
        <div className='container'>
          <h1 className='main-heading'>Why Shop With Us</h1>
          <div className='row mt-5'>
            <div className='col-md-4'>
              <div className='card'>
                <div className='card-body'>
                  <h4 className='heading'>Fast Delivery</h4>
                  <p className='para'>variations of passages of Lorem Ipsum available</p>

                </div>

              </div>

            </div>
            <div className='col-md-4'>
              <div className='card'>
                <div className='card-body'>
                  <h4 className='heading'>Free Shiping</h4>
                  <p className='para'>variations of passages of Lorem Ipsum available</p>

                </div>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='card'>
                <div className='card-body'>
                  <h4 className='heading'>Best Quality</h4>
                  <p className='para'>variations of passages of Lorem Ipsum available</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='section3 mt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <img src={men} alt='' height="auto" width="100%"></img>



            </div>
            <div className='col-md-6'>
              <h1 className='heading pt-3'>#NewArrivals</h1>
              <p className='para pt-3'>Vitae fugiat laboriosam officia perferendis provident aliquid voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic? Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem similique ex unde!</p>
              <button className='button mt-3'>Shop Now</button>
            </div>

          </div>

        </div>

      </div>

    </>
  )
};

export default About;