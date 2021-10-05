// HEADER
// set the current date and time in the jumbotron
var currentDay = moment().format("dddd, MMMM Do");

// display current date and time in the jumbotron
$("#currentDay").text(currentDay);


// MAIN SCHEDULER

// function to check what time-block we are in:
// past, present, future
function updateTime() {
    var currentTime = moment().hours();

$('.time-block').each(function () {
    var hourTime = parseInt($(this).attr('id').split('-'[1]));

    if(hourTime < currentTime) { // if timeblock is not the current time, then the color will show as past.
        $(this).addClass('past');
    } else if (hourTime === currentTime) { // if timeblock is current time, then the color will show as present.
        $(this).removeClass('past');
        $(this).addClass('present');
    } else {
        $(this).removeClass('past'); // if timeblock has not happened yet, then the color will show as future.
        $(this).removeClass('present');
        $(this).addClass('future');
    }
});
}

updateTime();

 

