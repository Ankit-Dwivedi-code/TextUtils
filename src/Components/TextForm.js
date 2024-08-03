import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("Enter Your text here");
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [isUnderline, setIsUnderline] = useState(false);

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("Converted to Uppercase", "success");
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showalert("Converted to Lowercase", "success");
    };

    const handleToClear = () => {
        setText("");
        props.showalert("All text has been cleared!", "success");
    };

    const handleToCopy = () => {
        navigator.clipboard.writeText(text).then(() => {
            props.showalert("Copied to clipboard", "success");
        }).catch(() => {
            props.showalert("Failed to copy to clipboard", "danger");
        });
    };

    const handleBoldClick = () => {
        setIsBold(!isBold);
    };

    const handleItalicClick = () => {
        setIsItalic(!isItalic);
    };

    const handleUnderlineClick = () => {
        setIsUnderline(!isUnderline);
    };

    const textStyle = {
        fontWeight: isBold ? 'bold' : 'normal',
        fontStyle: isItalic ? 'italic' : 'normal',
        textDecoration: isUnderline ? 'underline' : 'none',
        padding: '8px' // Adding padding for better readability
    };

    return (
        <>
            <div className='container' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{typeof props.heading === 'string' ? props.heading : ''}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        style={{
                            ...textStyle,
                            backgroundColor: props.mode === 'light' ? 'white' : 'rgb(19, 60, 93)',
                            color: props.mode === 'light' ? 'black' : 'white'
                        }}
                        id="MyBox"
                        onChange={(event) => setText(event.target.value)}
                        rows="8"
                    ></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-outline-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-outline-primary my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-outline-primary my-1 mx-2" onClick={handleToCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-outline-primary  my-1" onClick={handleToClear}>Clear All</button>
                <button disabled={text.length === 0} className="btn btn-outline-secondary mx-2 my-1" onClick={handleBoldClick}>B</button>
                <button disabled={text.length === 0} className="btn btn-outline-secondary mx-2 my-1" onClick={handleItalicClick}>I</button>
                <button disabled={text.length === 0} className="btn btn-outline-secondary mx-2 my-1" onClick={handleUnderlineClick}>U</button>
            </div>
            <div className="container my-2" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Your Text Summary</h2>
                <b><p>{text.split(/\s+/).filter((element) => element.length !== 0).length} words and {text.length} characters.</p></b>
                <p>Can read it in {0.008 * text.split(" ").filter((element) => element.length !== 0).length} minutes.</p>
                <h2>Content preview</h2>
                <p style={textStyle}>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    );
}
