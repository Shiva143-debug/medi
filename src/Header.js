import 'bootstrap/dist/css/bootstrap.min.css';
// import { RiLogoutBoxRFill } from "react-icons/ri";
import { IoFlower } from "react-icons/io5";
import { BsCalendar3RangeFill } from "react-icons/bs";


const Header =()=>{
  return(
   <div class="p-3" className="headerC" style={{backgroundColor:"navy",color:"white",display:"flex",justifyContent:"space-around",alignItems:"center",fontWeight:"bold"}}>
    <div style={{display:"flex"}}>
    <BsCalendar3RangeFill class="mt-2 mx-3" />
      <p>Company Name</p>
    </div>

    <div style={{display:"flex"}}>
      <p style={{ marginRight: "20px" }}>Home</p>
      <p style={{ marginRight: "20px" }}>About</p>
      <p style={{ marginRight: "20px" }}>contactUs</p>
    </div>

    <div>
    <button type="button" className='h-button'><IoFlower size={20} />   Logout</button>
    </div>

   </div>
  )
}
export default Header