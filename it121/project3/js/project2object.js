/*
Project 2 by Gina Noel
May 1, 2021
 */

// create a new sunrise object
function Sunrise(name = "Default name", totalSunrises = 365, watched, missed, cloudySunrise, clearSunrise, partiallyCloudy) {
    this.name = name;
    this.totalSunrises = totalSunrises;
    this.watched = watched;
    this.missed = missed;
    this.cloudySunrise = cloudySunrise;
    this.clearSunrise = clearSunrise;
    this.partiallyCloudy = partiallyCloudy;

    // 2 methods for the sunrise object to calculate
    this.bestWatchedSunrises = function () {
        return this.clearSunrise + this.partiallyCloudy;
    };
    this.worstWatchedSunrises = function () {
        return this.cloudySunrise;
    }
}

// Create 2 new instances of the sunrise object used to display the data
var bestWatchedSunriseYear = new Sunrise("Red Morning Delight", undefined, 265, 100, 75, 150, 40);
var worstWatchedSunriseYear = new Sunrise("", undefined, 265, 100, 175, 50, 40);

// displaying yearly sunrise data
var elName = document.getElementById('sunrise1');
elName.textContent = "Marigold's best watched sunrise was named " + bestWatchedSunriseYear.name;
var elName = document.getElementById('sunrise2');
elName.textContent = "That year there were " + bestWatchedSunriseYear.watched + " best watched sunrises out of " + bestWatchedSunriseYear.totalSunrises;
var elRooms = document.getElementById('sunrise3');
elRooms.textContent = "The best watched sunrises totalled: " + bestWatchedSunriseYear.bestWatchedSunrises();
var elRooms = document.getElementById('sunrise4');
elRooms.textContent = "There were " + bestWatchedSunriseYear.clearSunrise + " clear morning sunrises. But the " + bestWatchedSunriseYear.partiallyCloudy + " partially cloudy sunrises were AMAZING!! ";

var elRooms = document.getElementById('sunrise5');
elRooms.textContent = "The year with the worst watched sunrises totalled: " + worstWatchedSunriseYear.worstWatchedSunrises() + ". I should have stayed in bed more that year!!"
