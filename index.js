// Code your solution in this file!
const returnFirstTwoDrivers = function() {
    const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function() {
    const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
    return drivers.slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(int) { 
    return function fareMultiplier(fare) {
        return fare * int;
    }
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(arrayOfDrivers, driversFunction) {
    return driversFunction();
}
selectDifferentDrivers(drivers, returnFirstTwoDrivers);





 



