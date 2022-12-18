import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import ProfileCard from "./Component/ProfileCard";
import axios from "axios";
//import classes from "./Component/Profile.module.css";
import './App.css';

function App() {
  const [details, setDetails] = useState({});
  const fetchUsers = async () => {
    const { data } = await axios.get("https://randomuser.me/api/");
    const details = data.results[0];
    setDetails(details);
    //console.log(details);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const [isClicked, setIsClicked] = useState(false);

  function myFunction() {
    let element = document.body;
    element.classList.toggle("dark");
    setIsClicked((isClicked) => !isClicked);
  }

  return (
    <>
      <nav>
        <div className='modeDiv'>
          <button className="dark-mode-btn" onClick={myFunction}>
            {isClicked ? "☾" : "☼"}
          </button>
        </div>
      </nav>
      <div className='container'>
        <ProfileCard details={details} />
        <Button className='mainBtn' onClick={fetchUsers}>
          Get Random Users
        </Button>
      </div>
    </>
  );
}

export default App;
