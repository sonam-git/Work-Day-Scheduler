# Work-Day-Scheduler
The main purpose of this project is create a simple calender application that allows a user to save events for each hour of the day.
# Description
This project invites you to use the knowledge you learned about third party api such as jQuery & day.js libraries. This app will run in 
the browser and feature dynamically updated HTML and CSS powered by jQuery.
## User Story
* AS AN employee with a busy schedule
* I WANT to add important events to a daily planner
* SO THAT I can manage my time effectively
## Acceptance Criteria
* GIVEN I am using a daily planner to create a schedule
* WHEN I open the planner
* THEN the current day is displayed at the top of the calendar
* WHEN I scroll down
* THEN I am presented with time blocks for standard business hours
* WHEN I view the time blocks for that day
* THEN each time block is color-coded to indicate whether it is in the past, present, or future
* WHEN I click into a time block
* THEN I can enter an event
* WHEN I click the save button for that time block
* THEN the text for that event is saved in local storage
* WHEN I refresh the page
* THEN the saved events persist
# Motivation
This motivates you to showcase the skills and knowledge you learned such as how to use third party APIs such as bootstrap, jQuery and day.js
in your project, which basically helps the developer to reduce their time to build any application. It also gives you an oppertunity to understand 
& learn more about third party API mentioned above.
# Technologies Used
* HTML
* CSS
* JavaScript
* JQuery
* Day.js
* Bootstap
# Build Status
We are already given a starter code,so that I didn't do that much except doing some addition of elements in HTML and styling in CSS. I spend most of 
the time working on the script.js file writing code in jQuery format in associate with the day.js library.

# code Style

## HTML
* Linked all the required CDN of different third party API used in this project within head & bottom of body section.
* Linked CSS file in the head section.
* Header section includes h1 and P elements and the clear field buttons.
* Section includes one message display div and 9 divs with same class and input text area, but different id for different hour ( 9 am - 5 pm )

## CSS
* Added pseudo class hover added to the all the buttons in order to make it user friendly.
* Responsive in smaller screen.
* Added reset.css file.
* Added border radius to the boxes and buttons for better UI/UX

## JavaScript / JQuery
* Wrapped the entire code within the $(document).ready (function(){})
* Decleared variables as needed
* Display today's date function on the top 
* Added clear button event function to clear the item saved in the local storage by one click
* Added save button as click listenenr to show message once the item saved in the local storage.
* Created function called timeTracker to get current number of hours and loop over the time blocks to display the different CSS added box for 
  past, present & future hours, where parseInt() function has been applied to parse a string argument.
* Get item from local storge using getItem() method

# Screenshots
### Desktop View
![Screenshot 2023-03-12 at 4 36 54 PM](https://user-images.githubusercontent.com/89502092/224580939-fbb2148e-022f-41d0-acef-2e89b08c8445.png)


### Responsive View
![Screenshot 2023-03-12 at 4 33 23 PM](https://user-images.githubusercontent.com/89502092/224580775-745108c7-dc80-4eb5-9fa2-7006859ccc01.png)

# Github URL:
https://github.com/sonam-git/work-day-scheduler/
# Deployed Live URL:
https://sonam-git.github.io/work-day-scheduler/
# License
N/A

