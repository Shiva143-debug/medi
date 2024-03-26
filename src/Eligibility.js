import { SiLevelsdotfyi } from "react-icons/si";
import { TbTimeDuration10 } from "react-icons/tb";
import { PiExamFill } from "react-icons/pi";
import { FaRegCalendarCheck } from "react-icons/fa";

const Eligibility = () => {
    return (

        <div className='mt-5 mb-5 mx-5' style={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>
            <div class="mx-5 mb-2" style={{display:"flex",flexDirection:"column" ,justifyContent:"center",alignItems:"center", boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',width:"250px",borderRadius:"8px",borderTop:"2px solid blue" }}>
                <h4 style={{ color: "navy" }}>Levels</h4>
                <p style={{ color: "navy" }}><SiLevelsdotfyi style={{ color: "navy" }} /> Three(1 - 3 pages)</p>
                
            </div>
            <div class="mx-5 mb-2" style={{display:"flex",flexDirection:"column" ,justifyContent:"center",alignItems:"center", boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',width:"250px",borderRadius:"8px",borderTop:"2px solid blue" }}>
                <h4 style={{ color: "navy" }}>Duration</h4>
                <p style={{ color: "navy" }}><TbTimeDuration10 style={{ color: "navy" }} /> 6-30 Days</p>
                
            </div>
            <div class="mx-5 mb-2" style={{display:"flex",flexDirection:"column" ,justifyContent:"center",alignItems:"center", boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',width:"250px",borderRadius:"8px",borderTop:"2px solid blue" }}>
                <h4 style={{ color: "navy" }}>Exams</h4>
                <p style={{ color: "navy" }}><PiExamFill style={{ color: "navy" }}  /> Quarterly (Online)</p>
                

            </div>

            <div class="mx-5 mb-2" style={{display:"flex",flexDirection:"column" ,justifyContent:"center",alignItems:"center", boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',width:"250px",borderRadius:"8px",borderTop:"2px solid blue" }}>
                <h4 style={{ color: "navy" }}>Exemptions</h4>
                <p style={{ color: "navy" }}><FaRegCalendarCheck style={{ color: "navy" }}   /> Upto 9 pages</p>
                
            </div>
           

        </div>
    )
}

export default Eligibility