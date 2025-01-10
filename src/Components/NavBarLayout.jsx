import React from "react";

function NavBarLayout(Children) {
  return function () {
    return (
      <>
        <div className="">
          <div className="">
            <Children />
          </div>
        </div>
      </>
    );
  };
}

export default NavBarLayout;
