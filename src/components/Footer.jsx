export default function Footer({mode}) {
    const footerStyle = {
        color: (mode === "light") ? "black" : "white",
        backgroundColor: (mode == "dark") ? "rgba(33, 37, 41, 0.2)" : "rgba(255, 255, 255, 0.1)",
        position: "relative"
    }
    return(
        <footer className={`footer text-center py-4 mt-5`} style={footerStyle}>
            <span>&copy; Copyright TextUtility {new Date().getFullYear()}&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>All rights reserved</span>
        </footer>
    );
}