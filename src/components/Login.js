import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {API_URL} from "./apiConfig"

export default function Login() {
  const navigate = useNavigate();
  const [Username, setUsername] = useState();
  const [password, setpassword] = useState();
  const handleRegister = () => {
    navigate("/register", { replace: true });
  };
  const handleAdmin = () => {
    navigate("/register", { replace: true });
  };
  const handleusernamechange = (e) => {
    setUsername(e.target.value);
  };
  const handlepasswordchange = (e) => {
    setpassword(e.target.value);
  };
  async function handleLogin(){
    let data = {};
    data["email"] = Username;
    data["password"] = password;
    const object = JSON.stringify(data);
    console.log(object);
    const url=API_URL+"/login"
    const res= await axios.post(url, data);
    if (res.data.message==="Login Successful"){
        navigate("/dashboard/"+res.data.userId,{state:{id:res.data.userId}}, { replace: false });
    }
    else{
        alert(res.data.message)
        navigate("/login", { replace: true });
    }
    
  };
  return (
    <>
      <div className="NavBar">
        <div className="Logo">
          <img src={require("../static/img/logo1.png")} alt="" id="logo" />
        </div>
        <div className="NavItems">
          <button className="NavBtn" onClick={handleRegister}>
            Register
          </button>
          <button className="NavBtn" onClick={handleAdmin}>
            Admin
          </button>
        </div>
      </div>
      <div className="FormBody">
        <div className="Form">
          <h2 className="Heading">LOGIN</h2>
          <input
            className="Input"
            type="text"
            placeholder="Username"
            value={Username}
            onChange={handleusernamechange}
          ></input>
          <input
            className="Input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlepasswordchange}
          ></input>
          <button className="SubmitBtn" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
      <div className="Footer">
        <div className="FooterR1">
          <img
            src={require("../static/img/logo1.png")}
            alt=""
            id="footerlogo"
          />
          <div className="FooterDiv">
            <h2 className="HeadingFooter">Giant Maverick Inc.</h2>
            <div className="FooterDivRow">
              <p className="head"> USA Office :</p>
              <p className="body">
                {" "}
                #5723, 539 W. Commerce St Dallas, TX 75208.
              </p>
            </div>
            <div className="FooterDivRow">
              <p className="head"> UK Office :</p>
              <p className="body">
                {" "}
                #3320, 34 Woodfield Road, Altrincham, Greater Manchester
              </p>
            </div>
            <div className="FooterDivRow">
              <p className="head"> India Offices :</p>
              <p className="body">Delhi NCR & Mumbai</p>
            </div>
          </div>
          <div className="FooterDiv">
            <h2 className="HeadingFooter">Contact Us</h2>
            <div className="FooterDivRow1">
              <p className="head1">
                <i className="fa fa-phone fa-2x"></i>
              </p>
              <p className="body1">+91-9910908100 (Whatsapp Number)</p>
            </div>
            <div className="FooterDivRow1">
              <p className="head1">
                <i className="fa fa-envelope fa-2x"></i>
              </p>
              <p className="body1">info@giantmaverick.com</p>
            </div>
          </div>
        </div>
        <div className="FooterR2">
          <p className="FooterText">All rights reserved @Giant Maverick Inc.</p>
          <p className="FooterText">
            Designed and developed by @Techmates India
          </p>
        </div>
      </div>
    </>
  );
}
