const fs = require('fs');

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const stringNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];


// Part 1
fs.readFile('./day1/input.txt', 'utf8', function(err, data) {
  if (err) throw err;

  let calibration = 0;
  let first_number;
  let last_number;

  var lines = data.split("\n");
  lines.forEach((line) => {
    first_number = undefined;
    for (var i = 0; i < line.length; i++) {
      const char = line[i];
      if(numbers.includes(char)) {
        if(first_number === undefined) {
          first_number = char;
          last_number = char;
        } else {
          last_number = char;
        }
      }
    }

    if(first_number === undefined) {
      return;
    }

    const cal_amount = (parseInt(first_number) * 10) + parseInt(last_number);
    calibration += cal_amount;
  })

  console.log("Calibration for part one: ", calibration);
});

// Part 2
fs.readFile('./day1/input.txt', 'utf8', function(err, data) {
  if (err) throw err;

  let calibration = 0;
  let first_number;
  let last_number;

  var lines = data.split("\n");
  lines.forEach((line) => {
    first_number = undefined;
    for (var i = 0; i < line.length; i++) {
      const char = line[i];
      if(numbers.includes(char)) {
        if(first_number === undefined) {
          first_number = char;
          last_number = char;
        } else {
          last_number = char;
        }
      } else {
        let currIndex = i;
        for (var j = 0; j < stringNumbers.length; j++) {
          const stringNumber = stringNumbers[j];
          if(line.substring(currIndex, currIndex + stringNumber.length) === stringNumber) {
            if(first_number === undefined) {
              first_number = j;
              last_number = j;
            } else {
              last_number = j;
            }
          }
        }
        i = currIndex;
      }
    }

    if(first_number === undefined) {
      return;
    }

    const cal_amount = (parseInt(first_number) * 10) + parseInt(last_number);
    calibration += cal_amount;
  })

  console.log("Calibration for part two: ", calibration);
});
