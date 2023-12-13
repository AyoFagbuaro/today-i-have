import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

import "./Header.css";
import HeaderOption from "./HeaderOption";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="data:image/png;base64,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"
          alt=""
        />
      </div>

      <div className="header__search">
        <SearchIcon />
        <input placeholder="Search" type="text" />
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar={true} title="Sign-Out" onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;
