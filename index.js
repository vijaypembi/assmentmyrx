function squareAndSort(array) {
    let right = array.length - 1;
    let left = 0;

    let result = [];
    let index = array.length - 1;
    while (left <= right) {
        let leftSquare = array[left] ** 2;
        let rightSquare = array[right] ** 2;

        if (rightSquare < leftSquare) {
            result[index] = leftSquare;
            left++;
        } else {
            result[index] = rightSquare;
            right--;
        }
        index--;
    }

    return result;
}
const arr = [-12, -8, -7, -5, 2, 4, 5, 11, 15];
console.log(squareAndSort(arr));

class ImmutiablePersion {
    constructor(name, id, dateOfJoining, addresses) {
        (this.name = name),
            (this.id = id),
            (this.dateOfJoining = dateOfJoining);
        this.addresses = addresses.map((each) => ({ ...each }));

        Object.freeze(this);
        Object.freeze(this.addresses);
    }
}
const person = new ImmutiablePersion("praveen", "125326", "2025-01-17", [
    { city: "New York" },
    { city: "London" },
]);
console.log(person);

function sortBalls(arr) {
    let low = 0,
        mid = 0,
        high = arr.length - 1;

    while (mid <= high) {
        if (arr[mid] === "B") {
            [arr[low], arr[mid]] = [arr[mid], arr[low]];

            low++;
            mid++;
        } else if (arr[mid] === "G") {
            mid++;
        } else {
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }
    return arr;
}

console.log(sortBalls(["R", "G", "B", "G", "G", "R", "B", "B", "G"]));

function minPlatforms(arrivals, departures) {
    arrivals.sort((a, b) => a - b);
    departures.sort((a, b) => a - b);

    let i = 0,
        j = 0;
    let platforms = 0;
    let maxPlatforms = 0;

    while (i < arrivals.length && j < departures.length) {
        if (arrivals[i] <= departures[j]) {
            platforms++;
            maxPlatforms = Math.max(maxPlatforms, platforms);
            i++;
        } else {
            platforms--;
            j++;
        }
    }
    return maxPlatforms;
}

// Example usage:
// Convert times to numbers (e.g., 9:00 becomes 900) for simplicity.
const arrivalTimes = [900, 940, 950, 1100, 1500, 1800];
const departureTimes = [910, 1120, 1130, 1200, 1900, 2000];
console.log(minPlatforms(arrivalTimes, departureTimes));
// Expected output: 3

function sortMapByValue(map) {
    const entries = Object.entries(map);

    entries.sort((a, b) => {
        return a[1].localeCompare(b[1]);
    });

    return Object.fromEntries(entries);
}

// Example usage:
const map = {
    101: "John Doe",
    102: "Jane Smith",
    103: "Peter Johnson",
};
console.log(sortMapByValue(map));
// {102: 'Jane Smith', 101: 'John Doe', 103: 'Peter Johnson'}