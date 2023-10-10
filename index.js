// Code your solution in this file!

const hq = 42;
const block = 264;

function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - hq);
}

function distanceFromHqInFeet(someValue) {
    return (Math.abs(someValue - hq) * block);
}

function distanceTravelledInFeet(start, destination) {
    return (Math.abs(start - destination) * block);
}

function calculatesFarePrice(start, destination) {
    let distance  = (Math.abs(start - destination) * block);
    let free = 0;
    let charge = .02;
    let flatRate = 25;
    if (distance <= 400) {
        return free;
    } else if (distance >= 400 && distance <= 2000) {
        return (distance - 400) * charge;
    } else if (distance >= 2000 && distance <= 2500) {
        return flatRate;
    } else {
        return `cannot travel that far`;
    }

}