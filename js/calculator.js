function getVal(){
	let travelTime = document.getElementById("travelTime").value;
	console.log(travelTime);

	let timeMeasure = document.getElementById("timeMeasure").value;

	if (timeMeasure == "days") {
		travelTime *=24;
	}
	if (timeMeasure == "months") {
		travelTime *= 30;
		travelTime *=24;
	}
	if (timeMeasure == "years") {
		travelTime *= 365;
		travelTime *=24;
	}

	let relTime = travelTime/Math.sqrt(1- (Math.pow(299792.446,2) / Math.pow(299792.458,2)));

	let relTimeMeasure = document.getElementById("relTimeMeasure").value;

	if (relTimeMeasure == "days") {
		relTime /=24;
	}
	if (relTimeMeasure == "months") {
		relTime /= 31;
		relTime /=24;
	}
	if (relTimeMeasure == "years") {
		relTime /= 365;
		relTime /=24;
	}

	let relTimeBox = document.getElementById("relTime");
	relTimeBox.value = relTime;

	console.log(relTime);
	console.log(timeMeasure);
}

function getRelVal(){
	let relTime = document.getElementById("relTime").value;
	console.log(relTime);

	let relTimeMeasure = document.getElementById("relTimeMeasure").value;

	if (relTimeMeasure == "days") {
		relTime *=24;
	}
	if (relTimeMeasure == "months") {
		relTime *= 30;
		relTime *=24;
	}
	if (relTimeMeasure == "years") {
		relTime *= 365;
		relTime *=24;
	}

	let normalTime = relTime*Math.sqrt(1- Math.pow(299792.446,2) / Math.pow(299792.458,2));

	let normalTimeMeasure = document.getElementById("timeMeasure").value;

	if (normalTimeMeasure == "days") {
		normalTime /=24;
	}
	if (normalTimeMeasure == "months") {
		normalTime /= 31;
		normalTime /=24;
	}
	if (normalTimeMeasure == "years") {
		normalTime /= 365;
		normalTime /=24;
	}

	let normalTimeBox = document.getElementById("travelTime");
	normalTimeBox.value = normalTime;

}
