import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {API_URL} from "./apiConfig"

export default function Register() {
    const navigate = useNavigate();
  const [Username, setUsername] = useState();
  const [password, setpassword] = useState();
  const [Name, setName] = useState();
  const [Email, setEmail] = useState();
  const [Contact, setContact] = useState();
  const [DOB, setDOB] = useState();
  const handleLogin = () => {
    navigate("/login", { replace: false })
  };
  const handleAdmin = () => {
    navigate("/login", { replace: false })
  };
  const handleusernamechange = (e) => {
    setUsername(e.target.value);
  };
  const handlepasswordchange = (e) => {
    setpassword(e.target.value);
  };
  const handlenamechange = (e) => {
    setName(e.target.value);
  };
  const handleemailchange = (e) => {
    setEmail(e.target.value);
  };
  const handlecontactchange = (e) => {
    setContact(e.target.value);
  };
  const handledobchange = (e) => {
    setDOB(e.target.value);
  };
  async function handleRegister (){
    let data = {};
    data["name"]=Name;
    data["username"] = Username;
    data["email"]=Email;
    data["password"] = password;
    data["DOB"]=DOB;
    data["Contact_No"]=Contact;
    const url=API_URL+"/register"
    const res=await axios.post(url, data)
    if(res.data.message==="Registration successful"){
        navigate("/login", { replace: false })
    }else{
        alert(res.data.message)
    }
  };
  return (
    <>
      <div className="NavBar">
        <div className="Logo">
          <img src={require("../static/img/logo1.png")} alt="" id="logo" />
        </div>
        <div className="NavItems">
          <button className="NavBtn" onClick={handleLogin}>
            Login
          </button>
          <button className="NavBtn" onClick={handleAdmin}>
            Admin
          </button>
        </div>
      </div>
      <div className="FormBody">
        <div className="Form2">
          <h2 className="Heading">REGISTER</h2>
          <div className="FormRow">
            <input
              className="Input2"
              type="text"
              placeholder="Choose Username"
              value={Username}
              onChange={handleusernamechange}
            ></input>
            <input
              className="Input2"
              type="password"
              placeholder="Choose Password"
              value={password}
              onChange={handlepasswordchange}
            ></input>
          </div>
          <div className="FormRow">
            <input
              className="Input2"
              type="text"
              placeholder="Name"
              value={Name}
              onChange={handlenamechange}
            ></input>
            <input
              className="Input2"
              type="email"
              placeholder="Email"
              value={Email}
              onChange={handleemailchange}
            ></input>
          </div>
          <div className="FormRow">
            <input
              className="Input2"
              type="text"
              placeholder="Contact No."
              value={Contact}
              onChange={handlecontactchange}
            ></input>
            <input
              className="Input2"
              type="text"
              placeholder="Date Of Birth"
              value={DOB}
              onChange={handledobchange}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
            ></input>
          </div>
          <button className="SubmitBtn" onClick={handleRegister}>
            Register
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
              <p className="body"> #5723, 539 W. Commerce St Dallas, TX 75208.</p>
            </div>
            <div className="FooterDivRow">
              <p className="head"> UK Office :</p>
              <p className="body"> #3320, 34 Woodfield Road, Altrincham, Greater Manchester</p>
            </div>
            <div className="FooterDivRow">
              <p className="head"> India Offices :</p>
              <p className="body">Delhi NCR & Mumbai</p>
            </div>
          </div>
          <div className="FooterDiv">
          <h2 className="HeadingFooter">Contact Us</h2>
            <div className="FooterDivRow1">
              <p className="head1"><i className="fa fa-phone fa-2x"></i></p>
              <p className="body1">+91-9910908100 (Whatsapp Number)</p>
            </div>
            <div className="FooterDivRow1">
              <p className="head1"><i className="fa fa-envelope fa-2x"></i></p>
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
