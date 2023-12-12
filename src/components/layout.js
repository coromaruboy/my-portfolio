import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"


const Layout = ({ children }) => {
    return (
        <div className="container mx-auto  text-zinc-900 bg-amber-50 font-body">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;