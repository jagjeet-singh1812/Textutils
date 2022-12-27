import React, { useState } from "react";

export default function Textforms(props) {
  //     const [mystyle,setstyle]=useState({
  //             color:'black',
  //             backgroundColor:'white'
  //     })

  //     const setcstyle=()=>{
  //         console.log('clicked')
  //         if(mystyle.color==="white"){
  //         setstyle({
  //             color:"white",
  //             backgroundColor: "black"
  //         })
  //     }
  //     else{
  //         setstyle({
  //             color:"black",
  //             backgroundColor: "white"
  //     })
  //     }
  // }
  // let mystyle={
  //     color:"white",
  //     backgroundColor: "black"
  // }
  const handlecopy = () => {
    let text = document.getElementById("myarea");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Text has been Copied to Clpboard","success");
  };
  const handleregex = () => {
    let newtext = text.split(/[ ]+/);
    settext(newtext.join(" "));
    props.showalert("Extra spacs has been removed","success");
  };
  const handleup = () => {
    //   console.log("clicked")
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showalert("Text has been Converted into Uppercase","success");
  };
  const handledown = () => {
    settext(text.toLowerCase());
    props.showalert("Text has been Converted into Lowercase","success");
  };
  const handleclear = () => {
    settext("");
    props.showalert("Text has been Cleared","success");
  };
  const handlecap = () => {
    let a = text.split(" ");
    let temp = "";
    for (let i = 0; i < a.length; i++) {
      temp += a[i].charAt(0).toUpperCase() + a[i].slice(1) + " ";
      //    console.log(temp);
      props.showalert("Text has been Capatalized","success");
    }
    let newtext = temp.substring(0, temp.length - 1);
    // console.log((a.toString().replace(","," ")));
    settext(newtext);
  };
  const handlechange = (e) => {
    // console.log("text entered")
    // settext(EventTarget.value)
    settext(e.target.value);
  };
  const [text, settext] = useState(""); // state
  // text="change it" wrong way to change it so use settext function to change it
  //settext("change it to this");// correct way

  return (
    <>
      <div className={`container text-${props.mode==="light"?"dark":"light"}`}>
        <h1>{props.heading}</h1>
        <div className="container ">
          <div className="mb-3 ">
            <textarea
              placeholder="TYPE OR PASTE YOUR CONTENT HERE"
              value={text}
              className="form-control my-2"
              id="myarea"
              rows="10"
              style={{background:props.mode==="light"?"#231d1d":"white",
            color:props.mode==="light"?"white":"black"}}
              onChange={handlechange}
            ></textarea>
            <button className="btn btn-primary my-4" onClick={handleup}>
              Convert To Uppercase
            </button>
            <button className="btn btn-warning mx-2 my-4" onClick={handledown}>
              Convert To Lowercase
            </button>
            <button className="btn btn-info mx-2 my-4" onClick={handleclear}>
              Clear text
            </button>
            <button className="btn btn-dark mx-2 my-4" onClick={handlecap}>
              Capatalize text
            </button>
            <button className="btn btn-success mx-2 my-4" onClick={handlecopy}>
              Copy
            </button>
            <button
              className="btn btn-secondary mx-2 my-4"
              onClick={handleregex}
            >
              Remove Extra spaces
            </button>
            {/* <button className='btn btn-info'  onClick={}>Dark Mode</button> */}
          </div>
        </div>
        <div className="container">
          <h2>Your Text Summary</h2>
          <p className="my-2">
            {text === "" ? 0 : text.split(" ").filter((ele)=>{return ele.length!==0}).length } Words and{" "}
            {text.length} Characters
          </p>
          <p>{(0.008 * text.split(' ').filter((ele)=>{return ele.length!==0}).length).toFixed(4)} Minutes Reading Time</p>
          <h2>Preview</h2>
          <p>
            {text.length === 0
              ? "PLEASE WRITE SOMETHING IN THE ABOVE TEXTAREA TO PREVIEW"
              : text}
          </p>
        </div>
      </div>
    </>
  );
}
