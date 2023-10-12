import { useState } from "react"
import "./Style.scss"

import { FiMenu } from "react-icons/fi"

export default function Header() {

    const [showMenu, SetShowMenu] = useState(false)

    return (
        <header className="header-container">
            <div>
                <img src="/assets/images/logo.svg" alt="logo-image" />
            </div>
            <div className="menu-responsive" onClick={() => SetShowMenu(!showMenu)}>
                <FiMenu size={25} />
            </div>

            <div className={showMenu ? "menu-container-responsive" : "menu-container"}>
                <ul className="list-menu">
                    <li><a href="">Features</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Resources</a></li>
                </ul>
                <div className="auth">
                    <span>Login</span>
                    <button>Sign Up</button>
                </div>
            </div>

        </header>
    )
}


