import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

const Layout = ({ children }) => {
    return (
        <div className="p-5 text-zinc-900">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;