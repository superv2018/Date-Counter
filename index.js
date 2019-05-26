

let weekday = new Array(7); 
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";



function myDateCalc() {
  let days = [];

let startDate = document.getElementById('startDate').value;
  let myDate = document.getElementById('date').value; 
  let endDate = new Date(myDate); 
  startDate = new Date(startDate);

  while (startDate <= endDate) {
    let weekDayName = weekday[startDate.getDay()];
    startDate.setDate(startDate.getDate() + 1); 
    days.push(startDate);
   
    console.log(weekDayName);
  }
  console.log(days.length);
  document.getElementById('calc').innerHTML = `${days.length} days left.`; 
}



function buisnessCalc() {
  let days = [];
 
  let startDate = document.getElementById('startDate').value;
  let myDate = document.getElementById('date').value; 
  let endDate = new Date(myDate);
  startDate = new Date(startDate);

  while (startDate <= endDate) {

    let weekDayName = weekday[startDate.getDay()];
    startDate.setDate(startDate.getDate() + 1); 

    if (weekDayName != "Saturday" && weekDayName  != "Sunday" ) {
      days.push(weekDayName);
    }

  }
  console.log(days.length);
document.getElementById('businessDays').innerHTML =  `${days.length} business days.`; 
}



let countDownDate = new Date("Jun 21, 2019 18:37:25").getTime();
console.log(countDownDate);

let x = setInterval(function() {

  let now = new Date().getTime();

 
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);