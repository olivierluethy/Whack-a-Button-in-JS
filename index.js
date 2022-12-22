document.addEventListener('DOMContentLoaded', function() {
  // Initialize audio element for alarm sound
  const alarm = new Audio('tick.mp3');

  // Initialize countdown timer and points variables
  let timer = 1000;
  let points = 0;

  // When the webpage is fully loaded, run this function
  window.onload = function() {
    // Hide gameover and button elements initially
    document.getElementById('gameover').style.display = 'none';
    document.getElementById('button').style.display = 'none';

    let countdown = 10;

    // Set interval to run every 1 second (1000 milliseconds)
    let stop = setInterval(function() {
      // If the countdown is less than or equal to 0
      if (countdown <= 0) {
        console.log(countdown);
        console.log('Finished!');
        // Clear the interval and hide the button element
        clearInterval(stop);
        document.getElementById('gameover').style.display = 'block';
        document.getElementById('button').style.display = 'none';
        // Display the total points scored
        document.getElementById('gameover-points').innerHTML = points;
        // Change the background color and hide the stopwatch element
        document.querySelector('body').style.backgroundColor = 'black';
        document.getElementById('stopwatch').style.display = 'none';
      }
      // If the countdown is greater than 0
      else if (countdown > 0) {
        console.log(countdown);
        // Display the countdown on the stopwatch element
        document.querySelector('#stopwatch').innerHTML = countdown;
        // Hide the gameover element and show the button element
        document.getElementById('gameover').style.display = 'none';
        document.getElementById('button').style.display = 'block';

        // If the countdown is 3 seconds, change the stopwatch color to lightcoral
        if (countdown === 3) {
          document.getElementById('stopwatch').style.color = 'lightcoral';
        }
        // If the countdown is 1 second, change the stopwatch color to red
        else if (countdown === 1) {
          document.getElementById('stopwatch').style.color = 'red';
        }
        // Decrement the countdown
        countdown--;
      }
    }, timer);
  };

  // If the button is clicked
  button.addEventListener('click', function() {
    // Play the alarm sound
    alarm.play();
    // After 1 millisecond, change the position of the button element
    setTimeout(function() {
      button.style.left = Math.floor(Math.random() * 90) + '%';
      button.style.top = Math.floor(Math.random() * 90) + '%';
    }, 1);
    // Increment the points
    points++;
  });
});