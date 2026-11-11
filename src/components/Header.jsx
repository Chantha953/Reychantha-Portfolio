import { NavLink, useLocation } from 'react-router-dom';
import "../styles/Header.css";
import { FaXmark } from 'react-icons/fa6';
import { TiThMenu } from 'react-icons/ti';
import { useEffect, useState } from 'react';
import { SlMenu } from 'react-icons/sl';
import { VscCloseCompact } from 'react-icons/vsc';
import { HiDownload } from 'react-icons/hi';
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const handleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    useEffect(() => {
        setMenuOpen(false);
    }, [location]);
    useEffect(()=>{
        document.body.style.overflowY = menuOpen?"hidden":"auto";
        return ()=>{
            document.body.style.overflowY = "auto";
        }
    })
    return (
        <header className="container d-flex justify-content-between align-items-center">
            <div className="rounded-5">
                <a href="/" className="liquid-glass-bg txtLogo rounded-5 text-name text-decoration-none text-black fw-medium" style={{padding :"5.5px 16px"}}>
                    Rey Chantha &lt;/&gt;
                </a>
            </div>
            <nav className="main-nav m-0" aria-label="Main navigation">
                <ul className={`nav-bar d-flex align-items-center list-unstyled bg-transparent px-1 py-1 m-0 border rounded-5 ${menuOpen ? "open" : ""}`}>
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
                <button className="liquid-glass-bg btn btnCv border fw-medium rounded-5 d-flex justify-content-center align-items-center" style={{padding :"5.5px 16px"}}><HiDownload className="me-1" size={18} />
                    Download CV</button>
                <button
                    className="liquid-glass-bg btn border text-white rounded-5 btnMenu d-flex justify-content-center align-items-center d-lg-none"
                    onClick={handleMenu}
                >
                    {menuOpen ? (
                        <VscCloseCompact className="iconMenu text-black" size={16} />
                    ) : (
                        <SlMenu className="iconMenu text-black" size={16} />
                    )}
                </button>
            </div>
        </header>
    )
}
export default Header;