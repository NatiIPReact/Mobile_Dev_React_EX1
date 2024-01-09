class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    Show(x, y) {
        /*
        let showText = ``;
        if (document.getElementById('showT') == undefined)
            showText += `<p id="showT">`;
        showText += `(${this.x},${this.y})`;
        if (document.getElementById('showT') == undefined) {
            showText += `</p>`;
            document.body.innerHTML += showText;
        } else {
            document.getElementById('showT').innerHTML = showText;
        } */
        return `(${this.x},${this.y})`;
    }
    Equals(p) {
        return this.x === p.x && this.y === p.y;
    }
}

function ValuesExistsInArray(pointsArray, x, y) {
    for (i of pointsArray) {
        if (i.x === x && i.y === y)
            return true;
    }
    return false;
}
// Examples ValuesExistsInArray:
points = [new Point(1.2, 5), new Point(1, 8.9)];
console.log(ValuesExistsInArray(points, 1, 8.9)); // returns true
console.log(ValuesExistsInArray(points, 12, 10)); // returns false

function PointExistsInArray(pointsArray, p) {
    for (i of pointsArray) {
        if (i.Equals(p))
            return true;
    }
    return false;
}
// Examples PointExistsInArray:
points2 = [new Point(1.2, 5), new Point(1, 8.9)];
p2 = new Point(1.2, 5);
p3 = new Point(50, 1.5);
console.log(PointExistsInArray(points2, p2)); // returns true
console.log(PointExistsInArray(points2, p3)); // returns false

function getLentghOfPath(pointsArray) {
    if (pointsArray.length === 0 || pointsArray.length === 1)
        return 0;
    let sum = 0;
    for (let i = 0; i < pointsArray.length - 1; i++) {
        sum += Math.sqrt(Math.pow(pointsArray[i].x - pointsArray[i + 1].x, 2) + Math.pow(pointsArray[i].y - pointsArray[i + 1].y, 2));
    }
    return sum;
}
// Example of getLentghOfPath
function getLentghOfPathExample() {
    points3 = [new Point(1, 5), new Point(10, 2.5), new Point(1, 1), new Point(3, 2)];
    let len = getLentghOfPath(points3);
    let t = `<p id="PathLengthExample">`;
    for (i of points3) {
        t += i.Show();
        t += `<br>`;
    }
    t += `Path length: ${len}</p>`;
    document.body.innerHTML += t;
}