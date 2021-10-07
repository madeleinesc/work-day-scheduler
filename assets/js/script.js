// HEADER
// set the current date and time in the jumbotron
var currentDay = moment().format("dddd, MMMM Do");

// display current date and time in the jumbotron
$("#currentDay").text(currentDay);

// function to retrieve stored user input 
function storedText () {
    for (vari = 9; i <= 17; i++) {
        $("#" + i).val(localStorage.getItem(i));
    }
}

storedText();

// MAIN SCHEDULER

// function to check what time-block we are in:
// past, present, future
function updateTime() {
    var currentTime = moment().hours();

    // scheduler: user input area
    $('.scheduler').each(function () {
        var hourTime = parseInt($(this).attr('id'));

        if (hourTime < currentTime) { // if timeblock is not the current time, then the color will show as past.
            $(this).addClass('past');
        } else if (hourTime === currentTime) { // if timeblock is current time, then the color will show as present.
            $(this).removeClass('past');
            $(this).addClass('present');
        } else {
            $(this).removeClass('past'); // if timeblock has not happened yet, then the color will show as future.
            $(this).removeClass('present');
            $(this).addClass('future');

            console.log(hourTime)
            console.log(currentTime)
        }
    });
}

updateTime();


// save button function 
$('.saveBtn').on("click", function () {
    var time = $(this).siblings(".scheduler").attr("id");
    var text = $(this).siblings(".scheduler").val();
    console.log(time, text)
    // storing user input
    localStorage.setItem(time, text);
});




