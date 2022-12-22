# Whack a button
This is a basic whack a button game developed using HTML, CSS and JavaScript.
It can run on desktop devices, laptops, tablets and of curse also on mobile phones.

## Getting started
Clone the repository from gitea
Use the command line interface for cloning.
```
git clone http://192.168.100.57:3000/Olivier_Luethy/Whack-a-Button-in-JS.git
```
## What is inside?
The cloned folder contains the following files:
 - index.html
 - index.js
 - style.css

## How to run the game?
For running the game you have to do the following steps:
 1. Open the index.html file in your browser and wait about 1 second.
 2. After that you will see right in the middle of the website a timer and a button who is located on the top left corner.
 3. Play the game 😁

## How to play the game (a quick start)
This quick steps will explain you how to play the game if you never have played the game before:
 - You have to click the button as many times as you can
 - For that you have a specific number of time for doing this which is 10 seconds.
 - After you have clicked the button he will change very fast his location and you have to push him again.
 - Everytime when you click the button you get a point.
 - After the timer has expired a "Game-Over-Screen" will apear and will show you how many points you got.
 - Right under the text you will see a button called "Restart".
 - If you click the button then the website will be refresed and you can play the game again!

## How does the code work?
This code adds an event listener to the webpage that listens for the DOMContentLoaded event, which occurs when the webpage has finished loading its HTML content. When this event occurs, the code initializes an audio element that plays an alarm sound when triggered.

The code also initializes a countdown timer and points variable, both set to a default value of 10. When the webpage finishes loading, the code sets an interval to run every 1 second (1000 milliseconds). Within this interval, the code checks if the countdown timer is less than or equal to 0. If it is, the code clears the interval, displays a gameover element, hides the button element, displays the total points scored, changes the background color, and hides the stopwatch element. If the countdown timer is greater than 0, the code displays the countdown timer on the stopwatch element, hides the gameover element, and shows the button element. If the countdown timer is 3 seconds, the stopwatch color is changed to lightcoral. If the countdown timer is 1 second, the stopwatch color is changed to red. The countdown timer is then decremented by 1.

The code also adds an event listener to the button element that listens for a click event. When the button is clicked, the code plays the alarm sound and changes the position of the button element after a delay of 1 millisecond. The points variable is then incremented by 1.

## How to edit the code?
Open the folder in Visual Studio Code or any other code editor and make changes as needed, save the changes and run the index.html file again.

> Have fun!
