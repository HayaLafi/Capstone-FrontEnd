import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./index.css"
//import { getPatients } from "./data";
import Logo from "./router/img/Logo.png";
function App() {
  // let [User, setUser] = useState(false);
  // let employee = getEmployees();
  // let NewArray = [];
  //   localStorage.setItem("MyNewArray", JSON.stringify(NewArray))
  // localStorage.setItem("MyEmployee", JSON.stringify(employee))
  // console.log(JSON.parse(localStorage.getItem("Myemployee")))


  return (
    <div>
      <img src={Logo} alt="logo" className="logo" />
      <h1 id="HeaderName"> </h1>
      <nav id="navPage">
      <h1>  ادارة شؤون الموظفين  </h1>
      
       
    <Link to="/homepage">   <button class="button">     الصفحة الرئيسية    </button> </Link>  {"    "}
    <Link to="/login">   <button class="button">      تسجيل دخول         </button> </Link>  {"    "}
        <Link to="/Employee">  <button class="button">      الموظفين     </button> </Link>  {"      "}
        <Link to="/Employees"> <button class="button">       نموذج الموظفين    </button> </Link>  {"      "}
        <Link to="/Holidays">  <button class="button">      الاجازات  </button>        </Link>    {"    "}
        <Link to="/files">   <button class="button">    نموذج الاجازات   </button>      </Link> {"    "}
        <Link to="/permissions">  <button class="button">  الاستئذانات     </button>         </Link> {"    "}
        <Link to="/complains"> <button class="button">      شكاوى الموظفين   </button>          </Link>  {"    "}
      </nav>
      <Outlet />
    </div>
  );
}

export default App


