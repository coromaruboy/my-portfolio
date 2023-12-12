import React from "react"
import Navbar from "./navbar";

const Footer = () => {
    return (
        <footer className='mt-10'>
            {Navbar('foot')}
            <div className="text-center mt-10">{new Date().getFullYear()} coromaruboy's portfolio</div>
        </footer>
    )
}

export default Footer;