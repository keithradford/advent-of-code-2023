const fs = require('fs');

let calibration = 0;
let first_number;
let last_number;

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

fs.readFile('./day1/input.txt', 'utf8', function(err, data) {
  if (err) throw err;
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
  console.log(calibration);
});
