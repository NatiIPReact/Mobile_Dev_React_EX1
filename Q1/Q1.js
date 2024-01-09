// Stores the counter number that the user inserts
initNum = null;

// The Counter class
class Counter {
    // Initializes the counter with the user's input
    Initialize(num) {
        this.num = num;
    }
    // Increments the counter by 1
    Increment() {
        this.num++;
    }
    // Prints to the screen all the numbers from zero to the counter
    Go() {
        let text = ``;
        if (document.getElementById('goText') == undefined)
            text = '<p id="goText">';
        for (let i = 0; i < this.num; i++) {
            text += i;
            text += ', ';
        }
        text += this.num;
        if (document.getElementById('goText') == undefined) {
            text += '</p>';
            document.body.innerHTML += text;
        } else {
            document.getElementById('goText').innerHTML = text;
        }            
    }
}

// Called when the user initializes a number
function Init() {
    let n = parseInt(document.getElementById('numValue').value);
    if (isNaN(n)) {
        alert("Insert a number first!");
        return;
    }
    initNum = new Counter();
    initNum.Initialize(n);
    document.getElementById('numValue').value = "";
}

// Called when the user clicks the + button
function Increment() {
    if (initNum == null) {
        alert("Initialize a number first!");
        return;
    }
    initNum.Increment();
}

// Called when the user clicks the Go button to print using the Go function of the Counter class
function Go() {
    if (initNum == null) {
        alert("Initialize a number first!");
        return;
    }
    initNum.Go();
}