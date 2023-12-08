import React, { useState } from "react"
import { Link } from "gatsby"
import LOGO_IMG from "../../static/images/icon.png"

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const handleMenuOpen = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <div className="App">
            <div className="container">
                <header className="flex justify-between">
                    <div className="flex flex-row items-center">
                        <Link to="/">
                            <img src={LOGO_IMG} alt="logo" width={60} height={60}/>
                        </Link>
                        <p>coromaruboy's portfolio</p>
                    </div>
                    {/* ハンバーガーメニュー */}
                    <div>
                        <button onClick={handleMenuOpen} type="button" className="z-20 space-y-2 fixed top-4 right-4 mt-5" aria-label="Toggle Menu">
                            <div
                                className={
                                    openMenu
                                    ? "w-8 h-0.5 bg-gray-600 translate-y-2.5 rotate-45 transition duration-500 ease-in-out"
                                    : "w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out"
                                }
                            />
                            <div
                                className={
                                    openMenu
                                        ? "opacity-0 transition duration-500 ease-in-out"
                                        : "w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out"
                                }
                            />
                            <div
                                className={
                                    openMenu
                                        ? "w-8 h-0.5 bg-gray-600 -rotate-45 transition duration-500 ease-in-out"
                                        : "w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out"
                                }
                            />
                        </button>

                        {/* link */}
                        <nav className={
                            openMenu
                                ? 'text-left fixed bg-slate-400 right-0 top-0 w-3/12 h-screen flex flex-col justify-start pt-8 ease-linear duration-300'
                                : 'fixed right-[-100%]'
                            }
                        >
                            <ul className="mt-10 ">
                                <Link to="/">
                                    <li className="border-t-2 border-b-2 text-center hover:bg-slate-300 h-10 flex items-center justify-center">
                                        Home
                                    </li>
                                </Link>
                                <Link to="/about">
                                    <li className="border-b-2 text-center hover:bg-slate-300 h-10 flex items-center justify-center">
                                        About
                                    </li>
                                </Link>
                                <Link to="/skills">
                                    <li className="border-b-2 hover:bg-slate-300 h-10 flex items-center justify-center">
                                        Skills
                                    </li>
                                </Link>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Header;
