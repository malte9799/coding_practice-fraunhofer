import * as fs from 'fs';
const FILEPATH = '../numbers.txt';


let total_sum = 0;
const file = fs.readFileSync(FILEPATH, 'utf8');           // open file
const lines = file.split('\n').slice(0, -1);              // split file into lines
for (const line of lines) {                               // iterate over lines
  const number = line.slice(1, -3);                       // extract number
  if (number === number.split('').reverse().join('')) {   // check if palindrome
    total_sum += parseInt(number, 2);                     // add dezimal value to total sum
  }
}


console.log(`Der Gesamtwert aller Palindrom-Binärzahlen beträgt: ${total_sum}`);
//           Der Gesamtwert aller Palindrom-Binärzahlen beträgt: 75709
