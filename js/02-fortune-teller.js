/* eslint-env browser */
//The Fortune Teller (5 points)


function tellFortune(numberChildren, partnerName, geoLocation, jobTitle) {
    "use strict";
    window.document.write("You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partnerName + " with " + numberChildren + " kids. <br>");
}
tellFortune(2, "John", "San Diego", "teacher");
tellFortune(3, "Emmy", "Los Angeles", "doctor");
tellFortune(4, "Paul", "New York", "lawyer");