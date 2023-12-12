import React from "react"
import { Link } from "gatsby"
import Navbar from "./navbar"
import LOGO_IMG from "../../static/images/icon.png"

const Header = () => {

    return (
        <header className="text-gray-600 body-font">
            <div className="container mt-10 grid grid-cols-12">
                <div className="flex flex-row items-center col-span-6">
                    <Link to="/">
                        <img src={LOGO_IMG} alt="logo" width={60} height={60}/>
                    </Link>
                    <p classname='title-font font-medium'>coromaruboy's portfolio</p>
                </div>
                {/* link */}
                {Navbar('head')}
            </div>
        </header>
    )
}

export default Header;
