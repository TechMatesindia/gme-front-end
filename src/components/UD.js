import React from 'react'
import { useNavigate } from "react-router-dom";

export default function UD() {
    const navigate = useNavigate();
    const handleRegister = () => {
        navigate("/register", { replace: false });
      };
      const handleAdmin = () => {
        navigate("/register", { replace: false });
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
    <div className='FormBody'>
    <h2 className="Heading"><u>This page is under development.</u></h2>
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
  )
}
