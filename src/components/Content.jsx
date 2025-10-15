import { useState } from "react"

export default function Content({mode, showAlert}) {
    const [text, setText] = useState("")
    const myStyle = {
        backgroundColor: (mode === "dark")? "#212529" : "transparent",
        color: (mode === "dark" || mode === "primary") ? "white" : "black",
        border: (mode === "light")? "1px solid grey": "1px solid white",
    }
    function buttonStyle(isDisabled, isClearButton) {
        if(isDisabled){
            return {
                boxShadow: (mode === "primary") ? "0 0 10px blue" : "0 0 10px grey",
                opacity: 0.7,
                cursor: "not-allowed"
            }
        }
        else {
            return {
                boxShadow: (isClearButton) ? "0 0 10px 1px red" : (mode === "dark") ? "0 0 10px whitesmoke" : "0 0 10px blue"
            }
        }
    }

    function handleText(event){
        setText(event.target.value)
    }
    function handleUpperCase(){
        let newText = text.toUpperCase()
        setText(newText)
        showAlert("Text converted to Upper Case!", "success")
    }
    function handleLowerCase(){
        let newText = text.toLowerCase()
        setText(newText)
        showAlert("Text converted to Lower Case!", "success")
    }
    function handleTitleCase(){
        let newText = text
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
        setText(newText)
        showAlert("Text converted to Title Case!", "success")
    }
    function handleSentenceCase() {
        let newText = text
            .toLowerCase()
            .replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase());
        setText(newText);
        showAlert("Text converted to Sentence Case!", "success")
    } 
    function handleExtraSpace(){
        let newText = text.replace(/\s+/g, " ").trim();
        setText(newText)
        showAlert("Removed extra spaces from text!", "success")
    }
    function handleClear(){
        setText("")
        showAlert("Text Cleared!", "success")
    }
    function handleCopyText(){
        if (text.trim() !== "") {
            navigator.clipboard.writeText(text);
            showAlert("Text copied to clipboard!", "success");
        }
    }
    return (
        <>
            <div className="container">
                <div className="my-4">
                    <h3 className="mb-4">Enter text below to manipulate</h3>
                    <textarea className="form-control" value={text} onChange={handleText} placeholder="Enter text here" rows="6" style={myStyle}/>

                    <button className="btn btn-primary px-4 my-3 me-5" disabled={text === ""} onClick={handleUpperCase} style={buttonStyle(text === "", false)}>UPPER CASE</button>
                    <button className="btn btn-primary px-4 my-3 me-5" disabled={text === ""} onClick={handleLowerCase} style={buttonStyle(text === "", false)}>lower case</button>
                    <button className="btn btn-primary px-4 my-3 me-5" disabled={text === ""} onClick={handleTitleCase} style={buttonStyle(text === "", false)}>Title Case</button>
                    <button className="btn btn-primary px-4 my-3 me-5" disabled={text === ""} onClick={handleSentenceCase} style={buttonStyle(text === "", false)}>Sentence case</button>
                    <button className="btn btn-primary px-4 my-3 me-5" disabled={text === ""} onClick={handleExtraSpace} style={buttonStyle(text === "", false)}>Remove Extra Space</button>
                    <button className="btn btn-danger px-4 my-3 me-5" disabled={text === ""} onClick={handleClear} style={buttonStyle(text === "", true)}>Clear Text</button>
                </div>
                <hr />
                <div className="my-4">
                    <h2>Text Summary</h2>
                    <ul style={{listStyleType: "square"}}>
                        <li>Words = {text.trim() === ""? 0:text.split(/\s+/).length}</li>
                        <li>Characters = {text.length}</li>
                        <li>Read time = {(0.008 * (text.trim() === ""? 0:text.split(" ").length)).toFixed(2)}</li>
                    </ul>
                    <hr />
                    <h2 className="mt-4">Preview</h2>
                    <div className="preview" style={myStyle}>
                        <p>{text === "" ? "Nothing to show!":text}</p>
                    </div>
                    <button className="btn btn-success px-4 my-3 me-5" disabled={text === ""} onClick={handleCopyText} style={buttonStyle(text === "", false)}>Copy Text</button>
                </div>
            </div>
        </>
    );
}