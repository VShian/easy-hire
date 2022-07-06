/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="h-20 bg-white shadow fixed top-0 right-0 left-0 w-full z-[9999]">
      <div className="flex justify-between h-full items-center max-w-[1440px] mx-auto px-8">
        <div className="flex gap-4 items-center">
          {" "}
          <div>
            <img src="/logo.png" alt="" width="30" height="30" />
          </div>
          <p class="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-left text-[#333]">
            Easy Hiring
          </p>
          {/* <div className="flex gap-4">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Products</a>
            <a href="#">Contact Us</a>
          </div> */}
        </div>
        <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-3">
          {/* <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 rounded-lg">
            <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-[18px] py-2.5 rounded-lg">
              <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#4f4f4f]">
                Sign up
              </p>
            </div>
          </div> */}
          <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 rounded-lg">
            <div
              class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-[18px] py-2.5 rounded-[68px] bg-[#333] border border-white"
              style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
            >
              <a href={process.env.REACT_APP_AUTH_WEB + "/login"}>
                <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">
                  Log in
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
