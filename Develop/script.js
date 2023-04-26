
var eventsData;

// debug below function


// TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? How can Day.js be used to get the current hour in 24-hour time?
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


// TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. HINT: How can the id attribute of each time-block be used to do this?
function loadStoredData() {
  eventsData = JSON.parse(localStorage.getItem("calendarEvents"));
  if (!eventsData) {
    eventsData = {
      hour9: "",
      hour10: "",
      hour11: "",
      hour12: "",
      hour1: "",
      hour2: "",
      hour3: "",
      hour4: "",
      hour5: "",
    }
  }
  // TODO load existing data from local storage
  const keys = Object.keys(eventsData);
  console.log("keys", keys);
  console.log("values", Object.values(eventsData));

  // var hourDivs = $(".time-block");
  // console.log("hourDivs", hourDivs);
  // var hourDivsID = hourDivs.attri("id").split("-")[1];
  // console.log("hourDivsID", hourDivsID);

  // for (i = 0, i < hourDivs.length; i++;) {
  //     $("#hour-" + [i])
  // }
}

 // TODO: Add a listener for click events on the save button. This code should  use the id in the containing time-block as a key to save the user input in local storage. 
//  HINT: What does `this` reference in the click listener function? How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? How might the id be useful when saving the description in local storage?
  
function handleSaveClick(event) {
  // grab data from HTML
  var hourBlock = $(event.target).parent();
  var value = hourBlock.children("textarea").val();
  var hour = hourBlock.attr("id").split("-")[1];
  console.log("hour",hour);

// modify our data object
  eventsData["hour" + hour] = value;

  // store this hours data in local storage
  localStorage.setItem("calendarEvents", JSON.stringify(eventsData));
}

$(".saveBtn").on("click", handleSaveClick);


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.
$(function() {
  loadStoredData();
  setHourColors();
  // update colors hourly as time updates
})


  // TODO: Add code to display the current date in the header of the page.
