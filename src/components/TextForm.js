 import React, { useState } from "react";

export default function TextForm(props) {
	const [text, setText] = useState("");
	const handleOnChange = event => {
		setText(event.target.value);
	};
	const handleUpperCase = () => {
		setText(text.toUpperCase());
		props.showAlert("Text is Converted to Upper Case", "success");
	};
	const handleLowerCase = () => {
		setText(text.toLowerCase());
		props.showAlert("Text is Converted to Lower Case", "success");
	};
	const handleClearText = () => {
		setText("");
		props.showAlert("Text is Cleared", "success");
	};
	const handleReadText = () => {
		let msg = new SpeechSynthesisUtterance();
		msg.text = text;
		window.speechSynthesis.speak(msg);
		props.showAlert("Plug-in HeadSet and Listen to the Text", "success");
	};
	const handleReverse = () => {
		let strArr = text.split("");
		strArr = strArr.reverse();
		let newText = strArr.join("");
		setText(newText);
		props.showAlert("Text is Reversed", "success");
	};
	const handleCapitalise = () => {
		let words = text.split(" ");
		let newText = " ";
		words.forEach(element => {
			newText += element.charAt(0).toUpperCase() + element.slice(1) + " ";
		});
		setText(newText);
		props.showAlert("Text is Capitalized", "success");
	};
	return (
		<>
			<div
				className="container my-3"
				style={{ color: props.mode === "dark" ? "white" : "black" }}
			>
				<div className="mb-3">
					<h1>{props.heading}</h1>
					<textarea
						className="form-control my-3"
						id="exampleFormControlTextarea1"
						rows="8"
						value={text}
						onChange={handleOnChange}
						style={{
							backgroundColor: props.mode === "dark" ? props.newColor : "white",
							color: "black"
						}}
					></textarea>
				</div>
				<button  disabled={text.length===0} className="btn btn-primary  my-2" onClick={handleUpperCase}>
					Convert to UpperCase
				</button>
				<button  disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowerCase}>
					Convert to LowerCase
				</button>
				<button  disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearText}>
					Clear The Text
				</button>
				<button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={handleReadText}>
					Read The Text
				</button>
				<button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={handleReverse}>
					Reverese The Text
				</button>
				<button  disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCapitalise}>
					Capitalise The Text
				</button>
				<div className="container my-3">
					Your Text Summary
					<p>
						{text.split(" ").filter(ele => ele).length} words and {text.length}{" "}
						character
					</p>
					<p>
						{(0.008 * text.split(" ").filter(ele => ele).length).toFixed(4)}{" "}
						Minutes to read
					</p>
					<h2>Preview Your Text</h2>
					<p>
						{text.length > 0
							? text
							: "Nothing to Preview"}
					</p>
				</div>
			</div>
		</>
	);
}
