import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function Permission() {


  const [permissions, setpermissions] = useState("")

  
  function deletePermission(event , id) {
    event.preventDefault();
  
    axios.delete(`https://servicesemployeemanagement.herokuapp.com/api/permission/delete/${id}`)
  }  

useEffect(()=>{
  axios.get("https://servicesemployeemanagement.herokuapp.com/api/permission")
   .then(response=>{
     console.log(response.data)
     setpermissions(response.data)
  })
  return()=>{}
 },[])



    return (
      <div>
      <h1> نموذج الاستئذانات</h1>


<br></br>


<h1>      قائمة  الإستئذان           </h1>
<table style={{border:"1px  solid black"}}>
<tr>
  <td  style={{border:"1px  solid black"}} >أسم الموظف </td>
  <td  style={{border:"1px  solid black"}} >نوع الإستئذان </td>
  <td  style={{border:"1px  solid black"}} >مدة الإستئذان </td>
  <td  style={{border:"1px  solid black"}} >  بداية الإستئذان </td>
  <td  style={{border:"1px  solid black"}} >  نهاية الإستئذان </td>
  <td  style={{border:"1px  solid black"}} >  فسخ الإستئذان </td>
</tr>
{permissions.length ? permissions.map((permission, i) => {     
                          
                          // Return the element. Also pass key     
                          return ( 
                          
                            <tr>
                            <td  style={{border:"1px  solid black"}} >{permission.employee.name} </td>
                            <td  style={{border:"1px  solid black"}} >{permission.title}</td>
                            <td  style={{border:"1px  solid black"}} >{permission.date}</td>
                            <td  style={{border:"1px  solid black"}} >  {permission.starting_hour} </td>
                            <td  style={{border:"1px  solid black"}} >  {permission.ending_hour} </td>
                            <td  style={{border:"1px  solid black"}} >   <button  onClick={(event) => deletePermission(event,permission.permissionId)}>Delete</button></td>
                          </tr>
                          
                          ) 
                       }): <h4>null</h4>}

</table>


      </div>

    );
  }