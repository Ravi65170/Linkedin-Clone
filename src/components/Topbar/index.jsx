import React from "react";
import "./index.scss";
import linkedinLogo from "../../assets/linkedinLogo.png";
import {
  AiOutlineHome,
  AiOutlineUserSwitch,
  AiOutlineSearch,
  AiOutlineMessage,
  AiOutlineBell,
} from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import usere from "../../assets/usere.png";

export default function Topbar() {
  let navigate = useNavigate();
  const gotToRoute = (route) => {
    navigate(route);
  };
  return (
    <div className="topbar-main">
      <img className="linkedin-logo" src={linkedinLogo} />
      <div className="react-icons">
        <AiOutlineSearch size={30} className="react-icon" />

        <AiOutlineHome
          size={30}
          className="react-icon"
          onClick={() => gotToRoute("/home")}
        />
        <AiOutlineUserSwitch
          size={30}
          className="react-icon"
          onClick={() => gotToRoute("/profile")}
        />
        <BsBriefcase size={30} className="react-icon" />
        <AiOutlineMessage size={30} className="react-icon" />
        <AiOutlineBell size={30} className="react-icon" />
      </div>
      <img className="user-logo" src={usere} />
    </div>
  );
}
