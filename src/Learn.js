import React from "react";
import "./App.css";

const Learn = () => {
    return (
        <div className="learn-container fade-in-up">
            <h2 className="section-title">What will you Learn in ACCA?</h2>
            
            <div className="learn-cards">
                <div className="learn-card slide-in-left">
                    <div className="card-header">Knowledge Level</div>
                    <div className="card-body">
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam eu dolor fermentum aliquam.</li>
                            <li>Nullam non erat sit amet tortor luctus ultrices vel vitae lectus.</li>
                            <li>Praesent facilisis magna vel libero convallis, eu finibus massa facilisis.</li>
                        </ul>
                    </div>
                    <div className="card-footer">3 Papers</div>
                </div>

                <div className="learn-card slide-in-right">
                    <div className="card-header">Professional Level</div>
                    <div className="card-body">
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam eu dolor fermentum aliquam.</li>
                            <li>Nullam non erat sit amet tortor luctus ultrices vel vitae lectus.</li>
                        </ul>
                        <p>Two out of the following</p>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam eu dolor fermentum aliquam.</li>
                            <li>Nullam non erat sit amet tortor luctus ultrices vel vitae lectus.</li>
                        </ul>
                    </div>
                    <div className="card-footer">4 Papers</div>
                </div>
                
                <div className="learn-card fade-in-up">
                    <div className="card-header">Skill Level</div>
                    <div className="card-body">
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam eu dolor fermentum aliquam.</li>
                            <li>Nullam non erat sit amet tortor luctus ultrices vel vitae lectus.</li>
                            <li>Praesent facilisis magna vel libero convallis, eu finibus massa facilisis.</li>
                            <li>Etiam eget magna in nisi varius varius in vel magna.</li>
                        </ul>
                    </div>
                    <div className="card-footer">5 Papers</div>
                </div>
                
                
            </div>
        </div>
    );
};

export default Learn;