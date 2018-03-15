const 
	daysOfWeek = ['Sunday', 'Monday', 'Tuesday, Wednsday', 'Thursday', 'Friday', 'Saturday'],
	  monthsNames = ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];

var 
	iPhone = {
		state : false
	},
	timer;
	
window.addEventListener('load', function() {
	const 
		screen = document.querySelector('.iPhone .screenOff'),
		lockHour = document.getElementById('lockHour'),
		lockDate = document.getElementById('lockDate'),
		homeBtn = document.getElementById('homeBtn');

	function switchOn() {
		screen.style.opacity = '0';
		iPhone.state = true;
		setTimeout(switchOff, 8000);
	}

	function switchOff() {
		screen.style.opacity = '1';
		iPhone.state = false;
	}

	timer = setInterval(function () {
		let date = new Date();
		
		lockHour.textContent = date.getHours() + ':' + date.getMinutes();
		lockDate.textContent = `${daysOfWeek[date.getDay()]}, ${date.getDate()} ${monthsNames[date.getMonth()]}`;
	}, 1000);
	
	homeBtn.addEventListener('click', switchOn);
});