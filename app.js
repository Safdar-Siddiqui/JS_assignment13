// ------ Question 1 ------

document.write("<h3> Question 1: </h3>");

let now = new Date();
document.write(now);

document.write("<br>")


// ------ Question 2 ------

document.write("<h3> Question 2: </h3>");

let monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let months = monthsArray[now.getMonth()];

document.write("Current Month: " + months);

document.write("<br>");


// ------ Question 3 ------

document.write("<h3> Question 3: </h3>");

let daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let days = daysArray[now.getDay()];
//document.write(days);
if(days.length > 3){
  let shortDay = days.slice(0,3);
  document.write("Today is " + shortDay);
}

document.write("<br>");


// ------ Question 4 ------

document.write("<h3> Question 4: </h3>");

if(days == "Saturday" || days == "Sunday"){
  document.write("It is Fun Day"); 
}
else {
  document.write("It is not a Fun Day");
}

document.write("<br>")


// ------ Question 5 ------

document.write("<h3> Question 5: </h3>");

let date = now.getDate();
if(date < 16){
  document.write("First fifteen days of the month"); 
}
else {
  document.write("Last days of the month");
}

document.write("<br>")



// ------ Question 6 ------

document.write("<h3> Question 6: </h3>");

document.write("Current Date: " + now + "<br>");
document.write("Elapsed milliseconds since January 01 1970: " + now.getTime() + ". <br>");

let mins = now.getTime();
mins = Math.round(mins / 60000);
document.write("Elapsed minutes since January 01 1970: " + mins + ". <br>");
document.write("<br>")


// ------ Question 7 ------

document.write("<h3> Question 7: </h3>");

let hrs = now.getHours();
if(hrs < 12){
  document.write("It's AM");
}
else{
  document.write("It's PM");
}

document.write("<br>")


// ------ Question 8 ------

document.write("<h3> Question 8: </h3>");

let laterDay = new Date("December-31-2020");
document.write("Later Day: " + laterDay);

document.write("<br>")


// ------ Question 9 ------

document.write("<h3> Question 9: </h3>");

let Ramzan2015 = new Date("June 18 2015");

let daysRamzan = (now - Ramzan2015) / (1000 * 60 * 60 * 24);

document.write("Ramzan 2015: " + Ramzan2015);
document.write("<br>" + Math.round(daysRamzan) + " days passed since 1st Ramzan 2015");;

document.write("<br>")


// ------ Question 10 ------

document.write("<h3> Question 10: </h3>");

let begin2015 = new Date("January-01-2015");
let refDate = new Date("July-31-2015");

let bms = begin2015.getTime();
let rms = refDate.getTime();
let res = rms - bms;

document.write("On reference date " + refDate + " " + res/1000 + " seconds had passed since beginning of 2015");

document.write("<br>")



// ------ Question 11 ------

document.write("<h3> Question 11: </h3>");

let currentDate = new Date();
document.write("Current Date: " + currentDate);

let currentHours = currentDate.getHours();
currentDate.setHours(currentHours - 1);
document.write("<br> 1 hour before, it was " + currentDate);

document.write("<br>")

// ------ Question 12 ------

document.write( "<h3> Question 12: </h3>");

let year = new Date();
document.write("Current Year: " + year);
let currYear = year.getFullYear();
//document.write("<br>" + currYear);
year.setFullYear(currYear - 100);
document.write("<br> 100 years back, it was " + year);

document.write("<br>");



// ------ Question 13 ------

document.write("<h3> Question 13: </h3>");

let age = prompt("Enter your age: ");

let currentYear = new Date().getFullYear();
let ageYear = currentYear - age;

document.write("Yout age is: " + age + "<br>");
document.write("Your Birth Year is: " + ageYear);

document.write("<br>")

// ------ Question 14 ------

let custName = prompt("Enter Consumer Name")
let units = +prompt("Enter Units consumed");
let rate = 20;
let netBill = units * rate;
let surcharge = 50;
let grossBill = netBill + surcharge;

document.write("<h2> Electricity Bill </h2>");

document.write("Customer Name: <b>" + custName + "</b> <br>");
document.write("Current Month: <b> " + months + "</b> <br>");
document.write("Units Consumed: <b> " + units + "</b> <br>");
document.write("Rate per Unit: <b> " + rate + "</b> <br>");
document.write("Net Bill (within due date): <b> " + netBill + "</b> <br>");
document.write("Late Payment Surcharge: <b> " + surcharge + "</b> <br>");
document.write("Gross Bill (after due date): <b> " + grossBill + "</b> <br>");


