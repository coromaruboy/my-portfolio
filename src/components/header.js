import React from "react"
import { Link } from "gatsby"
import LOGO_IMG from "../../static/images/icon.png"

const Header = () => {

    // 普段のリンクはこのスタイル
    const LinkStyles = {
        fontWeight: "normal"
    }

    // アクティブになったリンクは色を反転させる
    const ActiveStyles = {
        fontWeight: "bold",
        borderBottom: "2px solid gray"
    }

    const NavMenuItem = ["Home", "About", "Skills"];

    const NavItemLiTag = NavMenuItem.map((item) => {
        let page_link = "";
        if(item === "Home") {
            page_link = "/";
        } else {
            page_link = "/" + item.toLowerCase() + "/";
        }

        return (
            <li key={page_link}>
                <Link to={page_link} style={LinkStyles}
                    activeStyle={ActiveStyles}
                    className="h-10 flex items-center justify-center hover:text-gray-400">
                    {item}
                </Link>
            </li>
        )
    })

    return (
        <div className="mt-10">
            <div className="">
                <header className="grid grid-cols-12 justify-between">
                    <div className="flex flex-row items-center col-span-6">
                        <Link to="/">
                            <img src={LOGO_IMG} alt="logo" width={60} height={60}/>
                        </Link>
                        <p>coromaruboy's portfolio</p>
                    </div>
                    {/* link */}
                    <nav className="col-span-6">
                        <ul className="grid grid-cols-4 mt-10">
                            {NavItemLiTag}
                        </ul>
                    </nav>
                </header>
            </div>
        </div>
    )
}

export default Header;
