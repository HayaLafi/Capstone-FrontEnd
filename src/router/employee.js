import React, { useEffect, useState } from 'react'
import axios from "axios"
export default function Employee() {

  const [id, setid] = useState("")
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [mobile, setmobile] = useState("")
  const [password, setpassword] = useState("")
  const [selectedFile, setSelectedFile] = useState("")

  const [myEmployee, setMyEmployee] = useState({ id: "", name: "", email: "", mobile: "", password: "" })

  function handelid(event) {
    setid((event.target.value));
  }

  function handelname(event) {
    setname((event.target.value));
  }
  function handelemail(event) {
    setemail((event.target.value));
  }
  function handelmobile(event) {
    setmobile((event.target.value));
  }
  function handelpassword(event) {
    setpassword((event.target.value));
  }
  function onFileChange(event) {
    setSelectedFile(event.target.files[0]); 
  }


  let nuwEmployee = {
    id: id,
    name: name,
    email: email,
    mobile: mobile,
    password: password
  }


  useEffect(() => {
    axios.get("https://servicesemployeemanagement.herokuapp.com/api/employee")
      .then(response => {
        console.log(response.data)
        setMyEmployee(response.data[0])
      })
     return () => { }
   }, [])

  function handleClick(event) {
      const formData = new FormData();
          formData.append(
            "file",
            selectedFile
            
          );
    
          formData.append(
              "employeeStr",  JSON.stringify(nuwEmployee) 
          )
      event.preventDefault();
      console.log("add func")
     axios({
       method:'post',
       url:'https://servicesemployeemanagement.herokuapp.com/api/employee/New',
       data:formData
     });
    
    
  }

  return (
   

<div class ="haya">
 
      <form >
      
        <div>
          <hr />
          <h1> تسجيل الموظفين   </h1>
          <label >  الرقم الوظيفي  </label>
          <dr />
          <input
            type="text"
            placeholder="Id"
            name="Id"
            onChange={handelid} required />
          <br></br>
          <br></br>
          <label > اسم الموظف </label>
          <dr />
          <input
            type="text"
            placeholder="name"
            name="name"
            onChange={handelname}  required/>
          <br></br>
          <br></br>
          <label >   ايميل الموظف </label>
          <dr />
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={handelemail}  required/>
          <br></br>
          <br></br>
          <label > رقم الموظف </label>
          <dr />
          <input
            type="text"
            placeholder=""
            name="Id"
            onChange={handelmobile} required />
          <br></br>
          <br></br>
          <label > كلمة المرور 
 </label> <br></br>
          <dr />
          <input
            type="text"
            placeholder="Id"
            name="password"
            onChange={handelpassword} required
           />

          <br></br>
         <br></br> 

            <label >  ارفاق صورة   </label>
            <input type="file" onChange={onFileChange} />
            <br></br>
          <br></br>
          <button  class="button10" onClick={handleClick} > تسجيل الموظفين </button>
 
        </div>
     
      </form>
      
      </div>
  )}

