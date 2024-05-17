import React from 'react'
import '../Styles/Aboutus.css'

const Aboutus = () => {
  return (
    <div>
    <div className="abtus-content">
    <h1>About Us</h1>
    <p>We are the best in business as compared to others in offering innovations</p>
  </div>

  <div className='abtus-content2 mt-5'>
  <h3>We work hard to provide you the best<br></br> quality projects and<br></br> innovations</h3>
  </div>
  
  <div className='abtus-container mt-5'>
  <h2>Our Company</h2>
  <p>We are the best in business in terms of innovation and creating projects based on consumer interest and<br></br> needs</p>
  <img src='https://img.freepik.com/premium-photo/dream-word-flower-pots_23-2148875408.jpg?w=826' style={{width:'1000px',height:'', marginTop:'100px'}}/>
  </div>

  <div className=' footercontactus mt-5'>
  <div className='row'>
    <div className='col-md-2'>
      <img src="https://iravad.com/wp-content/uploads/2019/10/photo-1478358161113-b0e11994a36b.jpg" style={{ width: '180px', height: '220px' }} />
    </div>
    <div className='col-md-7'>
      <h3>Contact us for more innovative ideas !</h3>
      <p>Innovation plays an important role in organizing the events and establishing it in <br></br>terms of creative thoughts.</p>
    </div>
    <div className='col-md-3'>
      <button className='contactus-btn'> CONTACT US</button>
    </div>
  </div>
</div>
  </div>
  )
}

export default Aboutus
