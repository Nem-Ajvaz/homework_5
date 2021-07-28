# homework_5

## Installation

To clone and run this project, please make sure you have git installed.

run `git clone https://github.com/Nem-Ajvaz/homework_5.git`

## Introduction

The purpose of this project was to build a simple calendar app for scheduling your working day.

The acceptance criteria is listed below:

GIVEN I am using a daily planner to create a schedule <br />
WHEN I open the planner <br />
THEN the current day is displayed at the top of the calendar <br />
WHEN I scroll down <br />
THEN I am presented with timeblocks for standard business hours <br />
WHEN I view the timeblocks for that day <br />
THEN each timeblock is color coded to indicate whether it is in the past, present, or future <br />
WHEN I click into a timeblock <br />
THEN I can enter an event <br />
WHEN I click the save button for that timeblock <br />
THEN the text for that event is saved in local storage <br />
WHEN I refresh the page <br />
THEN the saved events persist <br />

## Images

Home

When the page is first loaded there is nothing in local storage.
Please note the different colors indicating past, present and future times.
![Home Page without anything store in local storage](/asset/images/screenshots/clearHomePage.png)

Upon entering and saving the data, a key pair appeared in the local storage as shown below.
![Populated Local Storage Test 1](/asset/images/screenshots/testOneData.png)

Erasing the entered data and saving it emptied the string in local storage but the key remained.
![Removing text from Local Storage](/asset/images/screenshots/testOneDataEmpty.png)

## Issues faced

It took me a little bit of time to understand how the moment api works.

## Lisence

MIT
