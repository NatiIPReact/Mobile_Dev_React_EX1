// Stores all the countries that the user has inserted
Countries = [];
// The clock class
class Clock {
    // Builds the object with the properties we need
    constructor(hours, minutes, seconds, countryName) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.countryName = countryName;
    }
    // Converts the time to seconds
    ConverToSeconds() {
        return this.hours * 3600 + this.minutes * 60 + this.seconds;
    }
    // Returns the time as the following format: hh:mm:ss
    Show() {
        let h = String(this.hours).padStart(2, '0');
        let m = String(this.minutes).padStart(2, '0');
        let s = String(this.seconds).padStart(2, '0');
        return `${h}:${m}:${s}`;
    }
}

// This function defines what happens when the user submits the InsertCountry form.
function submitCountryForm() {
    document.getElementById('InsertCountry').onsubmit = (e) => {
        e.preventDefault();
        submitCountry();
    };
}

// inserts the new country to the array when the user submits the InsertCountry form.
function submitCountry() {
    let hours = parseInt(document.getElementById('Hours').value);
    let minutes = parseInt(document.getElementById('Minutes').value);
    let seconds = parseInt(document.getElementById('Seconds').value);
    let name = document.getElementById('CountryName').value;
    Countries.push(new Clock(hours, minutes, seconds, name));
    if (Countries.length >= 5) {
        ShowCountries();
    }
}

// prints all the countries in the array to the screen.
function ShowCountries() {
    let text = ``;
    for (i of Countries) {
        text += `Name: ${i.countryName}<br>Time: ${i.Show()}<br>Time in seconds: ${i.ConverToSeconds()}<br><br>`;
    }
    document.getElementById('CountriesText').innerHTML = text;
}