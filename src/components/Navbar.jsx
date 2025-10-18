import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

function Navbar({mode, toggleMode}) {
    const bgColours = {
        light: "Light Mode",
        dark: "Dark Mode",
    };
    const navbarStyling = {
        backgroundColor: mode === "dark" ? "rgba(33, 37, 41, 0.2)" : "rgba(255, 255, 255, 0.1)"
    }
    
    const location = useLocation();
    useEffect(() => {
        document.title = 
        location.pathname === "/about" ?
        "TextUtitlity - About" : "TextUtitlity - Home" 
    }, [location]);

    return (
        <nav className="navbar navbar-expand-sm navbar-dark" style={navbarStyling}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">TextUtility</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About Us</Link>
                        </li>
                    </ul>

                    <div className="form-check form-switch" onClick={toggleMode} 
                    style={{color: "white"}}>
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{
                            border: (mode == "light") ? "1px solid rgba(255, 255, 255, 0.3)" : "1px solid rgba(255, 255, 255, 0.6)",
                            padding: "0 10px",
                            borderRadius: "7px"
                            }}>{(mode == "light") ? "Light Mode" : "Dark Mode"}</label>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Navbar