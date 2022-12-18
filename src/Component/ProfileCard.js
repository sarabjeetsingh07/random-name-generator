import React from "react";
import classes from "./Profile.module.css";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";

function ProfileCard({ details }) {
  const [style, setStyle] = useState({ display: "none" });
  const [style1, setStyle1] = useState({ display: "none" });

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className={classes.main}>
      <div className={classes.profileDiv}>
      <img
        className={classes.profileImage}
        src={details.picture?.large}
      />
      </div>

      <div
        onMouseEnter={(e) => {
          setStyle({ display: "block" });
        }}
        onMouseLeave={(e) => {
          setStyle({ display: "none" });
        }}
      >
        Name
        <div style={style}>
          {details.name?.first} {details.name?.last}
        </div>
      </div>

      {/* <h2>
        {details.name?.first} {details.name?.last}{" "}
      </h2> */}

      <div
        onMouseEnter={(e) => {
          setStyle1({ display: "block" });
        }}
        onMouseLeave={(e) => {
          setStyle1({ display: "none" });
        }}
      >
        Email 
        <div style={style1}>{details.email}</div>
      </div>

      {/* <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        Email
      </div>
      {isHovering && details.email} */}

      <h3>
        Lets go for a <FaLocationArrow />{" "}
      </h3>
      <h2>{details.cell}</h2>
      <h2>{details.gender}</h2>
      <h2>
        {details.location?.city} {details.location?.state}{" "}
        {details.location?.country} {details.location?.postcode}
      </h2>
    </div>
  );
}

export default ProfileCard;
