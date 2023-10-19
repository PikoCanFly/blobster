export function blobGenerator(width, height) {
	//random points
	const numPoints = 6;
	const points = [];

	for (let i = 0; i < numPoints; i++) {
		const angle = (i / numPoints) * (2 * Math.PI);
		const radius = Math.random() * 160;
		const x = width / 2 + radius * Math.cos(angle);
		const y = height / 2 + radius * Math.sin(angle);
		points.push({ x, y });
	}

	//initiate a path

	let pathData = `M ${points[0].x} ${points[0].y}`;

	//connect the points, and draw a path that resembles a blob shape

    for (let i = 1; i < points.length ; i++){
        const x1 = points[i].x;
        const y1 = points[i].y;
        const x2 = (x1 + points[(i+1) % numPoints].x)/2;
        const y2 = (y1 + points[(i+1) % numPoints].y)/2;

        pathData += `C ${x1} ${y1} ${x2} ${y2} ${x2} ${y2}`

    }


	//close the path, and return the path data

    pathData += "Z";

    return pathData;
}
