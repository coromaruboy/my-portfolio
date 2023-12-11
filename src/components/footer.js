import React from "react"
import Navbar from "./navbar";

const Footer = () => {
    return (
        <footer className='mt-10'>
            <Navbar />
            {new Date().getFullYear()} coromaruboy's portfolio
        </footer>
    )
}

export default Footer;