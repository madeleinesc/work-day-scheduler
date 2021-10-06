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


// storing and retrieving user input events



// to retrieve saved event data from local storage
// use JSON, parse, signitify to store and retrieve

// click event 
// data attr .data?
// in local storage make a separete thing for every hour block (to do)


$('.saveBtn').on("click", function () {
    localStorage.setItem("9:00am", ($scheduler.val()))
    localStorage.setItem("10:00am", ($scheduler.val()))
    localStorage.setItem("11:00am", ($scheduler.val()))
    localStorage.setItem("12:00pm", ($scheduler.val()))
    localStorage.setItem("1:00pm", ($scheduler.val()))
    localStorage.setItem("2:00pm", ($scheduler.val()))
    localStorage.setItem("3:00pm", ($scheduler.val()))
    localStorage.setItem("4:00pm", ($scheduler.val()))
    localStorage.setItem("5:00pm", ($scheduler.val()))
})

$("#scheduler").append(localStorage.getItem("9:00am"));
$("#scheduler").append(localStorage.getItem("10:00am"));
$("#scheduler").append(localStorage.getItem("11:00am"));
$("#scheduler").append(localStorage.getItem("12:00pm"));
$("#scheduler").append(localStorage.getItem("1:00pm"));
$("#scheduler").append(localStorage.getItem("2:00pm"));
$("#scheduler").append(localStorage.getItem("3:00pm"));
$("#scheduler").append(localStorage.getItem("4:00pm"));
$("#scheduler").append(localStorage.getItem("5:00pm"));


