$(document).ready(function () {
    // display today's date
    let todayDate = dayjs().format("dddd, MMM D YYYY  h:mm A"); //
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
      let timeNow = dayjs().hour("H");
  
      // loop over time blocks
      $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);
  
        // To check the time and add the classes for background indicators
        if (blockTime < timeNow) {
          $(this).removeClass("future");
          $(this).removeClass("present");
          $(this).addClass("past");
        } else if (blockTime === timeNow) {
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
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    $("#hour-20 .description").val(localStorage.getItem("hour-20"));
  
    timeTracker();
  });