const a = 3, b = 5, c = 20, d = 50, e = 10, f = 2019; 

// Task #1
function convert() {
    var convertedArray = [];
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'string') {
            arguments[i] = Number(arguments[i]);
        } else if (typeof arguments[i] === 'number') {
            arguments[i] = arguments[i].toString();
        }
        convertedArray.push(arguments[i]);
    }
return convertedArray;
}
convert(b, '4', c, '5');

// Task #2
function executeforEach(array, callback) {
    for (var i = 0; i < array.length; i++) {
         callback(array[i]);
    }
}
executeforEach([1, c], function(el) { 
    console.log(el * c); 
}); 


// Task #3
function mapArray(array, callback) {
    var transformedArray = [];
    executeforEach(array, function(el) {
    transformedArray.push(callback(Number(el)));
});
return transformedArray;
}
mapArray([a, '5'], function (el) {
   return el + b;
});

// Task #4
function filterArray(array, callback) {
    var a = [], filteredArray = [];
    executeforEach(array, function(el) {
    a.push(callback(el));
});
   for(var i = 0; i < a.length; i++){
     if(a[i]) {
        filteredArray.push(array[i]);
     }
   } 
return filteredArray;
}
filterArray([a, b], function(el) { 
    return el % a === 0; 
});

// Task #5
function flipOver(string) {
    var z = '';
    for(var i = string.length - 1; i >= 0; i--) {
        z = z + string[i];
    }
    return z;
}
flipOver('hey world');

// Task #6
function makeListFromRange(rangeOfNumbers) {
    var array = [],
        start = rangeOfNumbers[0],
        end = rangeOfNumbers[1];
    for (var i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
}
makeListFromRange([a, b]);

// Task #7
function getArrayOfKeys(array, prop) {
   var resultingArray = [];
    executeforEach(array, function (el) {
        resultingArray.push(el[prop]);
    });
return resultingArray;
}
const actors = [
    {
        name: 'tommy',
        age: 36
    },
    {
        name: 'lee',
        age: 28
    }
];
getArrayOfKeys(actors, 'name');

// Task #8
function substitute(array) {
   return mapArray(array, function(el) {
        if(el < d) {
          return '*';
        }
    return el; 
    });
}
substitute([a, b, f, c, e, d]);

// Task #9
function getPastDay(date, pastDays) {
    const milisecInDay = 86400000;
    return new Date(date - milisecInDay * pastDays).getDate();
}
const date = new Date(f, 0, b);
getPastDay(date, b);

// Task #10
function formatDate(date) {
  var year = date.getFullYear(),
  month = date.getMonth() + 1,
  dayOfMonth = date.getDate(),
  hours = date.getHours() < e ? `0${date.getHours()}` : date.getHours(),
  minutes = date.getMinutes() < e ? `0${date.getMinutes()}` : date.getMinutes();
return `${year}/${month}/${dayOfMonth} ${hours}:${minutes}`;
}
formatDate(new Date('6/15/2018 09:15:00'));