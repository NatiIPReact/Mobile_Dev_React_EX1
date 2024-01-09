// Stores the duck that the user inserts
InitDuck = null;
// The Duck class
class Duck {
    // Builds the object with the properties we need
    constructor(name, color, age, weight, image) {
        this.name = name;
        this.color = color;
        this.age = age;
        this.weight = weight;
        this.image = image;
    }
    // Prints the duck's properties to the screen
    Show() {
        let duckProperties = ``;
        if (document.getElementById('duckText') == undefined)
            duckProperties = `<p id="duckText">`;
        duckProperties += `Name: ${this.name}<br>Color: ${this.color}<br>Age: ${this.age}<br>Weight: ${this.weight}<br>Image:<br>`;
        if (document.getElementById('duckText') == undefined) {
            duckProperties += `</p>`;
            document.body.innerHTML += duckProperties;
        }
        else document.getElementById('duckText').innerHTML = duckProperties;
        let img = document.createElement('img');
        img.src = this.image;
        img.style.maxWidth = "40%";
        document.getElementById('duckText').appendChild(img);
    }
    // Prints quack to the screen (weight * age / 2) times and plays the Quack sound three times for the user.
    Quack() {
        let duckProperties = ``;
        if (document.getElementById('duckText') == undefined)
            duckProperties = `<p id="duckText">`;
        let numOfTimes = parseInt(this.weight * this.age / 2);
        for (let i = 0; i < numOfTimes; i++)
            duckProperties += `Quack<br>`;
        var audio = new Audio('quackThree.mp3');
        audio.play();
        if (document.getElementById('duckText') == undefined) {
            duckProperties += `</p>`;
            document.body.innerHTML += duckProperties;
        }
        else document.getElementById('duckText').innerHTML = duckProperties;
    }
}

// Called when the user initializes the duck
function BuildDuckObject() {
    document.getElementById('submitBTN').disabled = true;
    let name = document.getElementById('name').value;
    let color = document.getElementById('color').value;
    let age = parseFloat(document.getElementById('age').value);
    let weight = parseFloat(document.getElementById('weight').value);
    let image = document.getElementById('image');
    let reader = new FileReader();
    reader.onload = (e) => {
        let imageData = e.target.result;
        InitDuck = new Duck(name, color, age, weight, imageData);
        let btns = `<input type="button" value="Quack" onclick="Quack()"><input type="button" value="Show" onclick="Show()">`;
        document.body.innerHTML += btns;
    };
    reader.readAsDataURL(image.files[0]);
}

// Called when the user clicks the Quack button
function Quack() {
    InitDuck.Quack();
}

// Called when the user clicks the Show button to print the duck's properties to the screen
function Show() {
    InitDuck.Show();
}

// Sets the onsubmit logic for the DuckForm.
// Basically, this defines what function will get called when the user submits the DuckForm form.
function duckFormSubmit() {
    document.getElementById('DuckForm').addEventListener('submit', function (event) {
        event.preventDefault();
        BuildDuckObject();
    });
}