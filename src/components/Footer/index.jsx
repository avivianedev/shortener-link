import "./Footer.scss"

import { BsPinterest, BsTwitter, BsInstagram } from "react-icons/bs"
import { ImFacebook2 } from "react-icons/im"


export default function Footer() {

    return (
        <footer className="footer-ccontainer">
            <div className="logo-footer">
                <h2>Shortly</h2>
            </div>
            <div className="list-container">
                <div className="list-links">
                    <span>Features</span>
                    <ul>
                        <li><a href="">Link Shortening</a></li>
                        <li><a href="">Branded Links</a></li>
                        <li><a href="">Analytics</a></li>
                    </ul>
                </div>
                <div className="list-links">
                    <span>Resources</span>
                    <ul>
                        <li><a href=""> Blog</a></li>
                        <li><a href="">Developers </a></li>
                        <li><a href=""> Support </a></li>
                    </ul>
                </div>
                <div className="list-links">
                    <span> Company </span>
                    <ul>
                        <li><a href="">About</a></li>
                        <li><a href="">Our Team</a></li>
                        <li><a href="">Careers Contact </a></li>
                    </ul>
                </div>
            </div>
            <div className="social">
                <ImFacebook2 fill="white" size={30} />
                <BsTwitter fill="white" size={30} />
                <BsPinterest fill="white" size={30} />
                <BsInstagram fill="white" size={30} />
            </div>
        </footer>
    )
}