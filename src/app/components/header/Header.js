"use client";

import React, { useState } from "react";
import "./Header.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

function Header() {
    const [click, setClick] = useState(false);
    return (
        <div className="nav-container">
            <div className="navbar">
                <div className="main-logo">
                    <div className="image-div">
                        <img
                            className="img"
                            src="https://www.xzect.com/assets/images/xzect-logo.svg"
                        />
                    </div>
                    <div className="name">
                        <h2 className="website-name">Xzect</h2>
                    </div>
                </div>
               
            </div>
           
        </div>
    );
}

export default Header;
