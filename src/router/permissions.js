import React, { useEffect, useState } from 'react'
import axios from "axios"
export default function Permissions() {
  const[permissionId ,setPermissionId]= useState("")
  const[date ,setdate]= useState("")
  const[startinghour ,setstartinghour]= useState("")
  const[endinghour ,setendinghour]= useState("")
  const[title,settitle]= useState("")
  const[description ,setdescription]= useState("")
  const [employees, setEmployees] = useState("")
  const [employee, setEmployee] = useState("")
  const [permissions, setpermissions] = useState("")
  let newPermission = {
          permissionId:permissionId ,
          date :date ,
          ending_hour:endinghour,
          starting_hour:startinghour,
          title:title,
          description :description,
          employee : employee,
  }
  function handleid(event){
    setPermissionId((event.target.value));
  }

  function handledate(event){
    setdate((event.target.value));
}

function handlestartinghour(event){
  setstartinghour((event.target.value));
}
function handleendinghour(event){
  setendinghour((event.target.value));
}
function handleSelectType(event){
  settitle(event.target.value);
}
function handledescription(event){
  setdescription((event.target.value));
}

function handleSelect(event){
  let obj = JSON.parse(event.target.value); 
  setEmployee(obj) 
  console.log(employee)
}

function handleAddPermission(event){
  event.preventDefault();
  axios({
    method:'post',
    url:'https://servicesemployeemanagement.herokuapp.com/api/permission/add',
    data:newPermission
  });
  }
  // function deletePermission(event , id) {
  //   event.preventDefault();
  
  //   axios.delete(`/api/permission/delete/${id}`)
  // }  

useEffect(()=>{
  axios.get("https://servicesemployeemanagement.herokuapp.com/api/permission")
   .then(response=>{
     console.log(response.data)
     setpermissions(response.data)
  })
  return()=>{}
 },[])


useEffect(() => {
  axios.get("api/employee")
      .then(response => {
          console.log(response.data)
          setEmployees(Array.from(response.data))
      })
  return () => { }
}, [])
    return (
      // <div>
      
<div class ="haya4">
      <h1>??????????????????????</h1>

      <br></br>
      <label > ?????? ??????????????????  </label>
        <dr />
        <input
        type="text"
        placeholder="Id"
        name="Id"
        onChange= {handleid}         />
        <br></br>
        <br></br>
        <label >    ?????? ??????????????????  </label> 
        <dr /> 
        <select  onChange={handleSelectType}>
                        <option value="">???????????? ?????????? ????????</option>
                        <option value="???????????? ????????">???????????? ????????</option>
                        <option value="???????? ???? ????????????">???????? ???? ???????????? </option>
                        <option value="???????????? ?? ???????????? ?????????? ??????????">???????????? ?? ???????????? ?????????? ?????????? </option>
                        <option value="????????">????????</option>
                    </select>
<br></br>
<br></br>
<label > ?????????? ?????????????????? </label>
<dr />
<input
type="text"
placeholder="Date"
name="date"
onChange= {handledate}         />

<br></br>
<br></br>

<label > ???????? ?????????? ??????????????????</label>
<dr />
<input
type="text"
placeholder="Date"
name="sdate"
onChange= {handlestartinghour}         />

<br></br>
<br></br>

<label > ???????? ?????????? ?????????????????? </label>
<dr />
<input
type="text"
placeholder="Date"
name="edate"
onChange= {handleendinghour}         />
<br></br>
<br></br>

<label > ?????????? ??????????????????  </label>
<dr />

<br></br>
<br></br>
<textarea placeholder="description " onChange={handledescription}
    style={{ width: "90%", height: "90px", marginTop: "5px" }}
>
</textarea>
<br></br>
<br></br>
<label > ?????? ????????????</label>
            <br></br>
           <select  onChange={handleSelect}>
                <option value="">--Please choose an option--</option>
                {employees.length ? employees.map((empl, i) => {     
                          
                          // Return the element. Also pass key     
                          return ( <option value={JSON.stringify(empl)}>{empl.name}</option>) 
                       }): <h4>null</h4>}
                
               
                
            </select>
            <br></br>
<br></br>
<button class="b1" onClick={handleAddPermission} > Submit </button> 

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<hr></hr>

{/* <h1>      ??????????  ??????????????????           </h1>
<table style={{border:"1px  solid black"}}>
<tr>
  <td  style={{border:"1px  solid black"}} >?????? ???????????? </td>
  <td  style={{border:"1px  solid black"}} >?????? ?????????????????? </td>
  <td  style={{border:"1px  solid black"}} >?????? ?????????????????? </td>
  <td  style={{border:"1px  solid black"}} >  ?????????? ?????????????????? </td>
  <td  style={{border:"1px  solid black"}} >  ?????????? ?????????????????? </td>
  <td  style={{border:"1px  solid black"}} >  ?????? ?????????????????? </td>
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
                            <td  style={{border:"1px  solid black"}} >   <button onClick={(event) => deletePermission(event,permission.permissionId)}>Delete</button></td>
                          </tr>
                          
                          ) 
                       }): <h4>null</h4>}

</table>
 */}

      </div>

    );
  }