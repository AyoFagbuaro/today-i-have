import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

import "./Header.css";
import HeaderOption from "./HeaderOption";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <LinkedInIcon />
        <img src="" alt="" />
      </div>

      <div className="header__search">
        <SearchIcon />
        <input type="text" />
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar="/public/Ayo-pic.jpeg" title="Moi" />
      </div>
    </div>
  );
}

export default Header;
