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
   var time = $(this).siblings(".scheduler").attr("id");
   var text = $(this).siblings(".scheduler").val();
   console.log(time, text)
   localStorage.setItem(time, text);
});




