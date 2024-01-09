initNum = null;

class Counter {
    constructor() {
        this.num = 0;
    }
    Initialize(num) {
        this.num = num;
    }
    Increment() {
        this.num++;
    }
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

function Increment() {
    if (initNum == null) {
        alert("Initialize a number first!");
        return;
    }
    initNum.Increment();
}

function Go() {
    if (initNum == null) {
        alert("Initialize a number first!");
        return;
    }
    initNum.Go();
}