import React, { useState } from "react";
import PropTypes from "prop-types";

const propTypes = {};

const defaultProps = {};

const TextAreas = () => {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handlemode = (event) =>{
    if(setbtn=="btn btn-light m-2"){
      setsetbtn("btn btn-dark m-2");
      setsetstyle({
        backgroundColor: "white",
        color: "black"
      });
      settext1("dark");
    }else{
      setsetbtn("btn btn-light m-2");
      
      setsetstyle({
        backgroundColor: "black",
        color: "white"
      });
      settext1("light");
    }
  }
  const resetIt = (event) => {
    setText("");
  };
  const upCase = (event) => {
    setText(text.toUpperCase());
  };
  const lowCase = (event) => {
    setText(text.toLowerCase());
  };


  var words = new Set(text.replaceAll(".","").split(" "));


  const [setstyle, setsetstyle] = useState({
    backgroundColor: "black",
    color: "white"
  })

  const [setbtn, setsetbtn] = useState("btn btn-light m-2")

  const [text1, settext1] = useState("dark");

  return (
    <div style={setstyle} className="p-5">
      <div className="container my-3 p-5" >
        <textarea 
          className="form-control p-5  border-2 border border-dark"
          value={text}
          onChange={handleChange}
        ></textarea>
        <button className={setbtn} onClick={lowCase}>
          Convert to lower Case
        </button>
        <button className={setbtn} onClick={upCase}>
          Convert to upper Case
        </button>
        <button className={setbtn} onClick={resetIt}>
          Reset
        </button>
        <button className={setbtn} onClick={handlemode}> {text1}</button>
      </div>
      <div className="container my-3" >
        <h3>
            Summary
        </h3>
        <p>
            Characters: {text.length}
        </p>
        <p>
            Words: {text.split(" ").length}
        </p>
        <p>
            unique Words: {words.size}
        </p>
        <p>
            Sentences: {text.split(". ").length}
        </p>
      </div>
    </div>
  );
};

TextAreas.propTypes = propTypes;
TextAreas.defaultProps = defaultProps;

export default TextAreas;
