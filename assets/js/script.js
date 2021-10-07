// HEADER
// set the current date and time in the jumbotron
var currentDay = moment().format("dddd, MMMM Do");

// display current date and time in the jumbotron
$("#currentDay").text(currentDay);


// MAIN SCHEDULER
// function to retrieve stored previous user inputs 
function storedText () {
    for (var i = 9; i <= 17; i++) { // i for time-blocks in 24h time(#id)
        $("#" + i).val(localStorage.getItem(i));
    }
}
// call function
storedText();

// function to check what time-block we are in:
// past, present, future
function updateTime() {
    var currentTime = moment().hours();

    // scheduler: user input area
    $('.scheduler').each(function () {
        var hourTime = parseInt($(this).attr('id'));

        if (hourTime < currentTime) { // if timeblock is not the current time, then the color will show as pale pink representing past.
            $(this).addClass('past');
        } else if (hourTime === currentTime) { // if timeblock is current time, then the color will show as mid pink to show present.
            $(this).removeClass('past');
            $(this).addClass('present');
        } else { // if timeblock has not happened yet, then the color will show darker pink to show the future.
            $(this).removeClass('past'); 
            $(this).removeClass('present');
            $(this).addClass('future');

            console.log(hourTime)
            console.log(currentTime)
        }
    });
}
// call function
updateTime();


// save button function 
$('.saveBtn').on("click", function () {
    var time = $(this).siblings(".scheduler").attr("id");
    var text = $(this).siblings(".scheduler").val();
    console.log(time, text)
    // storing user input
    localStorage.setItem(time, text);
});




