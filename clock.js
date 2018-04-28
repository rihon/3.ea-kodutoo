let clockContainer
let dateContainer

window.onload = function () {
  init()
}

function init () {
  clockContainer = document.querySelector('#clock')
  dateContainer = document.querySelector('#date')
  startClock()
  clockContainer.style.fontSize = 150+'px';  
  dateContainer.style.fontSize = 50+'px';
  changeBackground()
}

function startClock () {
  updateClock()

  window.setInterval(function () {
   updateClock()
  }, 1000)
}

function updateClock () {
	const date = new Date()
  //https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_clock
  
	var day = new Array();
	day[0] = "Monday";
	day[1] = "Tuesday";
	day[2] = "Wednesday";
	day[3] = "Thursday";
	day[4] = "Friday";
	day[5] = "Saturday";
	day[6] = "Sunday";
	
	var d = day[date.getDay()];
	
	var month = new Array();
	month[0] = "January";
	month[1] = "February";
	month[2] = "March";
	month[3] = "April";
	month[4] = "May";
	month[5] = "June";
	month[6] = "July";
	month[7] = "August";
	month[8] = "September";
	month[9] = "October";
	month[10] = "November";
	month[11] = "December";
	
	var n = month[date.getMonth()];
	var y = date.getFullYear();
	yearAndMonth(y, n, d);
	
	
	
	
	var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
	m = checkTime(m);
    s = checkTime(s);
    clockContainer.innerHTML = h + ":" + m + ":" + s;
}

function yearAndMonth(year, month, day){
	dateContainer.innerHTML = day+"  "+month +"  "+ year;
}

function checkTime(i){
	if (i < 10) {i = "0" + i};
	return i;
}

function changeBackground(){	
	let urls = ['https://wallpapercave.com/wp/ixmt8JQ.jpg', 'https://wallpapercave.com/wp/trlzN6b.jpg', 'http://s1.picswalls.com/wallpapers/2016/03/29/beautiful-nature-hd-wallpaper_042322367_304.jpg', 'http://www.intrawallpaper.com/static/images/Nice-Blue-Nature.jpg', 'http://www.intrawallpaper.com/static/images/Nature-Water-Wallpaper-7-HD.jpg', 'https://i.imgur.com/WzY59S2.jpg', 'https://wallpapertag.com/wallpaper/full/2/0/5/56984-free-download-nature-wallpaper-hd-1920x1080-phone.jpg'];
	let number = Math.round(Math.random() * 6);
	document.body.style.backgroundImage = "url(" + urls[number] + ")";
	if(number==0){
		clockContainer.style.color = "#000000";
		dateContainer.style.color = "#000000";
	}else if(number ==1){
		clockContainer.style.color = "#ffffff";
		dateContainer.style.color = "#ffffff";
	}else if(number ==2){
		clockContainer.style.color = "#ffffff";
		dateContainer.style.color = "#ffffff";
	}else if(number ==3){
		clockContainer.style.color = "#ffffff";
		dateContainer.style.color = "#ffffff";
	}else if(number ==4){
		clockContainer.style.color = "#ffffff";
		dateContainer.style.color = "#ffffff";
	}else if(number ==5){
		clockContainer.style.color = "#ffffff";
		dateContainer.style.color = "#ffffff";
	}else if(number ==6){
		clockContainer.style.color = "#D3D3D3";
		dateContainer.style.color = "#D3D3D3";
	}

}

