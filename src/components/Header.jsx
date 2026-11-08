import { NavLink, useLocation } from 'react-router-dom';
import "../styles/Header.css";
import { FaXmark } from 'react-icons/fa6';
import { TiThMenu } from 'react-icons/ti';
import { useEffect, useState } from 'react';
import { SlMenu } from 'react-icons/sl';
import { VscCloseCompact } from 'react-icons/vsc';
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const handleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    useEffect(() => {
        setMenuOpen(false);
    }, [location]);
    return (
        <header className="container d-flex justify-content-between align-items-center">
            <div className="px-3 py-1 rounded-5">
                <a href="/" className="text-name text-decoration-none text-black fw-medium">
                    Rey Chantha &lt;/&gt;
                </a>
            </div>
            <nav className="main-nav m-0" aria-label="Main navigation">
                <ul className={`nav-bar d-flex align-items-center list-unstyled px-1 py-1 m-0 shadow-header-item ${menuOpen ? "open" : ""}`}>
                    <li className="nav-item">
                        <NavLink className="nav-link fw-medium px-4 rounded-5 text-decoration-none" to="/" end>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link fw-medium px-4 rounded-5 text-decoration-none" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link fw-medium px-4 rounded-5 text-decoration-none" to="/skills">Skills</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link fw-medium px-4 rounded-5 text-decoration-none" to="/projects">Projects</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link fw-medium px-4 rounded-5 text-decoration-none" to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="header-cta d-flex justify-content-between align-items-center gap-3">
                <button className="btn shadow-header-item fw-medium rounded-5 px-3 py-1 border-0">Download CV</button>
                <button className="btn text-white shadow-header-item rounded-5 btnMenu d-flex justify-content-center align-items-center d-lg-none" onClick={handleMenu}>
                    {menuOpen ? (
                        <VscCloseCompact className="iconMenu text-black" />
                    ) : (
                        <SlMenu className="iconMenu text-black" />
                    )}
                </button>
            </div>
        </header>
    )
}
export default Header;