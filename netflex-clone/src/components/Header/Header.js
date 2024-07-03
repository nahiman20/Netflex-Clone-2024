import React from 'react'
import "./Header.css"
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Neflexlogo from "../../assets/images/Netflix_Logo_PMS.png"

const Header = () => {
    return (
      <div className="header_outer_container">
        <div className="header_container">
          <div className="header_left">
            <img src={Neflexlogo} width={100} height={50} />
          </div>
          <div className="HeaderCenter">
            <ul>
              <li>Home</li>
              <li>TVShows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>MyList</li>
              <li>Browse by Languges</li>
            </ul>
          </div>
        </div>

        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Header
