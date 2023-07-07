import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function ExamInstructions() {
  const location = useLocation();
  const id = location.state.id;
  console.log(id);
  const navigate = useNavigate();
  const handlestartexam = () => {
    navigate("/exam",{state:{id:id}}, { replace: true });
  };
  const handleLogout = () => {
    navigate("/login", { replace: false });
  };
  return (
    <>
      <div className="NavBar">
        <div className="Logo">
          <img src={require("../static/img/logo1.png")} alt="" id="logo" />
        </div>
        <div className="NavItems">
          <button className="NavBtn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      <div className="FormBody">
        <div className="Form2">
          <div className="ExamInstructions">
            <div className="InstructionsContainer">
              <h2 className="InstructionsTitle">Exam Instructions</h2>
              <p className="InstructionsText">Read carefully</p>
              <ol className="InstructionsList">
                <li>Read each question carefully and select the most appropriate answer.</li>
                <li>You can navigate between questions using the "Prev" and "Next" buttons.</li>
                <li> Once you have selected an answer for a question, it will be automatically saved.</li>
                <li> You can also submit your answers before the exam time is up.</li>
                <li>The exam has a total duration of 75 minutes.</li>
                <li>You can see the remaining time displayed at the top of question navigation window.</li>
                <li> When the time runs out, you will be automatically redirected to the login page.</li>
                <li>Ensure that you have completed all the questions before the time expires.</li>
                <li> Make sure to review your answers before submitting the exam.</li>
                <li>To submit the exam, click the "Submit" button for the respective question.</li>
                <li> After submitting, you can no longer make changes to your answers.</li>
              </ol>
              <p className="InstructionsFooter">Good luck! Start the exam by clicking the "Next" button for the first question.</p>
            </div>
          </div>
          <button className="tableButton" onClick={handlestartexam}>Start Exam</button>
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
