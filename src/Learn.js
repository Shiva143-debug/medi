import "./App.css"

const Learn = () => {
    return (
        <div class="mt-5 mb-5" style={{ display: "flex", flexDirection: "column", justifyContent: "center", fontFamily: "sans-serif" }}>
            <h1 class="mt-5" style={{ color: "navy", fontWeight: "600", textAlign: "center" }}>What will you Learn in ACCA?</h1>
            <div class="custom-hr-container">
                <hr className="custom-hr" />
            </div>
            <div className="learn-cards">


                <div className="learn-card">
                    <div className="card-header">Knowledge Level</div>
                    <div className="card-body">
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam eu dolor fermentum aliquam.</li>
                            <li>Nullam non erat sit amet tortor luctus ultrices vel vitae lectus.</li>
                        </ul>
                    </div>
                    <div className="card-footer">3papers</div>
                </div>
                <div className="learn-card">
                    <div className="card-header">skill Level</div>
                    <div className="card-body">
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam eu dolor fermentum aliquam.</li>
                            <li>Nullam non erat sit amet tortor luctus ultrices vel vitae lectus.</li>
                        </ul>
                    </div>
                    <div className="card-footer">5papers</div>
                </div>
                <div className="learn-card">
                    <div className="card-header">Professional Level</div>
                    <div className="card-body">
                        <p style={{color:"navy",fontWeight:"bold"}}>Category</p>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam eu dolor fermentum aliquam.</li>
                            <li>Nullam non erat sit amet tortor luctus ultrices vel vitae lectus.</li>
                        </ul>
                        <p style={{color:"navy",fontWeight:"bold"}}>Two out of the following</p>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam eu dolor fermentum aliquam.</li>
                            <li>Nullam non erat sit amet tortor luctus ultrices vel vitae lectus.</li>
                        </ul>

                    </div>
                    <div className="card-footer">4papers</div>
                </div>
            </div>
        </div>
    )
}

export default Learn