// birthday example

// create user birthday as 15 jan 1985
let birthday = new Date(1970, 6, 28);
birthday;

// extract birthday month and birthday day
let userBirthdayMonth = birthday.getMonth();
userBirthdayMonth;

let userBirthDay = birthday.getDate();
userBirthDay;

// current date
let now = new Date();
now;
let currentMonth = now.getMonth();
console.log(currentMonth);
let currentDay = now.getDate();
console.log(currentDay);

// display our message if current month & day === user's birthday
if (currentMonth === userBirthdayMonth && currentDay === userBirthDay) {
    console.log('HAPPY HAPPY ARE YOU AMPED!!! YOU ARE OLD. HAPPY BIRTHDAY')
} else {
    console.log('lets do nothing, its not the users birthday')
}

// UTC = more accurate
// get methods are based on users local machine's time
// to be more accurate, you may want to use UTC time

let now2 = new Date();
// print time normally
console.log(now2.getHours());
// lets use UTC time
console.log(now2.getUTCHours());


// format = the users time on his computer
let now3 = new Date('1 January 2020');
now3;

// access the internationalization api
let newDate = Intl.DateTimeFormat().format(now);
console.log(newDate);
