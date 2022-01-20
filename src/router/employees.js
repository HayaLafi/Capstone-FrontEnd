import React, { useEffect, useState } from 'react'
import axios from "axios"
export default function Employees(){
 
const [myEmployee, setMyEmployee] = useState ("")
  function deleteEmployee(event , id) {
    event.preventDefault();

    axios.delete(`https://servicesemployeemanagement.herokuapp.com//api/employee/delete/${id}`)
  } 

    useEffect(() => {
 axios.get("https://servicesemployeemanagement.herokuapp.com/api/employee")
   .then(response => {
   console.log(response.data)
  setMyEmployee(response.data)
 })
 
  return () => { }
       }, [])

       return (
        <div>
          <center>
      <div>
 <div  >
 <p></p>

 {myEmployee.length ? myEmployee.map((item, i) => {     
                            
   // Return the element. Also pass key     
    return ( 
 
<tr key={item.id}>
<div  class ="hello"> 
<div ></div>
<div >
  <div >
{/* <img height="200" width="200" src={item.treetype.image} /> */}
</div>
  </div>
  <div >
  </div>
 <div>
 <p>Id :{item.id} </p>
   <p> Name : {item.name}</p>
  <p>email :{item.email} </p>
 <p> mobile : {item.name}</p>
  <p> password : {item.password}</p>
  <img src={item.description} />                               
   </div>
   <button class="zz"  onClick={(e) => deleteEmployee(e,item.id)}>delete</button>
 <div >
</div>
</div>

</tr>
)}): <h4></h4>}
                    
</div>
</div>

{/*   
  <h1>     قائمة الموظفين          </h1>
 
  <table style={{border:"1px  solid black"}}>
  <tr>
  <td  style={{border:"1px  solid black"}} >  معرف الموظف </td>
    <td  style={{border:"1px  solid black"}} >أسم الموظف </td>
    <td  style={{border:"1px  solid black"}} >ايميل الموظف </td>
    <td  style={{border:"1px  solid black"}} >رقم الموظف</td>
    <td  style={{border:"1px  solid black"}} >  صورة الموظف </td>
    <td  style={{border:"1px  solid black"}} > حذف   </td>
  </tr>
  {myEmployee.length ? myEmployee.map((employee, i) => {     
                            
   // Return the element. Also pass key     
return ( 
                            
<tr>
<td  style={{border:"1px  solid black"}} >{employee.id} </td>
<td  style={{border:"1px  solid black"}} >{employee.name}</td>
<td  style={{border:"1px  solid black"}} >{employee.email}</td>
<td  style={{border:"1px  solid black"}} >  {employee.mobile} </td>
<td  style={{border:"1px  solid black"}} >  <img src={employee.photo} width="150" height="200"/> </td>
<td  style={{border:"1px  solid black"}} >   <button onClick={(event) => deleteEmployee(event,employee.id)}>Delete</button></td>
</tr>
                            
) 
 }): <h4>null</h4>}
  
  </table> */}
  </center>
 </div>
  
 );


}

    