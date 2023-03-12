// A $( document ).ready() block.
$(document).ready(function () {
  // display today's date
  let todayDate = dayjs().format("dddd, MMM D YYYY  h:mmA"); //
  $("#currentDay").html(todayDate).attr("style", "font-weight: bold;");

  // Button function to clear local storage and clear contents
  $("#clearFieldsBtn").click(function (event) {
    event.preventDefault;
    $("textarea").val("");
    localStorage.clear();
  });
  // saveBtn click listener
  $(".saveBtn").on("click", function () {
    // display message showing the item has been saved.
    $("#msg")
      .text("TODO item has been saved.")
      .attr(
        "style",
        "font-size: 20px; background-color: #77dd77; padding:5px; border-radius: 10px;padding:5px; border: 2px solid black; "
      )
      .show()
      .delay(2000)
      .fadeOut();

    // Get nearby values of the description in JQuery
    let text = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");

    // Save text in local storage
    localStorage.setItem(time, text);
  });

  function timeTracker() {
    //get current number of hours.
    let timeNow = dayjs().format("HH");
    console.log(timeNow);

    // loop over time blocks
    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").split("hour")[1]);
      console.log(blockTime);

      // To check the time and add the classes for background indicators
      if (blockTime < timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (blockTime == timeNow) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }
  // Get item from local storage if any
  $("#hour09 .description").val(localStorage.getItem("hour09"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));
  // invoke the function timeTracker();
  timeTracker();
});
