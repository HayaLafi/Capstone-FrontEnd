import React, { useEffect, useState } from 'react'
import axios from "axios"
export default function Complain() {
  const [complains, setComplains] = useState("")

  function deleteComplain(event , id) {
    event.preventDefault();
   
    axios.delete(`https://servicesemployeemanagement.herokuapp.com/api/complain/delete/${id}`)
  }  
useEffect(()=>{
  axios.get("api/complain")
   .then(response=>{
     console.log(response.data)
     setComplains(response.data)
  })
  return()=>{}
 },[])

    return (
    <div>
      <h1>شكاوى الموظفين</h1>

      
<br></br>
<hr></hr>

<h1>      قائمة  شكاوى            </h1>
<table style={{border:"1px  solid black"}}>
<tr>
  <td  style={{border:"1px  solid black"}} >أسم الموظف </td>
  <td  style={{border:"1px  solid black"}} >نوع الشكوى </td>
  <td  style={{border:"1px  solid black"}} >وصف الشكوى </td>

  <td  style={{border:"1px  solid black"}} >  فسخ الشكوى </td>
</tr>
{complains.length ? complains.map((complain, i) => {     
                          
                          // Return the element. Also pass key     
                          return ( 
                          
                            <tr>
                            <td  style={{border:"1px  solid black"}} >{complain.employee.name} </td>
                            <td  style={{border:"1px  solid black"}} >{complain.type}</td>
                            <td  style={{border:"1px  solid black"}} >{complain.description}</td>
                            
                            <td  style={{border:"1px  solid black"}} >   <button class="bb" onClick={(event) => deleteComplain(event,complain.id)}>Delete</button></td>
                          </tr>
                          
                          ) 
                       }): <h4>null</h4>}

</table>


      </div>

    );
  }