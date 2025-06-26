import React, { useState, useEffect } from 'react';
import { LiaBuromobelexperte } from "react-icons/lia";
import { FcBusinessman } from "react-icons/fc";
import { TbReplaceFilled } from "react-icons/tb";
import "./App.css";

const Wcu = () => {
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
    
    return (
        <div className="wcu-container fade-in-up">
            <h2 className="section-title">Why Choose Us?</h2>
            
            <div className="wcu-cards">
                <div className="wcu-card slide-in-left">
                    <LiaBuromobelexperte className="wcu-icon" size={windowWidth <= 576 ? 40 : 50} />
                    <h3 className="wcu-title">Expert Faculty</h3>
                    <p className="wcu-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Our faculty members are industry experts with years of experience.
                    </p>
                </div>
                
                <div className="wcu-card fade-in-up">
                    <FcBusinessman className="wcu-icon" size={windowWidth <= 576 ? 40 : 50} />
                    <h3 className="wcu-title">Complete Success Package</h3>
                    <p className="wcu-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        We provide comprehensive study materials and support.
                    </p>
                </div>
                
                <div className="wcu-card slide-in-right">
                    <TbReplaceFilled className="wcu-icon" size={windowWidth <= 576 ? 40 : 50} />
                    <h3 className="wcu-title">Placements</h3>
                    <p className="wcu-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        We have strong industry connections for excellent placement opportunities.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Wcu;

