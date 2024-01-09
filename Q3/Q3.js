Countries = [];
class Clock {
    constructor(hours, minutes, seconds, countryName) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.countryName = countryName;
    }
    ConverToSeconds() {
        return this.hours * 3600 + this.minutes * 60 + this.seconds;
    }
    Show() {
        let h = String(this.hours).padStart(2, '0');
        let m = String(this.minutes).padStart(2, '0');
        let s = String(this.seconds).padStart(2, '0');
        return `${h}:${m}:${s}`;
    }
}

function submitCountryForm() {
    document.getElementById('InsertCountry').onsubmit = (e) => {
        e.preventDefault();
        submitCountry();
    };
}

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

function ShowCountries() {
    let text = ``;
    for (i of Countries) {
        text += `Name: ${i.countryName}<br>Time: ${i.Show()}<br>Time in seconds: ${i.ConverToSeconds()}<br><br>`;
    }
    document.getElementById('CountriesText').innerHTML = text;
}