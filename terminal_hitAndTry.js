// const frame = '';

// process.stdout.write('\x1b[2J');
// process.stdout.write('\x1b[H');
// process.stdout.write(frame);

const width = 80;
const seperator = '-'.repeat(width);
const border = '+' + '-'.repeat(width - 2) + '+';

// erase the terminal and point to the start
process.stdout.write('\x1b[2J\x1b[H');
//print first line
process.stdout.write(seperator);
// cursor to the second row and calculate column to print title
process.stdout.write(`\x1b[2;${Math.floor((width - 7) / 2 + 1)}H`);
//print title in the middle
process.stdout.write('coolTOP\n');
// border test
process.stdout.write(border);
