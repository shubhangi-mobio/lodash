const _ = require("lodash");

const ver = _.VERSION;
console.log(ver);

let words = ['sky', 'wood', 'forest', 'falcon',
    'pear', 'ocean', 'universe'];

let fel = _.first(words);
let lel = _.last(words);

console.log(`First element: ${fel}`);
console.log(`Last element: ${lel}`);

// let nums = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(_.nth(nums, 3));
// console.log(_.nth(nums, -3));

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let c1 = _.chunk(nums, 2);
console.log(c1);

let c2 = _.chunk(nums, 3);
console.log(c2);

let r = _.random(10);
console.log(r);

r = _.random(5, 10);
console.log(r);