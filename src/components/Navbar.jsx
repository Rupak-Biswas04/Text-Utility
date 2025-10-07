function Navbar({mode, toggleMode}) {
    const bgColours = {
        light: "Light Mode",
        dark: "Dark Mode",
        primary: "Blue Mode",
        success: "Green Mode",
        danger: "Red Mode"
    }
    return (
        <nav className={`navbar navbar-expand-lg navbar-${(mode === "dark" || mode === "primary" || mode === "success" || mode === "danger")?"dark":"light"} bg-${mode}`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="#">TextUtility</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
            </ul>

            {/* Dropdown */}
            <div className="dropdown btn-grp" 
            style={{border: (mode === "dark")? "1px solid grey" : "1px solid black"}}>
                <button type="button" className={`btn btn-${mode}`} style={{width: "120px"}}>{bgColours[mode]}</button>
                <button type="button" className={`btn btn-${mode} dropdown-toggle dropdown-toggle-split`} data-bs-toggle="dropdown" aria-expanded="false">
                <span className="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><button className="btn btn-light" onClick={() => toggleMode("light")}>Light Mode</button></li>
                <li><button className="btn btn-dark text-light" onClick={() => toggleMode("dark")}>Dark Mode</button></li>
                <li><button className="btn btn-primary text-light" onClick={() => toggleMode("primary")}>Blue</button></li>
                <li><button className="btn btn-success text-light" onClick={() => toggleMode("success")}>Green</button></li>
                <li><button className="btn btn-danger text-light" onClick={() => toggleMode("danger")}>Red</button></li>
                </ul>
            </div>

            {/* Toggle Dark Mode */}
            {/* <div className="form-check form-switch ms-3">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={toggleMode} />
                <label htmlFor="flexSwitchCheckDefault">
                {mode === "light" ? "Enable Dark Mode" : "Enable Light Mode"}
                </label>
            </div> */}
            </div>
        </div>
        </nav>
    );
}
export default Navbar