import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

function Navbar({mode, toggleMode}) {
    const bgColours = {
        light: "Light Mode",
        dark: "Dark Mode",
        primary: "Blue Mode",
    };

    const location = useLocation();
    useEffect(() => {
        document.title = 
        location.pathname === "/about" ?
        "TextUtitlity - About" : "TextUtitlity - Home" 
    }, [location]);

    return (
        <nav className={`navbar navbar-expand-lg navbar-${(mode === "dark" || mode === "primary")?"dark":"light"} bg-${mode}`}>
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

                    {/* Dropdown */}
                    <div className="dropdown btn-grp ms-3" 
                    style={{border: (mode === "dark")? "1px solid grey" : "1px solid black", borderRadius: "8px"}}>
                        <button type="button" className={`btn btn-${mode}`} style={{width: "120px"}}>{bgColours[mode]}</button>
                        
                        <button type="button" className={`btn btn-${mode} dropdown-toggle dropdown-toggle-split`} data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="visually-hidden">Toggle Dropdown</span>
                        </button>

                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><button className="btn btn-light" onClick={() => toggleMode("light")} data-bs-dissmiss="dropdown">Light Mode</button></li>
                            <li><button className="btn btn-dark text-light" onClick={() => toggleMode("dark")} data-bs-dissmiss="dropdown">Dark Mode</button></li>
                            <li><button className="btn btn-primary text-light" onClick={() => toggleMode("primary")} data-bs-dissmiss="dropdown">Blue</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Navbar