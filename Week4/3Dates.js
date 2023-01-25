//Dates
//mm-dd-yyyy
//dd-mm-yyyy
//Date Constructor
let today = new Date();
console.log(today);
console.log(typeof(today));
//new Date(year, month, day, hours, minutes, seconds, ms)
//month parameter is 0 based, thefirst month is 0, last is 11
//0=Jan, 11=December
let christmas = new Date(2023, 11, 25);
console.log(christmas);
//new Date("Date String")
//International format for date "yyyy-mm-dd"
//when you use the international format you must consider
//International Time Zones
let valentinesDay = new Date('2023-02-14');
console.log(valentinesDay);
//Short Date String
//"mm/dd/yyyy"
valentinesDay = new Date('02/14/2023');
console.log(valentinesDay);
//Long Date Format
valentinesDay = new Date("Feb 14 2023");
console.log(valentinesDay);

//Date methods
//getMonth()
//get the number of the month
//0 based - Jan is 0 and Dec is 11
let month = valentinesDay.getMonth();
console.log(month);
//getDate()
let day = valentinesDay.getDate();
console.log(day);
//getYear()
let year = valentinesDay.getFullYear();
console.log(year);
//getFullTime
let time = valentinesDay.getTime();
console.log(time);