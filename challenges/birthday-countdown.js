/*

  Create a function `daysUntilDate` that accepts a string (with the format `"mm/dd/yyyy"`) and
  returns the number of days (integer) between today and that date. Please use the built in
  Javascript `Date` type in your solution.

  See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

  Next, create a function `birthdayReminder` that accepts an array of objects, containing a person's
  date of birth (dob), and returns an array of reminder messages (strings).

  ```javascript
  birthdayReminder([
    {
      name: "Jack",
      dob: "10/31/2013"
    },
    {
      name: "Jill",
      dob: "4/01/1975"
    }
  ]);

  //=> [
  //      "Jack's birthday is in 75 days",
  //      "Jill's birthday is in 305 days"
  //    ]
  ```

  Bonuses
  - Will your function still work tomorrow when the date is different? Is it future proofed?
  - To make your output more relevant, can you sort by days remaining (ascending)?

*/


// YOUR CODE HERE      dateMonth = 5   todayMonth =  3
var daysUntilDate = function(date){
  var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
  var date = new Date(date);
  var today = new Date();
  dateMonth = date.getMonth();
  dateDay = date.getDate();
  todayMonth = today.getMonth();
  todayDay = today.getDate();
  console.log("dateMonth:",dateMonth)
  monthDifference = dateMonth - todayMonth;
  var totalDays = 0
  if(monthDifference != 0){
    var daysLeft = daysInMonth[todayMonth] - todayDay
    console.log("days left:", daysLeft)
    totalDays = totalDays + daysLeft
    for(var i = todayMonth + 1; i != dateMonth; i = (i + 1)%12){
      totalDays = totalDays + daysInMonth[i];
      console.log("total days:", totalDays);
    }
    totalDays = totalDays + dateDay;
    console.log("total diffference:", totalDays)
  }else{
    var dayDifference = dateDay - todayDay;
    if (dayDifference > 0){
      totalDays = dayDifference;
    }
    else if (dayDifference < 0){
      totalDays = 365 + dayDifference;
    }
    else{
      totalDays = 0
    }
  }
  console.log('answer is:', totalDays);
}

var birthdayReminder = function(birthdays){
  for(var i=0; i<birthdays.length; i++){
    console.log(daysUntilDate(birthday.dob))
  }
}

