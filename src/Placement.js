import React from 'react';
import "./App.css"

const Placement = () => {
    return (
        <div className="placement-container fade-in-up">
            <h2 className="placement-title">100% Placement Assistance</h2>
            
            <div className="placement-content">
                <div className="placement-item slide-in-left">
                    <h3 className="placement-item-title">Resume Building</h3>
                    <p className="placement-item-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        We help you create professional resumes that stand out to potential employers.
                        Our expert team will guide you through the process of highlighting your skills and achievements.
                    </p>
                </div>
                
                <div className="placement-item fade-in-up">
                    <h3 className="placement-item-title">Career Counselling</h3>
                    <p className="placement-item-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry we need to choose our own.
                        Our career counselors provide personalized guidance to help you make informed decisions about your career path.
                        We offer one-on-one sessions to discuss your goals, strengths, and opportunities.
                    </p>
                </div>
                
                <div className="placement-item slide-in-right">
                    <h3 className="placement-item-title">Jobs</h3>
                    <p className="placement-item-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        We have partnerships with leading companies in the finance and accounting sectors.
                        Our placement cell actively works to connect students with job opportunities that match their skills and aspirations.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Placement;