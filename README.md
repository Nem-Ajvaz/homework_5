# homework_3

## Installation

To clone and run this project, please make sure you have git installed.

run `git clone https://github.com/Nem-Ajvaz/homework_5.git`

## Introduction

The purpose of this project was to build a simple calendar app for scheduling your working day.

The acceptance criteria is listed below:

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

## Images

Home

When the page is first loaded there is nothing in local storage
![Home Page without anything store in local storage](/asset/images/screenshots/clearHomePage.png)

Upon entering and saving the data, a key pair appeared in the local storage as shown below.
![Populated Local Storage Test 1](/asset/images/screenshots/testOneData.png)

Erasing the entered data and saving it emptied the string in local storage but the key remained.
![Removing text from Local Storage](/asset/images/screenshots/testOneDataEmpty.png)

## Issues faced

It took me a little bit of time to understand how the moment api works.

## Lisence

MIT
