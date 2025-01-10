import React from "react";
import NavBarLayout from "./NavBarLayout";
import { NavLink } from "react-router";

function Contect() {
  return (
    <div>
      <NavLink className='text-black' to={"profile"}>Profile</NavLink>
      <br />
      <NavLink className='text-black' to={"settings"}>Settings</NavLink>
    </div>
  );
}

export default NavBarLayout(Contect);
