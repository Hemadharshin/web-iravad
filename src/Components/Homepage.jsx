import React from 'react';
import '../Styles/Homepage.css'

function Homepage() {
  return (
    <div className=''>
     
      <section className="content-header"  >
        <img src="https://iravad.com/index_files/floral-divider-free-img.png" style={{ width: '200px' }} />
        <div className="content">
          <h1>Iravad, Unleashing Ideas</h1>
        </div>
      </section>

      <div className='our-profilecontainer '>
        <h1 className='Ourprofile '>Our Portfolio</h1>
        <div className='container'>
          <div className="row mt-5">

            <div className="col-md-4">
              <div className='card'>
                <div className='card-panel  panel-responsive'>
                  <h2><a href="https://iravad.com/#">Responsive</a></h2>
                  <p>Our products are customer friendly and responsive.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className='card'>
                <div className='card-panel  panel-innovative'>
                  <h2><a href="https://iravad.com/#">Innovative</a></h2>
                  <p>Innovation plays an important role in our many application.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className='card'>
                <div className='card-panel panel-creative'>
                  <h2><a href="https://iravad.com/#">Creative</a></h2>
                  <p>Creating and deploying products in terms of innovation and making.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className='our-servicecontainer mt-3'>
        <h1 className='Ourservice'>Our Service</h1>
        <div className='container'>
          <div className="row mt-5">
            <div className="col-md-3">
              <div className='servicecard'>
                <h2 className='service-title'>IOT</h2>
                <p>Sense, collect, analyse, transfer and exchange data, nil human interaction, remote monitoring and control.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className='servicecard'>
                <h2 className='service-title'>Robotics</h2>
                <p>Information processing, automation, problem solving and innovation and processing the various ideas.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className='servicecard'>
                <h2 className='service-title'>AI</h2>
                <p>Providing solutions like security, control, verification and validation systems.And engage ourselves in the projects.</p>
              </div>
            </div>


            <div className="col-md-3">
              <div className='servicecard'>
                <h2 className='service-title'>Design</h2>
                <p>Design solutions, prototype, customization, training & workshops, hands-on projects and other systems.</p>
              </div>
            </div>

          </div>
        </div>
      </div>




      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <img src="https://iravad.com/wp-content/uploads/2019/10/photo-1494869042583-f6c911f04b4c-1024x683.jpg" alt='eye' className='humaneye' />
          </div>
          <div className='col-md-3'>
            <img src="https://iravad.com/wp-content/uploads/2019/10/77-1.jpg" alt='robort' className='robort' />
          </div>
          <div className='col-md-3'>
            <img src="https://iravad.com/wp-content/uploads/2019/10/photo-1494083306499-e22e4a457632-1024x681.jpg" alt='security img' className='security' />
          </div>
          <div className='col-md-3'>
            <img src="https://iravad.com/wp-content/uploads/2019/10/sharegrid-eQjFamwCDgE-unsplash-1024x576.jpg" alt='design' className='design' />
          </div>
        </div>
      </div>
       
      <section className='latest-project mt-5'>
      <div className='card1'>
      <h3>Latest Projects</h3>
      <p>Our latest projects include the major functioning of a electronic lantern and modelling<br></br> a mini 
      city on the respected basics</p>
      </div>
      <div className='card2'>
      <div className='row'>
      <div className='col-md-6'> <img src='https://iravad.com/wp-content/uploads/2019/10/77-1.jpg' style={{height:'280px',width:'240px', borderRadius:'22px',marginRight:'6px'}}/></div>
      <div className='col-md-6'>
      <h2 >Modelling a city</h2>
      <hr className='horizontal-line'></hr>
      <p>This Children's workshop teaches how to design a mini city and ways to automate the lighting around the city using paper circuits. Learning about reducing the energy usage.</p>
      </div>
      </div>
      </div>
      <div className='card3'>
      <div className='row'>
      <div className='col-md-6'> <img src='https://iravad.com/wp-content/uploads/2019/10/77-1.jpg' style={{height:'290px',width:'240px',borderRadius:'22px',marginRight:'5px'}}/></div>
      <div className='col-md-6'>
      <h2>Electronic Lantern</h2>
      <hr className='horizontal-line'></hr>
      <p>We conducted a Science Workshop for school children on how to use paper circuits to make an electronic lantern with an ON_OFF switch. These were fully hand-crafted, take home art-science kits</p>
      </div>
      </div>
      </div>
      
      <div className='card4'>
      <div className='row'>
      <div className='col-md-6'>
      <img src='https://iravad.com/wp-content/uploads/2019/10/77-1.jpg' style={{height:'280px',width:'240px',borderRadius:'22px',marginRight:'6px'}}/></div>
      <div className='col-md-6'>
      <h2>Innovative projects</h2>
      <hr className='horizontal-line'></hr>
      <p>We are proud and happy to announce that the next innovative projects are commonly based on the multiple solution system and the working process goes on to the final stage of the projects.</p>
      </div>
      </div>
      </div>
      </section>


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
  );
}

export default Homepage;


