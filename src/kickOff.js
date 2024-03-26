import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import "./App.css"

const KickOff=()=>{
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
    return(
        <div class="row" style={{backgroundColor:"whitesmoke",display:"flex",justifyContent:"space-around",fontFamily:"sans-serif"}}>

        <div class="col-6 mx-1">

        <h1 class="mt-5" style={{color:"navy",fontWeight:"bold"}}>Kick off your ACCA Prep journey with IndigoLearn</h1>
        <p style={{color:"navy",fontWeight:"600"}}>sign-in and get instant access to our Free courses.</p>

       


        <div className='lg-buttons mt-5' >
            
            <button type="button" className="red-button">Click Here to start Journey</button>
        </div>

        </div>


        <div class="col-4  mb-5" >
            <div className='form  mt-5'>
                  <p style={{color:"navy",fontWeight:"600",textAlign:"center",fontSize:"20px"}}>Aspring to be with ACCA Get in Touch with Us</p>

                  <input type="number" class="form-control mb-3" placeholder='Phone Number'/>
                  <input type="email" class="form-control mb-3" placeholder='Email Id'/>
                  <select  class="form-control mb-3">
                    <option>Current qualification</option>
                    <option>MBA</option>
                    <option>MCA</option>
                  </select>
                  <select  class="form-control mb-3">
                    <option>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>

                  <button type="button" className="callback-b2" onClick={handleOpenModal}>Request CallBack</button>
            
                  <Modal show={showModal} onHide={handleCloseModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Request Call Back</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Success! We will call you back shortly.</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                        </Modal.Footer>
                    </Modal>
            
            </div>
        </div>
       </div>
    )
}
export default KickOff