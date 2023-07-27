import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import axios from "axios";
import {API_URL} from "./apiConfig"
export default function Dashboard(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setdata] = useState();
  const [address, setaddress] = useState();
  const [salary, setsalary] = useState();
  const [designation, setdesignation] = useState();
  const [image, setImage] = useState(null);
  const [company, setcompany] = useState();
  const [experience, setexperience] = useState();
  const [qualifications, setqualifications] = useState();
  const [salgoal1, setsalgoal1] = useState();
  const [salgoal3, setsalgoal3] = useState();

  const id = location.state.id;

  const handleaddresschange = (e) => {
    setaddress(e.target.value);
  };
  const handlesalarychange = (e) => {
    setsalary(e.target.value);
  };
  const handlecompanychange = (e) => {
    setcompany(e.target.value);
  };
  const handledesignationchange = (e) => {
    setdesignation(e.target.value);
  };
  const handleexpchange = (e) => {
    setexperience(e.target.value);
  };
  const handlequalchange = (e) => {
    setqualifications(e.target.value);
  };
  const handlesalgoal1change = (e) => {
    setsalgoal1(e.target.value);
  };
  const handlesalgoal3change = (e) => {
    setsalgoal3(e.target.value);
  };
  const handleimagechange = (event) => {
    setImage(event.target.files[0]);
  }

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const url=API_URL+"/user/"
        const response = await axios.get(url + id);
        setdata(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserData();
  }, []);
  const handleclickattempt = () => {
    navigate("/instructions",{state:{id:id},replace: false});
  };
  const handleLogout = () => {
    navigate("/login", { replace: true });
  };
  const handleeditprofile = () => {
    document.getElementById("EditProfileForm").style.display = 'flex'
  }
  const handlemodalclose = () => {
    document.getElementById("EditProfileForm").style.display = 'none'
  }

  const updateprofile = () => {
    const formData = new FormData();
    formData.append('experience', experience);
    formData.append('address', address);
    formData.append('qualification', qualifications);
    formData.append('salary', salary);
    formData.append('designation', designation);
    formData.append('salgoal1', salgoal1);
    formData.append('salgoal3', salgoal3);
    formData.append('company', company);
    formData.append('image', image);
    const url=API_URL+"/updateprofile/"
    fetch(url + id, {
      method: 'PATCH',
      body: formData,
    })
    alert('update successful')
    window.location.reload()
  };

  const handletabchange1 = () => {
    document.getElementById("Profile").style.display = "flex";
    document.getElementById("Courses").style.display = "none";
    document.getElementById("Exam").style.display = "none";
    document.getElementById("Results").style.display = "none";
  };
  const handletabchange2 = () => {
    document.getElementById("Profile").style.display = "none";
    document.getElementById("Courses").style.display = "flex";
    document.getElementById("Exam").style.display = "none";
    document.getElementById("Results").style.display = "none";
  };
  const handletabchange3 = () => {
    document.getElementById("Profile").style.display = "none";
    document.getElementById("Courses").style.display = "none";
    document.getElementById("Exam").style.display = "flex";
    document.getElementById("Results").style.display = "none";
  };
  const handletabchange4 = () => {
    document.getElementById("Profile").style.display = "none";
    document.getElementById("Courses").style.display = "none";
    document.getElementById("Exam").style.display = "none";
    document.getElementById("Results").style.display = "flex";
  };
  if (!data) return null;
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
        <div className="TabsDiv">
          <div className="DashboardHeading">
            <h1 className="DashHead">Welcome {data.name}</h1>
          </div>
          <div className="Tabs">
            <button className="TabButtons" onClick={handletabchange1}>
              Profile
            </button>
            <button className="TabButtons" onClick={handletabchange2}>
              Courses
            </button>
            <button className="TabButtons" onClick={handletabchange3}>
              Exam
            </button>
            <button className="TabButtons" onClick={handletabchange4}>
              Results
            </button>
          </div>
          <div id="Profile">
            <div className="profileheader">
              <div className="profilehead">
                <div
                  style={{
                    display:"flex",
                    flexDirection:"row",
                    height:"40px",
                    width:"100%",
                    justifyContent:"start"
                  }}
                >
                  <div className="profiledata">Name </div><div className="profiledata">: {data.name}</div>
                </div>
                <div
                  style={{
                    display:"flex",
                    flexDirection:"row",
                    height:"40px",
                    width:"100%",
                    justifyContent:"start"
                  }}
                >
                  <div className="profiledata">Email</div> <div className="profiledata">: {data.email}</div>
                </div>
                <div
                  style={{
                    display:"flex",
                    flexDirection:"row",
                    height:"40px",
                    width:"100%",
                    justifyContent:"start"
                  }}
                >
                  <div className="profiledata">DOB</div> <div className="profiledata">: {data.DOB}</div>
                </div>
                <div
                  style={{
                    display:"flex",
                    flexDirection:"row",
                    height:"40px",
                    width:"100%",
                    justifyContent:"start"
                  }}
                >
                  <div className="profiledata">Contact no.</div> <div className="profiledata">: {data.Contact_No}</div>
                </div>
                <div
                  style={{
                    display:"flex",
                    flexDirection:"row",
                    height:"40px",
                    width:"100%",
                    justifyContent:"start"
                  }}
                >
                  <div className="profiledata">Experience</div> <div className="profiledata">: {data.Experience} years</div>
                </div>
                <div
                  style={{
                    display:"flex",
                    flexDirection:"row",
                    height:"40px",
                    width:"100%",
                    justifyContent:"start"
                  }}
                >
                  <div className="profiledata">Qualification</div> <div className="profiledata">: {data.Qualification}</div>
                </div>
                <div
                  style={{
                    display:"flex",
                    flexDirection:"row",
                    height:"40px",
                    width:"100%",
                    justifyContent:"start"
                  }}
                >
                  <div className="profiledata">Current salary</div><div className="profiledata">: {data.Current_salary}</div>
                </div>
                <div
                  style={{
                    display:"flex",
                    flexDirection:"row",
                    height:"40px",
                    width:"100%",
                    justifyContent:"start"
                  }}
                >
                  <div className="profiledata">Address</div> <div className="profiledata">: {data.address}</div>
                </div>
                <div
                  style={{
                    display:"flex",
                    flexDirection:"row",
                    height:"40px",
                    width:"100%",
                    justifyContent:"start"
                  }}
                >
                  <div className="profiledata">Current Organization</div> <div className="profiledata">: {data.current_org}</div>
                </div>
                <div
                  style={{
                    display:"flex",
                    flexDirection:"row",
                    height:"40px",
                    width:"100%",
                    justifyContent:"start"
                  }}
                >
                  <div className="profiledata">Salary goal for next 1 year</div> <div className="profiledata">: {data.salary_goal_1_year}</div>
                </div>
                <div
                  style={{
                    display:"flex",
                    flexDirection:"row",
                    height:"40px",
                    width:"100%",
                    justifyContent:"start"
                  }}
                >
                  <div className="profiledata">Salary goal for next 3 year</div> <div className="profiledata">: {data.salary_goal_3_year}</div>
                </div>
              </div>
              <div className="profileimg">
                <img
                  src={API_URL+'/image/' + id}
                  alt=""
                  id="profilepic"
                />
                <div className="modaldiv">
                  <button onClick={handleeditprofile} className="popupbtn">Edit profile</button>
                </div>
              </div>
            </div>
          </div>
          <div id="Courses">
            <h2
              style={{
                color: "rgb(230, 140, 15)",
                justifyContent: "start",
                display: "flex",
                paddingLeft: "20px",
              }}
            >
              Courses
            </h2>
          </div>
          <div id="Exam">
            <h2
              style={{
                color: "rgb(230, 140, 15)",
                justifyContent: "start",
                display: "flex",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              Exam
            </h2>
            <div className="TableDiv">
              <table className="table table-striped table-dark table-bordered  ">
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Exams</th>
                    <th>Remaining Attempts</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.exams?<tr>
                    <td>1</td>
                    <td>{data.exams}</td>
                    <td>{data.Remaining_attempt}</td>
                    <td className="tdBtn">
                      <button
                      disabled={parseInt(data.Remaining_attempt)===0}
                        className="tableButton"
                        onClick={handleclickattempt}
                      >
                        Attempt
                      </button>
                    </td>
                  </tr>:null}
                </tbody>
              </table>
            </div>
          </div>
          <div id="Results">
            <h2
              style={{
                color: "rgb(230, 140, 15)",
                justifyContent: "start",
                display: "flex",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              Results
            </h2>
            <div className="TableDiv">
              <table className="table table-striped table-dark table-bordered  ">
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Exams</th>
                    <th>Marks</th>
                  </tr>
                </thead>
                <tbody>
                  {data.marks?<tr>
                    <td>1</td>
                    <td>{data.exams}</td>
                    <td>{data.marks}/100</td>
                  </tr>:null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="Modal" id="EditProfileForm">
        <span onClick={handlemodalclose} classname="close">&times;</span>
        <div className="Form4">
          <h2 className="Heading">Edit Profile</h2>
          <div className="FormRow">
            <input
              className="Input2"
              type="text"
              placeholder="Address"
              value={address}
              onChange={handleaddresschange}
            ></input>
            <input
              className="Input2"
              type="number"
              placeholder="Current salary (CTC)"
              value={salary}
              onChange={handlesalarychange}
            ></input>
          </div>
          <div className="FormRow">
            <input
              className="Input2"
              type="text"
              placeholder="Current Organization"
              value={company}
              onChange={handlecompanychange}
            ></input>
            <input
              className="Input2"
              type="text"
              placeholder="Current Designation"
              value={designation}
              onChange={handledesignationchange}
            ></input>
          </div>
          <div className="FormRow">
            <input
              className="Input2"
              type="number"
              placeholder="Total Experience in years"
              value={experience}
              onChange={handleexpchange}
            ></input>
            <input
              className="Input2"
              type="text"
              placeholder="Highest Qualification"
              value={qualifications}
              onChange={handlequalchange}
            ></input>
          </div>
          <div className="FormRow">
            <input
              className="Input2"
              type="number"
              placeholder="Salary goal for next 1 year"
              value={salgoal1}
              onChange={handlesalgoal1change}
            ></input>
            <input
              className="Input2"
              type="number"
              placeholder="Salary goal for next 2-3 year"
              value={salgoal3}
              onChange={handlesalgoal3change}
            ></input>
          </div>
          <div className="FormRow2">
            <label classname="image" htmlFor="image">Profile Image:</label>
            <input classname="Input2" type="file" name="image" id="image" className="form-control" accept="image/jpeg, image/png" onChange={handleimagechange} />
          </div>
          <button onClick={updateprofile} className="SubmitBtn" >
            Update Profile
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
