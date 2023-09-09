import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {API_URL} from "./apiConfig"

export default function Result() {
  const location = useLocation();
  const id = location.state.id;
  const [marks,setmarks] = useState();
  const [percentage, setPercentage] = useState();
  const [result, setResult] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const url=API_URL+"/results/"
    const resp = axios.get(url+id)
    .then((resp)=> setmarks(resp.data.marks))
    const p = (marks * 100) / 100;
    let r = null;
    if (p < 70) {
      r = 'Fail';
    } else {
      r = 'Pass';
    }
    setPercentage(p);
    setResult(r);
  });


  const handleDashboard = () => {
    navigate('/dashboard/'+id,{state:{id:id},replace: true});
  };

  const handleLogout = () => {
    navigate('/login', { replace: true });
  };

  return (
    <>
      <div className="NavBar">
        <div className="Logo">
          <img src={require('../static/img/logo1.png')} alt="" id="logo" />
        </div>
        <div className="NavItems">
          <button className="NavBtn" onClick={handleDashboard}>
            Dashboard
          </button>
          <button className="NavBtn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      <div className="FormBody">
        <p className="Heading">
          <u>Marks: {marks}%</u>
          <br />
          <u>Percentage: {percentage}%</u>
          <br />
          <u>Final Result: {result}</u>
        </p>
      </div>
      <div className="Footer">
        <div className="FooterR1">
          <img src={require('../static/img/logo1.png')} alt="" id="footerlogo" />
          <div className="FooterDiv">
            <h2 className="HeadingFooter">Giant Maverick Inc.</h2>
            <div className="FooterDivRow">
              <p className="head">USA Office:</p>
              <p className="body">#5723, 539 W. Commerce St Dallas, TX 75208.</p>
            </div>
            <div className="FooterDivRow">
              <p className="head">UK Office:</p>
              <p className="body">#3320, 34 Woodfield Road, Altrincham, Greater Manchester</p>
            </div>
            <div className="FooterDivRow">
              <p className="head">India Offices:</p>
              <p className="body">Delhi NCR & Mumbai</p>
            </div>
          </div>
          <div className="FooterDiv">
            <h2 className="HeadingFooter">Contact Us</h2>
            <div className="FooterDivRow1">
              <p className="head1">
                <i className="fa fa-phone fa-2" />
              </p>
              <p className="body1">+91-9910908100 (Whatsapp Number)</p>
            </div>
            <div className="FooterDivRow1">
              <p className="head1">
                <i className="fa fa-envelope fa-2x" />
              </p>
              <p className="body1">info@giantmaverick.com</p>
            </div>
          </div>
        </div>
        <div className="FooterR2">
          <p className="FooterText">All rights reserved @Giant Maverick Inc.</p>
          <p className="FooterText">Designed and developed by @Techmates India</p>
        </div>
      </div>
    </>
  );
}
