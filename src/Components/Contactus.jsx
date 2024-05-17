import React from 'react'
import '../Styles/Contactus.css'
const Contactus = () => {
  return (
    <div>
      <div className="contactus-content">
        <h1>Contact Us</h1>
        <p>Innovation plays an important role in organizing the events and establishing it in terms <br></br>of creative thoughts.</p>
      </div>

      
      <div className='contactus-card mt-2'>
      
        <img src='https://iravad.com/ContactUs_files/floral1-divider-free-img.png' style={{width:'170px',top:'20px'}} />
        <div className='row mt-3'>
          <div className='col-md-6'>
            <h5>Phone:</h5><h6>+6594238340</h6>
          </div>

          <div className='col-md-6'>
            <h5>email:</h5>
            <h6>
              sales@iravad.com
              <br/>
              admin@iravad.com</h6>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Contactus
