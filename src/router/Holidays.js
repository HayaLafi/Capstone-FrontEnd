import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function Holidays() {
  
  const[HolidayId ,setHolidayId]= useState("")
  const[date ,setdate]= useState("")
  const[startingdate ,setstartingdate]= useState("")
  const[endingdate ,setendingdate]= useState("")
  const[tittle,settittle]= useState("")
  const[description ,setdescription]= useState("")
  const [employees, setEmployees] = useState("")
  const [employee, setEmployee] = useState("")
  const [selectedFile, setSelectedFile] = useState("")

  const [myHoliday, setMyHoliday] = useState({HolidayId:"",date:"",tittle:"" ,description:""})
  let nuwHoliday = {
      holidayId:HolidayId ,
    date :date ,
    ending_date:endingdate,
    starting_date:startingdate,
title:tittle,
description :description,
employee : employee,
  }
  function handelid(event){
    setHolidayId((event.target.value));
  }

  function handeldate(event){
    setdate((event.target.value));
}

function handelstartingdate(event){
  setstartingdate((event.target.value));
}
function handelendingdate(event){
  setendingdate((event.target.value));
}
function handleSelectType(event){
  settittle(event.target.value);
}
function handeldescription(event){
  setdescription((event.target.value));
}
function onFileChange(event) {
  setSelectedFile(event.target.files[0]); 
}
useEffect(() => {
  axios.get("https://servicesemployeemanagement.herokuapp.com/api/employee")
      .then(response => {
          console.log(response.data)
          setEmployees(Array.from(response.data))
      })
  return () => { }
}, [])

useEffect(()=>{
 axios.get("https://servicesemployeemanagement.herokuapp.com/api/holiday")
  .then(response=>{
    console.log(response.data)
    setMyHoliday(response.data)
 })
 return()=>{}
},[])

function handleSelect(event){
  let obj = JSON.parse(event.target.value); 
  setEmployee(obj) 
  console.log(employee)
}

function handleClickk(event){
event.preventDefault();
const formData = new FormData();
          formData.append(
            "file",
            selectedFile
            );
     formData.append(
              "holidayStr",  JSON.stringify(nuwHoliday) 
          )
      event.preventDefault();
      
     axios({
       method:'post',
       url:'https://servicesemployeemanagement.herokuapp.com/api/holiday/New',
       data:formData
     });
    
}

function deleteHoliday(event , id) {
  event.preventDefault();

  axios.delete(`https://servicesemployeemanagement.herokuapp.com/api/holiday/delete/${id}`)
    
}
// function handle1(){
// axios({
//   method: 'delete',
//   url: "/api/employee/delete/11"
// })}

return (
<div class ="AA">
  
<form className='Patient' >
<div class="log">
<hr />
<h1>       الاجازات          </h1>
<br></br>
<label > رقم  الاجازة  </label>
<dr />
<input
type="text"
placeholder="Id"
name="Id"
onChange= {handelid}   required      />
<br></br>
<br></br>
<label >    نوع الاجازة  </label> 
 <dr /> 
 <select  onChange={handleSelectType}>
                <option value="">الرجاء تحديد خيار</option>
                <option value="وفاة">وفاة</option>
                <option value="زواج">زواج </option>
                <option value="مرضية">مرضية </option>
                <option value="سنوية">سنوية</option>
            </select>
<br></br>
<br></br>
       {/* // <input type="radio" onChange={handleCategory} name="مرضيه" />  مرضيه  <br />
       // <input type="radio" onChange={handleCategory} name="مرضيه" /> وفاه<br />
       // <input type="radio" onChange={handleCategory} name="زواج" /> زواج <br /> */}
       {/* // <input type="radio" onChange={handleCategory} name="سنويه" /> سنويه */}
        

       <label > عدد أيام الأجازة </label>
<dr />
<input
type="text"
placeholder="Date"
name="date"
onChange= {handeldate} required        />

<br></br>
<br></br>
<label > تاريخ بداية الاجازة </label>
<dr />
<input
type="text"
placeholder="Date"
name="sdate"
onChange= {handelstartingdate}   required      />

<br></br>
<br></br>
<label > تاريخ نهايتها </label>
<dr />
<input
type="text"
placeholder="Date"
name="edate"
onChange= {handelendingdate}   required     />
<br></br>
<br></br>

<label > اسباب الاجازة  </label>
<dr />

<br></br>
<br></br>
<textarea placeholder="description " onChange={handeldescription}  required>
</textarea>
<br></br>
<br></br>

<label > حدد الموظف</label>
            <br></br>
           <select  onChange={handleSelect}>
                <option value="">--Please choose an option--</option>
                {employees.length ? employees.map((empl, i) => {     
                          
                          // Return the element. Also pass key     
                          return ( <option value={JSON.stringify(empl)}>{empl.name}</option>) 
                       }): <h4>null</h4>}
                
               
                
            </select>
            <br></br>
            <label > : ارفاق صورة   </label>
            <input className="form-control" type="file" onChange={onFileChange} />
<br></br>
<button onClick={handleClickk} > Submit </button> 


{"                                                                                                                                                           "}

</div>
</form>


<br/>
<form className='Patient' >
<hr></hr>
<h1>      قائمة  الاجازات           </h1>
<table style={{border:"1px  solid black"}}>
<tr>
  <td  style={{border:"1px  solid black"}} >أسم الموظف </td>
  <td  style={{border:"1px  solid black"}} >نوع الأجازة </td>
  <td  style={{border:"1px  solid black"}} >مدة الأجازة </td>
  <td  style={{border:"1px  solid black"}} >  بداية الأجازة </td>
  <td  style={{border:"1px  solid black"}} >  نهاية الأجازة </td>
  <td  style={{border:"1px  solid black"}} >  حذف  الأجازة </td>
</tr>
{myHoliday.length ? myHoliday.map((holiday, i) => {     
                          
                          // Return the element. Also pass key     
                          return ( 
                          
                            <tr>
                            <td  style={{border:"1px  solid black"}} >{holiday.employee.name} </td>
                            <td  style={{border:"1px  solid black"}} >{holiday.title}</td>
                            <td  style={{border:"1px  solid black"}} >{holiday.date}</td>
                            <td  style={{border:"1px  solid black"}} >  {holiday.starting_date} </td>
                            <td  style={{border:"1px  solid black"}} >  {holiday.ending_date} </td>
                            <td  style={{border:"1px  solid black"}} >   <button onClick={(event) => deleteHoliday(event,holiday.holidayId)}>Delete</button></td>
                          </tr>
                          
                          ) 
                       }): <h4>null</h4>}

</table>
</form>

</div>





)
 
}
