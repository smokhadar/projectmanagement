var eventsData;
var block;

// sets color of time block based on past, present, or future class
function setHourColors() {
    var now = dayjs();
    for (var i = 9; i < 18; i++) {
  
      if (i < now.hour()) {
        $("#hour-" + i + " textarea").addClass("past");
      } else if (i == now.hour()) {
        $("#hour-" + i + " textarea").addClass("present");
      } else if (i > now.hour()) {
        $("#hour-" + i + " textarea").addClass("future");
      }
   }
}

// loads existing data from local storage onto browser
function loadStoredData() {
  for (var i=9; i <18; i++) {
    block = document.getElementById('hour-' + i);
    eventsData = JSON.parse(localStorage.getItem("tasks"));
    if (!eventsData) {
    block.children[1].textContent = " "
    eventsData = {
      hour9: "",
      hour10: "",
      hour11: "",
      hour12: "",
      hour13: "",
      hour14: "",
      hour15: "",
      hour16: "",
      hour17: "",
    }} 
  }
};
  
function handleSaveClick(event) {
  // grab data from HTML
  var hourBlock = $(event.target).parent();
  var value = hourBlock.children("textarea").val();
  var hour = hourBlock.attr("id").split("-")[1];
  console.log("hour",hour);

// modify data object
  eventsData["hour" + hour] = value;

  // store this hours data in local storage
  localStorage.setItem("tasks", JSON.stringify(eventsData));
}

$(".saveBtn").on("click", handleSaveClick);


// Wrap all code that interacts with the DOM in a call to jQuery
$(function() {
  loadStoredData();
  setHourColors();
  // update colors hourly as time updates
})

  // TODO: Add code to display the current date in the header of the page.
