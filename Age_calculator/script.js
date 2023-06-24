function ageCalculator() {
    var day1 = document.querySelector(".date").value;
    var month1 = document.querySelector(".month").value;
    var year1 = document.querySelector(".year").value;

    var date = new Date();
    var day2 = date.getDate();
    // console.log(day2);
    var month2 = 1 + date.getMonth();
    var year2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (day1 > day2) {
        day2 = day2 + month[month2 - 1];
        month2 = month2 - 1;
    }
    if (month1 > month2) {
        month2 = month2 + 12;
        year2 = year2 - 1;
    }
    var day = day2 - day1;
    var month = month2 - month1;
    var year = year2 - year1;


    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        day = day + 1;
        document.querySelector(".age").innerHTML = "Your Age is " + year + " Years " + month + " Months " + day + " Days.";
    }
    else if (day1 == day2 && month1 == month2) {
        alert("Happy Birthday");
        document.querySelector(".age").innerHTML = "Your Age is " + year + " Years " + month + " Months " + day + " Days.";
    }
    else {
        document.querySelector(".age").innerHTML = "Your Age is " + year + " Years " + month + " Months " + day + " Days.";
    }
}














