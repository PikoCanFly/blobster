import React from "react";
import { randomIndexGenerator } from "../functions/randomIndexGenerator";
import { blobGenerator } from "../functions/blobGenerator";
import eye1 from "../assets/blobsterEyes/1.svg";
import eye2 from "../assets/blobsterEyes/2.svg";
import eye3 from "../assets/blobsterEyes/3.svg";
import eye4 from "../assets/blobsterEyes/4.svg";
import eye5 from "../assets/blobsterEyes/5.svg";
import eye6 from "../assets/blobsterEyes/6.svg";
import eye7 from "../assets/blobsterEyes/7.svg";
import { useState } from "react";

export default function RandomBlob() {
	const width = 400;
	const height = 400;
	// let randomRadius = Math.floor(Math.random() * (100 - 40 + 1)) + 40;
	const [randomRadius, setRandomRadius] = useState("30");
	const circleColors = ["#dbc556", "#71c785", "#7192c7", "#c371c7"];
	// const randomCircleColor = circleColors[randomIndexGenerator(circleColors)];
	const [randomCircleColor, setRandomCircleColor] = useState("#c371c7")
	// const blobPath = blobGenerator(width, height);
	const [blobPath, setBlobPath] = useState(blobGenerator(width, height))
	const eyes = [eye1, eye2, eye3, eye4, eye5, eye6, eye7];
	const [randomEyes, setRandomEye] = useState(eyes[randomIndexGenerator(eyes)])
	const changeBlob =()=>{
		setRandomCircleColor(circleColors[randomIndexGenerator(circleColors)])
		setRandomRadius(Math.floor(Math.random() * (100 - 40 + 1)) + 40)
		setBlobPath(blobGenerator(width, height))
		setRandomEye(eyes[randomIndexGenerator(eyes)])

	}

	return (
		<div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
			<svg width={width} height={height}>
				<circle
					cx={width / 2}
					cy={height / 2}
					r={randomRadius}
					fill={randomCircleColor}
				></circle>
				<g>
					<path d={blobPath} fill="pink" />
					<image
						x="150"
						y="150"
						height={100}
						xlinkHref={randomEyes}
					/>
				</g>
			</svg>
			<button onClick={changeBlob}>Click me!</button>
		</div>
	);
}
