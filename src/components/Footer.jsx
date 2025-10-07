export default function Footer({mode}) {
    return(
        <footer className={`footer bg-${mode} text-center py-4 mt-5`} 
        style={{color: (mode === "light") ? "black" : "white"}}>
            <span>&copy; Copyright TextUtility {new Date().getFullYear()}&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>All rights reserved</span>
        </footer>
    );
}