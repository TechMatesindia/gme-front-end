import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Timer from "./Timer";
import {API_URL} from "./apiConfig"


export default function ExamPage(props) {
  const location = useLocation();
  const id = location.state.id;
  console.log(id);
  const navigate = useNavigate();
  const [qn, setqn] = useState(0);
  const [A, setA] = useState(false);
  const [B, setB] = useState(false);
  const [C, setC] = useState(false);
  const [D, setD] = useState(false);
  const [selected, setselected] = useState();
  const [questions, setQuestions] = useState();
  const [Answers, setAnswers] = useState([]);
  const [Flags, setFlags] = useState([]);
  const [prev, setprev] = useState(true);
  const [next, setnext] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const url =API_URL+"/questions"
        const response = await axios.get(url);
        setQuestions(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };
    fetchQuestions();
  }, []);
  useEffect(() => {
    const MyInterval=setInterval(()=>{
      Answers.map((dt) => {
        console.log(dt)
        var element = document.getElementById("qbox" + dt.qn)
        if(dt.flag === false && dt.selected === null) {
          element.style.backgroundColor = "gray"
        } 
        if (dt.flag === true&&dt.selected === null){
          element.style.backgroundColor = "Red"
        } 
        if (dt.flag === true&&dt.selected !== null){
          element.style.backgroundColor = "Red"
          element.textContent = dt.qn + 1 + "-" + dt.selected
        } 
        if(dt.selected!==null && dt.flag===false){
          element.style.backgroundColor = "green"
          element.textContent = dt.qn + 1 + "-" + dt.selected
        }
      })
    },1000)
    return ()=>{
      clearInterval(MyInterval)
    }
  })

  const questionVisible = (q) => {
    const element = document.getElementById(q);
    if (element) {
      element.style.display = "flex";
    }
  };

  const handleclicknext = (k) => {
    document.getElementById(k).style.display = "none";
    // const answer = { qn, selected };
    // setAnswers((prevAnswers) => [...prevAnswers, answer]);
    if (k === questions.length - 1) {
      setnext(true);
    }
    else {
      setprev(false);
      setqn(k + 1);
    }
  }

  const handleclickflag = (k) =>{
    var i = false;
    Answers.map((fg) =>{
      console.log(fg);
      if (fg.qn === qn){
        fg.flag=!fg.flag;
        i=true
      }
    })
    if (i ===false){
      const flag = { qn: qn, selected:null, flag: true };
      setAnswers((prevflags) => [...prevflags, flag]);
    }
  }


  const handleclickprev = (k) => {
    document.getElementById(k).style.display = "none";
    if (k === 0) {
      setprev(true);
    }
    else {
      setnext(false);
      setqn(k - 1);
    }
  };

  const calculateScore = () =>{
    let marks = 0;

    for (let i = 0; i < questions.length; i++) {
      Answers.forEach((a) => {
        if (a.qn === i && a.selected === questions[i].Answer) {
          marks += 2;
        }
      });
    }
    return marks;
  }

  const handleclicksubmit = async() => {
    const marks = await calculateScore();
    console.log(marks);
    const data = {marks:marks}
    console.log(data);
    const url =API_URL+"/results/"
    axios.post(url+id,data)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
    

    navigate("/Result", { state: { id:id } });
  };

  const handleclickqbox = (k) => {
    document.getElementById(qn).style.display = "none";
    setqn(k)
    if (k === questions.length - 1) {
      setnext(true);
    } else {
      setprev(false);
    }
    if (k === 0) {
      setprev(true);
    } else {
      setnext(false);
    }

  }

  const handleLogout = () => {
    navigate("/login", { replace: true });
  }

  const handleoptionchange = (e) => {
    const val = e.target.value;
    // const answerIndex = qn - 1;

    // setAnswers((prevAnswers) => {
    //   const updatedAnswers = [...prevAnswers];
    //   updatedAnswers[answerIndex] = { qn, selected: val };
    //   return updatedAnswers;
    // });
    if (val === "A") {
      setA(true);
      setB(false);
      setC(false);
      setD(false);
    } else if (val === "B") {
      setA(false);
      setB(true);
      setC(false);
      setD(false);
    } else if (val === "C") {
      setA(false);
      setB(false);
      setC(true);
      setD(false);
    } else if (val === "D") {
      setA(false);
      setB(false);
      setC(false);
      setD(true);
    }
    setselected(val);
    const answer = { qn: qn, selected: val ,flag: false};
    var avl = false
    Answers.map((dt) => {
      if (dt.qn === qn) {
        dt.selected = val
        avl = true
      }
    })
    if (avl === false) {
      setAnswers((prevAnswers) => [...prevAnswers, answer]);
    }
  };

  if (!questions) return null;
  questionVisible(qn);


  // calculateScore();
  console.log(Answers);

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
          <h2 className="Heading">Exam</h2>
          {questions.map((dt, k) => {
            return (
              <div id={k} className="QuestionCard">
                <div className="QuestionDiv">
                  <h2 className="ques">
                    Question {k + 1}: {dt.Questions}
                  </h2>
                </div>
                <div className="RadioGroup" onChange={handleoptionchange}>
                  <div className="RadioBtn">
                    <input
                      name="choice1"
                      className="inputcheck"
                      type="radio"
                      value={"A"}
                     
                    ></input>
                    <label className="checklabel" htmlFor="choice1">
                      A: {dt.A}
                    </label>
                  </div>
                  <div className="RadioBtn">
                    <input
                      name="choice2"
                      className="inputcheck"
                      type="radio"
                      value={"B"}
                      
                    ></input>
                    <label className="checklabel" htmlFor="choice2">
                      B: {dt.B}
                    </label>
                  </div>
                  <div className="RadioBtn">
                    <input
                      name="choice3"
                      className="inputcheck"
                      type="radio"
                      value={"C"}
                     
                    ></input>
                    <label className="checklabel" htmlFor="choice3">
                      C: {dt.C}
                    </label>
                  </div>
                  <div className="RadioBtn">
                    <input
                      name="choice4"
                      className="inputcheck"
                      type="radio"
                      value={"D"}
                      
                    ></input>
                    <label className="checklabel" htmlFor="choice4">
                      D: {dt.D}
                    </label>
                  </div>
                </div>
                <div className="ButtonDiv">
                  <button
                    id="prev"
                    disabled={prev}
                    className="btn2"
                    key={"P" + k}
                    onClick={() => handleclickprev(k)}
                  >
                    Prev
                  </button>
                  <button
                    id="flag"
                    className="btn2"
                    key={"F" + k}
                    onClick={() => handleclickflag(k)}
                  >
                    Mark for Review
                  </button>
                  <button
                    id="next"
                    disabled={next}
                    className="btn2"
                    key={"N" + k}
                    onClick={() => handleclicknext(k)}
                  >
                    Next
                  </button>
                </div>
                <div className="ButtonDiv">
                  <button
                    id="subm"
                    className="btn3"
                    key={k}
                    onClick={() => handleclicksubmit(k)}
                  >
                    End Exam
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="Form3">
          <Timer />
          <div className="qboxdiv">
            {questions.map((dt, k) => {
              return (
                <button id={"qbox" + k} key={"qbox" + k} onClick={() => handleclickqbox(k)} className="qbox">{k + 1}</button>
              )
            })}
          </div>
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
          <p className="FooterText">Designed and developed by @Techmates India</p>
        </div>
      </div>
    </>
  );
}
