import React, { useState, useEffect } from 'react';
import { SiLevelsdotfyi } from "react-icons/si";
import { TbTimeDuration10 } from "react-icons/tb";
import { PiExamFill } from "react-icons/pi";
import { FaRegCalendarCheck } from "react-icons/fa";
import "./App.css"

const Eligibility = () => {
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
        <div className="fade-in-up">
            <h2 className="section-title">Eligibility & Requirements</h2>
            
            <div className="eligibility-container mt-5">
                <div className="eligibility-card slide-in-left">
                    <h4 className="eligibility-title">Levels</h4>
                    <p className="eligibility-text">
                        <SiLevelsdotfyi className="eligibility-icon" size={windowWidth <= 576 ? 16 : 20} />
                        Three (1 - 3 pages)
                    </p>
                </div>
                
                <div className="eligibility-card fade-in-up">
                    <h4 className="eligibility-title">Duration</h4>
                    <p className="eligibility-text">
                        <TbTimeDuration10 className="eligibility-icon" size={windowWidth <= 576 ? 16 : 20} />
                        6-30 Days
                    </p>
                </div>
                
                <div className="eligibility-card fade-in-up">
                    <h4 className="eligibility-title">Exams</h4>
                    <p className="eligibility-text">
                        <PiExamFill className="eligibility-icon" size={windowWidth <= 576 ? 16 : 20} />
                        Quarterly (Online)
                    </p>
                </div>
                
                <div className="eligibility-card slide-in-right">
                    <h4 className="eligibility-title">Exemptions</h4>
                    <p className="eligibility-text">
                        <FaRegCalendarCheck className="eligibility-icon" size={windowWidth <= 576 ? 16 : 20} />
                        Upto 9 pages
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Eligibility;