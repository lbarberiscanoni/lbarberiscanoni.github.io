$(document).ready(function() {

    var projectList = [
    	["Stanford RUF App", "Mobile App for Stanford's <a href='http://rufstanford.org'>Reformed University Fellowship</a>. It provides a central location for information about meetings, events and so on.", "Written in React and powered by Apache Cordova", "https://github.com/lbarberiscanoni/stanford-ruf", "#"],
    	["Booking Tracker", "Web App that helps <a href='http://rentashare.com'>Rentashare</a> and its house managers keep track of bookings across different properties.", "Written in jQuery with FullCalendar.js", "https://github.com/lbarberiscanoni/booking-tracker", "http://lbarberiscanoni.github.io/booking-tracker/"],
    	["Bill Tracker", "Web App for <a href='http://scyig.com'>the YMCA's Youth in Government program</a> to help conference directors, participants and advisors to track of legislation and schedule schedule changes throughout the course of the conference.", "Written in jQuery with a <a href='https://github.com/jesuscast/Youth-in-Goverment-app'>companion iphone app</a> in Swift", "https://github.com/lbarberiscanoni/billTracking", "http://lbarberiscanoni.github.io/billTracking/"],
    	["Open Speeches", "Web App for Riverside High School's Speech and Debate team to store debaters' speeches so that future students can reuse material to more quickly write their own speeches. AKA a Github for Debate Speeches.", "Originally written by altering Jekyll, but now written in jQuery and Sass", "https://github.com/lbarberiscanoni/OpenSpeeches", "http://lbarberiscanoni.github.io/OpenSpeeches/"],
    	["RHS Team Management", "Web App that helps Riverside High School's Speech and Debate team's coaching stuff coordinate practices, sign up for tournaments and track student performance.", "Written in Python and jQueryUI", "https://github.com/lbarberiscanoni/rhs-team-management", "https://rhs-team-management.firebaseapp.com"],
    	["Small Cap Stock Analyzer", "Web App to parse data from <a href='http://finance.yahoo.com//'>Yahoo Finance</a> and <a href='https://simplywall.st'>Simply Wall Street</a> to find undervalued small cap stocks", "Written in Python and jQuery", "https://github.com/lbarberiscanoni/smallCapAnalyzer", "http://lbarberiscanoni.github.io/smallCapAnalyzer/"],
        ["Stock Flagger", "A script that sends you a text message whenever a stock hits a certain price or moves in a certain way", "Written in Python without using Twilio", "https://github.com/lbarberiscanoni/stockFlagger", "#"],
        ["The Agent of Disruption", "My own blog about finance and tech", "Written in Jekyll", "https://github.com/lbarberiscanoni/TheAgentOfDisruption", "http://lbarberiscanoni.github.io/TheAgentOfDisruption/"],
    ];

    var sectNum = Math.round(projectList.length / 3);
    for (i = 0; i < sectNum; i++) {
        $("#projects").append("<div class='columns'></div>");
        for (a = 3 * i; a <= 3 * i + 2; a++) {
            console.log(a);
            console.log(projectList);
            console.log(projectList[5]);
            var thisProject = projectList[a];
            $("#projects .columns:last").append("<div class='column'><div class='card is-fullwidth'><header class='card-header'><p class='card-header-title'>" + thisProject[0] + "</p></header><div class='card-content'><div class='content'><p>" + thisProject[1] + "</p><p>" + thisProject[2] + "</p></div></div><footer class='card-footer'><a href='" + thisProject[3] + "' target='blank' class='card-footer-item'><img src='images/github.png' alt='github icon' class='image is-48x48'></img></a><a href='" + thisProject[4] + "' target='blank' class='card-footer-item'><img src='images/web.png' alt='web icon' class='image is-48x48'></img></a></footer></div></div>");
        };
    };
});
