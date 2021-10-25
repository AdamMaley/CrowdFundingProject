import React, {Fragment, useState} from 'react';
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";

const Header= () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <Fragment>
            <header className="absolute flex items-center justify-between px-5 py-8 w-full">
                <div>
                    <img src={logo} alt=""/>
                </div>

                {isOpen && (
                    <nav className="absolute w-9/12 ml-16 mt-56">
                    <ul className="bg-white shadow-2xl rounded-2xl py-3">
                        <li className="py-3 border-b border-gray-200 px-5 cursor-pointer">About</li>
                        <li className="py-3 border-b border-gray-200 px-5 cursor-pointer">Discover</li>
                        <li className="py-3 px-5 cursor-pointer">Get Started</li>
                    </ul>
                </nav>
                )}

                <div>
                    <img src={hamburger} alt="" className="w-6 cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
                </div>
            </header>
        </Fragment>
    )
}

export default Header
