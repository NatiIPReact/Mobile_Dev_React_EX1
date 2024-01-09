// The Point class
class Point {
    // Builds the point object with x and y
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    // Returns a string that shows the properties of point as the following format: (x,y)
    Show(x, y) {
        return `(${this.x},${this.y})`;
    }
    // Gets another point and returns true if both of the points are equal
    Equals(p) {
        return this.x === p.x && this.y === p.y;
    }
}

// Checks whether there exists a point with the x and y that we got here as an input
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

// Checks whether there exists a point that equals to the point input p in the array
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

// Returns the length of the path of all points of the array.
function getLentghOfPath(pointsArray) {
    // If there are less than one point, then there's no path and we should return 0.
    if (pointsArray.length <= 1)
        return 0;
    let sum = 0;
    for (let i = 0; i < pointsArray.length - 1; i++) {
        sum += Math.sqrt(Math.pow(pointsArray[i].x - pointsArray[i + 1].x, 2) + Math.pow(pointsArray[i].y - pointsArray[i + 1].y, 2));
    }
    return sum;
}
// Example of getLentghOfPath with 4 points
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