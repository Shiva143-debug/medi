import React from 'react'
import Card from 'react-bootstrap/Card';
import { LiaBuromobelexperte } from "react-icons/lia";
import { FcBusinessman } from "react-icons/fc";
import { TbReplaceFilled } from "react-icons/tb";
import "./App.css"


const Wcu=()=> {
    
    return (
        <div style={{fontFamily:"sans-serif"}}> 
            <center>
            <div className='mt-5'>
           
               <h2  style={{color:"navy",fontWeight:"bold"}}>Why Choose Us?</h2>
                <hr class="mb-5" style={{ width: '100px', border: '3px solid blue', margin: 'auto', marginTop: '5px', marginBottom: '5px' }} />

          
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    
                    
                        <div class="mx-3" className='wcu-card'>
                            <div className='mt-4'>
                                <LiaBuromobelexperte size={50}  style={{color:"navy"}}/>
                            </div>
                            <div className='mt-4' style={{color:"navy"}}>
                                <b>Expert facualty</b>
                            </div>
                            <div>
                                <p className='mt-3' style={{color:"navy"}}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>
                     
                    </div>
                    
                        <div class="mx-3" className='wcu-card'>
                            <div className='mt-4'>
                                <FcBusinessman size={50}  style={{color:"navy"}}/>

                            </div>

                            <div className='mt-4' style={{color:"navy"}}>
                                <b>Complete Success Package</b>
                            </div>
                            <div>
                                <p className='mt-3' style={{color:"navy"}}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>


                    </div>
                    
                        <div class="mx-3" className='wcu-card'>
                            <div className='mt-4'>
                                <TbReplaceFilled size={50} style={{color:"navy"}}/>

                            </div>
                            <div className='mt-4' style={{color:"navy"}}>
                                <b>Placements</b>
                            </div>
                            <div>
                                <p className='mt-3' style={{color:"navy"}}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>

                        </div>

              


                </div>
             
            </div>

            </center>

        </div>
    )
}

export default Wcu


