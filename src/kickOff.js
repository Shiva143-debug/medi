import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import "./App.css";

const KickOff = () => {
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
        <div className="kickoff-container">
            <div className="row">
                <div className={`${windowWidth <= 768 ? 'col-12' : 'col-6'} kickoff-content fade-in-up`}>
                    <h2 className="kickoff-title">Kick off your ACCA Prep journey with IndigoLearn</h2>
                    <p className="kickoff-description">Sign-in and get instant access to our Free courses.</p>

                    <div >
                        <button type="button" className="btn btn-danger red-button">Click Here to Start Journey</button>
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
                            className="form-submit callback-b2" 
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

export default KickOff;