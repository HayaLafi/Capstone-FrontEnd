import React, { useEffect, useState } from 'react'
import axios from "axios"
export default function Homepage() {

  
  return (<>
    <h1>       بيانات الشركة          </h1>
    <br></br>
    <div className="row">
    <div className="col-md-6">
              <table style={{border:"1px  solid black" }}>
              <tr>
                <td  style={{border:"1px  solid black", width:"600px", height:"50px"}} >إسم الشركة  </td>
                <td  style={{border:"1px  solid black", width:"600px", height:"50px"}} >شركة هياء للتجارة </td>
              </tr>
              <tr>
                <td  style={{border:"1px  solid black" , width:"600px" , height:"50px"}} >المدير   </td>
                <td  style={{border:"1px  solid black", width:"600px", height:"50px"}} >هياء لافي   الرويلي </td>
                
              </tr>
              <tr>
                <td  style={{border:"1px  solid black",  width:"600px" , height:"50px"}} >رقم الهاتف  </td>
                <td  style={{border:"1px  solid black", width:"600px", height:"50px"}} >04629748 </td>
                
              </tr>
              <tr>
                <td  style={{border:"1px  solid black", width:"600px", height:"50px"}} >رقم الجوال  </td>
                <td  style={{border:"1px  solid black", width:"600px", height:"50px"}} >0531264128 </td>
                
              </tr>
              <tr>
                <td  style={{border:"1px  solid black",width:"600px", height:"50px"}} >رقم الفاكس  </td>
                <td  style={{border:"1px  solid black", width:"600px", height:"50px"}} >369369 </td>
                
              </tr>
              <tr>
                <td  style={{border:"1px  solid black", width:"600px", height:"50px"}} >العنوان </td>
                <td  style={{border:"1px  solid black", width:"600px", height:"50px"}} >  سكاكا الجوف </td>
                
              </tr>

              <tr>
                <td  style={{border:"1px  solid black", width:"600px", height:"50px"}} >السجل التجاري  </td>
                <td  style={{border:"1px  solid black", width:"600px", height:"50px"}} >341204128 </td>
                
              </tr>
              </table>
    </div>     
    {/* <div className="col-md-6">
        </div>  */}
    </div>
     </>
 )
}
