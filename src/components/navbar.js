import React from "react"
import { Link } from "gatsby"

const Navbar = (headOrFoot) => {

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
            <>
                <li key={page_link} className="col-span-1 text-center">
                    <Link to={page_link} style={LinkStyles}
                        activeStyle={ActiveStyles}
                        className="h-10 flex items-center justify-center hover:text-gray-400">
                        {item}
                    </Link>
                </li>
            </>
        )
    })
    if(headOrFoot === 'head') {
        return (
            <nav className="col-span-6">
                <ul className="col-span-6 grid grid-cols-3 mt-10">
                    {NavItemLiTag}
                </ul>
            </nav>
        )
    }

    if(headOrFoot === 'foot') {
        return (
            <nav>
                <ul className="grid grid-cols-6 mt-10">
                    {NavItemLiTag}
                    <div className="col-span-3"></div>
                </ul>
            </nav>
        )
    }
}

export default Navbar;
