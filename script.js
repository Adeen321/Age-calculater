function calculateAge() {
    var birthdate = new Date(document.getElementById('birthdate').value);
    var today = new Date();
    
    // Calculate the difference in years, months, and days
    var diffYears = today.getFullYear() - birthdate.getFullYear();
    var diffMonths = today.getMonth() - birthdate.getMonth();
    var diffDays = today.getDate() - birthdate.getDate();

    // Adjust months and years if necessary
    if (diffDays < 0) {
        diffMonths--;
    }

    if (diffMonths < 0) {
        diffYears--;
        diffMonths += 12;
    }

    // Calculate total days, weeks, hours, minutes, and seconds
    var totalDays = Math.floor((today - birthdate) / (1000 * 60 * 60 * 24));
    var totalWeeks = Math.floor(totalDays / 7);
    var totalHours = Math.floor((today - birthdate) / (1000 * 60 * 60));
    var totalMinutes = Math.floor((today - birthdate) / (1000 * 60));
    var totalSeconds = Math.floor((today - birthdate) / 1000);

    // Update the result paragraph
    document.getElementById('result').innerHTML = "Total years lived: " + diffYears + " years, " + 
                                                    "<br>"+"Total months lived: " + diffMonths + " months, " + 
                                                    "<br>"+"Total days lived: " + totalDays + " days, " +
                                                    "<br>"+"Total weeks lived: " + totalWeeks + " weeks, " +
                                                    "<br>"+"Total hours lived: " + totalHours + " hours, " +
                                                    "<br>"+"Total minutes lived: " + totalMinutes + " minutes, " +
                                                    "<br>"+"Total seconds lived: " + totalSeconds + " seconds.";
}


// Get references to the buttons
var lightOnButton = document.getElementById('lightOnButton');
var lightOffButton = document.getElementById('lightOffButton');
var lightButt = document.getElementById('lightButt');
var lightAButt = document.getElementById('lightAButt');
var lightBBut = document.getElementById('lightBBut');


// Add event listeners to the buttons
lightOnButton.addEventListener('click', function() {
    document.body.style.backgroundColor = 'white'
});

lightOffButton.addEventListener('click', function() {
    document.body.style.backgroundColor = 'gray';
});
lightButt.addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightBlue'
});

lightAButt.addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightgreen';
});
lightBBut.addEventListener('click', function() {
    document.body.style.backgroundColor = 'palegoldenrod';
});


// Get references to the buttons
var lightOnButton = document.getElementById('lightOnButton');
var lightOffButton = document.getElementById('lightOffButton');
var lightButt = document.getElementById('lightButt');
var lightAButt = document.getElementById('lightAButt');
var lightBBut = document.getElementById('lightBBut');


// Add event listeners to the buttons
lightOnButton.addEventListener('click', function() {
    document.body.style.backgroundColor = 'white'
});

lightOffButton.addEventListener('click', function() {
    document.body.style.backgroundColor = 'gray';
});
lightButt.addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightBlue'
});

lightAButt.addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightgreen';
});
lightBBut.addEventListener('click', function() {
    document.body.style.backgroundColor = 'palegoldenrod';
});
