var timer = setInterval(myTimer, 1000);
	function myTimer() {
		var date = new Date();
		
		var timeLeft = {
			months: 0,
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0
		}

		var finalDate = {
			month: 11,
			day: 21,
			hours: 7,
			minutes: 50,
			seconds: 0
		}

		var currentDate = {
			month: date.getMonth(),
		 	day: date.getDate(),
		 	hours: date.getHours(),
		 	minutes: date.getMinutes(),
		 	seconds: date.getSeconds()
		}

		var secondsInADay = 86400;
		var minutesInADay = 1440;
		var daysLeft = 0;

		if (currentDate.month != 11) {
			if (currentDate.month === 7) {
				daysLeft = 31 - currentDate.day;
				daysLeft += 90;
			} else if (currentDate.month === 8) { 
				daysLeft = 30 - currentDate.day;
				daysLeft += 60;
			} else if (currentDate.month === 9) {
				daysLeft = 31 - currentDate.day;
				daysLeft += 29;
			} else if (currentDate.month === 10) {
				daysLeft = 30 - currentDate.day;
			}
			daysLeft += 21;
		} else {
			daysLeft = finalDate.day - currentDate.day;
		}		
		
		// months left
		timeLeft.months = finalDate.month - currentDate.month; 

		var formattedCurrentDate = currentDate.hours   + ':' +
								   currentDate.minutes + ':' +
								   currentDate.seconds;
		
		document.getElementById("RJ").innerHTML = formattedCurrentDate;
		document.getElementById("timer").innerHTML = daysLeft;
	}

	function rjTime() {

	}