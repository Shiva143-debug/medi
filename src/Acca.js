import React, { useState } from 'react';

import './App.css';
import { FaMoneyBill } from "react-icons/fa";
import { MdBiotech } from "react-icons/md";
import { GiHealthDecrease } from "react-icons/gi";
import { IoMdPeople } from "react-icons/io";
import { Button, Modal } from 'react-bootstrap';

const Acca=()=>{
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
    return (
       <div class="row" style={{backgroundColor:"whitesmoke",display:"flex",justifyContent:"space-around",fontFamily:"sans-serif",flexWrap:"wrap"}}>

        <div class="col-5 mx-2">

        <h1 class="mt-5" style={{color:"navy",fontWeight:"bold"}}>Become ACCA in 18 months</h1>
        <p style={{color:"navy",fontWeight:"600"}}>ACCA (Association of Chartered Certified Accountants) is a globally recognized accounting qualification that prepares individuals for a successful career in accounting, finance, and business. </p>

        <div className="cards mt-5">
            <div className="card p-2">
                    <p><FaMoneyBill /> Finance</p>
                    <p>$94.5 billion . </p>
            </div>
            <div className="card p-2">
                    <p><MdBiotech /> Technology</p>
                    <p> $733.7 billion </p>
            </div>
            <div className="card p-2">
                    <p><GiHealthDecrease /> Health</p>
                    <p>$1 trillion in lost </p>
            </div>
            <div className="card p-2">
                    <p><IoMdPeople /> Faculty</p>
                    <p>Experts </p>
            </div>

        </div>


        <div className='lg-buttons mt-5' >
            <button type="button" className="blue-button">Explore Website</button>
            <button type="button" className="red-button">Click Here to start Journey</button>
        </div>

        </div>


        <div class="col-5  mb-5" >
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
                  

                  <button type="button" className="callback-b"  onClick={handleOpenModal}>Request CallBack</button>

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

export default Acca