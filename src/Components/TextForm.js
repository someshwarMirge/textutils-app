import { useState } from "react";

const TextForm = (props) => {

    const clearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared","success");
    };
    const handleUpClick = () => {
        let newText = text.toUpperCase();

        setText(newText);
        props.showAlert("Text has been converted to uppercase", "success");
    };
    const handleLoClick = () => {
        let newText = text.toLowerCase();

        setText(newText);
        props.showAlert("Text has been converted to lowercase", "success");
    };
    const handleOnChnage = (event) => {
        setText(event.target.value);
    };

    const [text, setText] = useState("");
    return (
        <>
            <div className={`container my-3 text-${props.mode==='dark'?'white':'black'}`} style={{backgroundColor: props.mode==='dark'?'#11244e':'white' }}>
                <h1>{props.heading}</h1>
                <div className={`mb-3 my-3 text-${props.mode==='dark'?'white':'black'}`}>
                    <textarea
                        className="form-control "
                        id="exampleFormControlTextarea1"
                        rows="8"
                        value={text}
                        onChange={handleOnChnage}
                        style={{backgroundColor: props.mode==='dark'?'gray':'white' , color: props.mode==='dark'?'white':'black' }}
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>
                    {" "}
                    Convert To Uppercase{" "}
                </button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>
                {" "}
                Convert To Lowercase{" "}
            </button>
            <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
            </div>
            <div className={`container text-${props.mode==='dark'?'white':'black'}`} style={{backgroundColor: props.mode==='dark'?'#11244e':'white' }} >
                <h2> Your Text Summary </h2>
                <p>
                    {text===""?"0":text.split(" ").length} words and {text===""?"0":text.length} character{" "}
                </p>
                <p>{text===""?"0":0.008 * text.split(" ").length} Minutes Read</p>
                <h3>Preview</h3>
                <p>{text===""?"Enter text in textarea to preview here":text}</p>
            </div>
        </>
    );
};

export default TextForm;
