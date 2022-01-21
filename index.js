document.addEventListener('DOMContentLoaded', function () {
    let alarm = new Audio('tick.mp3');

    var timer = 1000;
    var points = 0;

    // Sobald die Webseite vollständig geladen wurde, führt es das aus
    window.onload = function () {

        document.getElementById('gameover').style.display = "none";
        document.getElementById('button').style.display = "none";

        var countdown = 10;

        var stop = setInterval(function () {

            // Ist der Countdown kleiner oder gleich 0?
            if (countdown == 0) {

                console.log(countdown);
                console.log("Fertig!");
                clearInterval(stop);
                document.getElementById('gameover').style.display = "block";
                document.getElementById('button').style.display = "none";
                document.getElementById('gameover-points').innerHTML = points;
                document.querySelector('body').style.backgroundColor = "black";
                document.getElementById('stopwatch').style.display = "none";

            } else if (countdown > 0) { // Ist der Countdown grösser als 0?

                console.log(countdown);
                document.querySelector('#stopwatch').innerHTML = countdown;
                document.getElementById('gameover').style.display = "none";
                document.getElementById('button').style.display = "block";

                if (countdown == 3) {
                    document.getElementById('stopwatch').style.color = "lightcoral";
                } else if (countdown == 1) {
                    document.getElementById('stopwatch').style.color = "red";
                }
                countdown--;
            }
        }, timer)
    };

    // Falls der Button geklickt wird
    button.addEventListener('click', function () {
        alarm.play();
        setTimeout(function () {
            button.style.left = Math.floor(Math.random() * 90) + "%"
            button.style.top = Math.floor(Math.random() * 90) + "%"
        }, 1)
        points++;
    })
});