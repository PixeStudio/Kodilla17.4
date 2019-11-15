function pad0(value) {
	let result = value.toString();
	if (result.length < 2) {
		result = '0' + result;
	}
	return result;
}

function formatTime(seconds) {
	
	var hours = Math.floor(seconds / 3600);
	var minutes = Math.floor(seconds / 60) - 60*hours;
	var seconds = Math.floor(seconds % 60);
	
	hours = pad0(hours) + ' hours, ';
	minutes = pad0(minutes) + ' minutes, ';
	seconds = pad0(seconds) + ' seconds. ';
	
	return hours + minutes + seconds;
}

exports.formatTime = formatTime;