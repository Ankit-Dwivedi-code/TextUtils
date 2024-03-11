import React, {useState} from 'react'

export default function TextForm(props) {
    let handleUpClick = () =>{
        // console.log("clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "success");
    }
    
    let handleOnchange = (event)=>{
        setText(event.target.value)
}

let handleLoClick = ()=>{
  let newText = text.toLowerCase();
  setText(newText)
  props.showAlert("Converted to LowerCase", "success");
}

let handleToClear = ()=>{
  let newText = "";
  setText(newText)
  props.showAlert(" All text has been cleared!", "success");
}
  
    const [text, setText] = useState("Enter Your text here");

const [isBold, setIsBold] = useState(false);
const [isItalic, setIsItalic] = useState(false);
const [isUnderline, setIsUnderline] = useState(false);

const handleBoldClick = () => {
  setIsBold(!isBold);
};

const handleItalicClick = () => {
  setIsItalic(!isItalic);
};

const handleUnderlineClick = () => {
  setIsUnderline(!isUnderline);
};

// Update the textarea style based on the state
const textStyle = {
  fontWeight: isBold ? 'bold' : 'normal',
  fontStyle: isItalic ? 'italic' : 'normal',
  textDecoration: isUnderline ? 'underline' : 'none'
};

  return (
    <>
    <div className='container' style={{color: props.mode === 'light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3" >
       <textarea className="form-control" value={text} style={{...textStyle,backgroundColor: props.mode === 'light'?'white':'#042743',color: props.mode === 'light'?'black':'white'}} id="MyBox"  onChange={handleOnchange} rows="8"></textarea>
        </div>
        <button className="btn btn-outline-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-outline-primary" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-outline-primary mx-2" onClick={handleToClear}>Clear All</button>
        <button className="btn btn-outline-secondary mx-2" onClick={handleBoldClick}>B</button>
        <button className="btn btn-outline-secondary mx-2" onClick={handleItalicClick}>I</button>
        <button className="btn btn-outline-secondary mx-2" onClick={handleUnderlineClick}>U</button>
    </div>
    <div className="container my-2" style={{color: props.mode === 'light'?'black':'white'}}>
      <h2>Your Text Summary</h2>
      <b><p>{text.split(" ").length} words and {text.length} characters.</p></b>
      <p>Can read it in {0.008 * text.split(" ").length} minutes.</p>
      <h2>Content preview</h2>
      <p style={textStyle}>{text.length > 0 ? text : "Enter Something to preview it here"}</p>
    </div>
    </>
  )
}
