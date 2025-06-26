import React, { useState, useEffect } from 'react';
import { FaMoneyBill } from "react-icons/fa";
import { MdBiotech } from "react-icons/md";
import { GiHealthDecrease } from "react-icons/gi";
import { IoMdPeople } from "react-icons/io";
import { Button, Modal } from 'react-bootstrap';
import './App.css';

const Acca = () => {
  const [showModal, setShowModal] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="acca-container">
      <div className="row">
        <div className={`${windowWidth <= 768 ? 'col-12' : 'col-6'} acca-content fade-in-up`}>
          <h1 className="acca-title">Become ACCA in 18 months</h1>
          <p className="acca-description">
            ACCA (Association of Chartered Certified Accountants) is a globally recognized accounting qualification 
            that prepares individuals for a successful career in accounting, finance, and business.
          </p>

          <div className="cards">
            <div className="card fade-in-up">
              <FaMoneyBill className="card-icon" size={windowWidth <= 576 ? 30 : 40} />
              <p className="card-title">Finance</p>
              <p className="card-text">$94.5 billion</p>
            </div>
            <div className="card fade-in-up">
              <MdBiotech className="card-icon" size={windowWidth <= 576 ? 30 : 40} />
              <p className="card-title">Technology</p>
              <p className="card-text">$733.7 billion</p>
            </div>
            <div className="card fade-in-up">
              <GiHealthDecrease className="card-icon" size={windowWidth <= 576 ? 30 : 40} />
              <p className="card-title">Health</p>
              <p className="card-text">$1 trillion in lost</p>
            </div>
            <div className="card fade-in-up">
              <IoMdPeople className="card-icon" size={windowWidth <= 576 ? 30 : 40} />
              <p className="card-title">Faculty</p>
              <p className="card-text">Experts</p>
            </div>
          </div>

          <div className="button-container">
            <button type="button mx-2" className="btn btn-primary blue-button">Explore Website</button>
            <button type="button mx-2" className="btn btn-danger red-button">Start Your Journey</button>
          </div>
        </div>

        <div className={`${windowWidth <= 768 ? 'col-12' : 'col-6'} form-container slide-in-right`}>
          <div className="form">
            <h3 className="form-title">Aspiring to be with ACCA?<br />Get in Touch with Us</h3>

            <div className="form-group">
              <input 
                type="number" 
                className="form-control" 
                placeholder="Phone Number"
              />
            </div>
            
            <div className="form-group">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Email Id"
              />
            </div>
            
            <div className="form-group">
              <select className="form-control">
                <option>Current qualification</option>
                <option>MBA</option>
                <option>MCA</option>
              </select>
            </div>
            
            <div className="form-group">
              <select className="form-control">
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <button 
              type="button" 
              className="form-submit callback-b" 
              onClick={handleOpenModal}
            >
              Request CallBack
            </button>

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
    </div>
  );
};

export default Acca;