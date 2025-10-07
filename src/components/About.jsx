function About(){
    return (
        <div className="container accordion mt-5 fs-6">
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    What is TextUtility?
                </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div className="accordion-body">
                        Think of TextUtility as your personal text assistant! Need to clean up messy paragraphs, switch between uppercase and lowercase, or get instant stats like word count? Just paste your text and let the tool handle the rest. <br />
                        <strong>TextUtility is a lightweight online tool</strong> that helps you quickly modify and format text. Whether you want to change case, count words, remove extra spaces, or copy cleaned text — everything can be done in one click.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button className="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    Why use TextUtility?
                </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                    <div className="accordion-body">
                        <strong>TextUtility saves time</strong> by automating common text formatting tasks that would normally take several manual steps. Instead of opening multiple tools or editing text by hand, you can clean, convert, and optimize everything in one place — instantly and accurately. <strong>It’s fast, distraction-free, and accessible from any device.</strong>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                    <button className="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        Is TextUtility Free?
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div className="accordion-body">
                        <strong>Yes!</strong><br />
                        TextUtility is completely free to use. There are no sign-ups, no hidden charges, and no usage limits. Just open the tool, paste your text, and start transforming—it’s built to be simple and accessible for everyone.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                    <button className="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                    Who can benefit from it?
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                    <div className="accordion-body">
                        TextUtility is useful for a wide range of users:
                        <ul type="disc">
                        <li>Students – for formatting assignments, essays, and reports</li>
                        <li>Writers & Bloggers – to polish drafts and remove inconsistencies</li>
                        <li>Developers – to quickly adjust case styles or clean copied code/comments</li>
                        <li>Office Professionals – for preparing clean emails and documents</li>
                        <li>Anyone dealing with text daily!</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About