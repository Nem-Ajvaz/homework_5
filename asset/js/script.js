const $contentEle = $("#mainSec");
const $clockDisplay = $("#clockDisplay");

const dayStart = 9;
const dayEnd = 17;

function renderTime() {
  const momentDate = moment();

  $clockDisplay.text(momentDate.format("dddd Do MMMM YYYY -- hh:mm:ss a"));
  setTimeout(renderTime, 1000);
}

const LOCAL_STORAGE_PREPEND_KEY = "dayPlanner:";

// Retrieving Todo from local storage
function getTodoFromLocalStorage(key) {
  return localStorage.getItem(key);
}

// Storing Todo in local storage
function setTodoFromLocalStorage(key, value) {
  localStorage.setItem(LOCAL_STORAGE_PREPEND_KEY + key, value);
}

function renderTable() {
  for (let i = dayStart; i <= dayEnd; i++) {
    const momentNow = moment();
    const momentTimeStamp = moment().set("hour", i);
    const savedValue = getTodoFromLocalStorage(LOCAL_STORAGE_PREPEND_KEY + i);

    // Creating elements
    const $rowEle = $("<div>");
    const $timeEle = $("<p>");
    const $todoEle = $("<input>");
    const $btnEle = $("<button>");
    // Adding classes
    $rowEle.addClass("row");
    $timeEle.addClass("sched-time");
    $todoEle.addClass("todo");
    $todoEle.val(savedValue);
    $btnEle.addClass("save");
    // Appending
    $contentEle.append($rowEle);
    $rowEle.append($timeEle);
    $rowEle.append($todoEle);
    $rowEle.append($btnEle);
    // Assigning time to the todoEle
    $timeEle.text(momentTimeStamp.format("h a"));
    $btnEle.text("Save");
    // Assigning classes based on condition
    if (momentTimeStamp.isBefore(momentNow, "hour")) {
      $timeEle.addClass("past");
      $todoEle.addClass("past");
    } else if (momentTimeStamp.isAfter(momentNow, "hour")) {
      $timeEle.addClass("future");
      $todoEle.addClass("future");
    } else {
      $timeEle.addClass("present");
      $todoEle.addClass("present");
    }
    $btnEle.on("click", function () {
      setTodoFromLocalStorage(i, $todoEle.val());
    });
  }
}

renderTable();
document.body.onload = renderTime;
