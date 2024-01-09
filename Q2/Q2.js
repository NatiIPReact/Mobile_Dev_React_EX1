InitDuck = null;
class Duck {
    constructor(name, color, age, weight, image) {
        this.name = name;
        this.color = color;
        this.age = age;
        this.weight = weight;
        this.image = image;
    }
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
    Quack() {
        let duckProperties = ``;
        if (document.getElementById('duckText') == undefined)
            duckProperties = `<p id="duckText">`;
        let numOfTimes = parseInt(this.weight * this.age / 2);
        for (let i = 0; i < numOfTimes; i++)
            duckProperties += `Quack<br>`;
        var audio = new Audio('quackSound.mp3');
        audio.play();
        if (document.getElementById('duckText') == undefined) {
            duckProperties += `</p>`;
            document.body.innerHTML += duckProperties;
        }
        else document.getElementById('duckText').innerHTML = duckProperties;
    }
}

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

function Quack() {
    InitDuck.Quack();
}

function Show() {
    InitDuck.Show();
}

function duckFormSubmit() {
    document.getElementById('DuckForm').addEventListener('submit', function (event) {
        event.preventDefault();
        BuildDuckObject();
    });
}