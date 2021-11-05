import { useRef, useState } from 'react';

import logo from '../images/logo-bookmark.svg';
import hamburger from '../images/icon-hamburger.svg';
import './header.css';

function disableScroll() {
    window.scrollTo(0, 0);
}

export default function Header() {

    let nav = useRef();

    const [scroll, setScroll] = useState(true);

    let handleClick = () => {
        nav.current.classList.toggle('active-sm');

        if (scroll) {
            window.addEventListener('scroll', disableScroll);
            setScroll(false);
        } else {
            window.removeEventListener('scroll', disableScroll);
            setScroll(true);
        }

    }

    return (
        <header className="header">
            <div className="container">
                <div className="bar">
                    <div className="logo">
                        <img src={logo} alt="bookmark logo" />
                    </div>
                    <nav className="nav" ref={nav}>
                        <ul>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Contact</li>
                            <li className="login">Login</li>
                        </ul>
                    </nav>
                    <button className="hamburger" onClick={handleClick}>
                        <img src={hamburger} alt="hamburger" />
                    </button>
                </div>
            </div>
        </header>
    )

}