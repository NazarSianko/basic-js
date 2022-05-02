const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str ) {
 let arr = [],
  counter = 1;

for (let i = 0; i < str.length; i++) {
  if (str[i] === str[i + 1]) {
      counter++;
  } else {
      arr.push([counter, str[i]]);
      counter = 1;
  }
}

let arr1 =  arr.flat();
for ( let i = 0; i < arr1.length;i++) {
  if ( arr1[i] == 1) {
       arr1.splice(i,1);
  }
}
return arr1.join('');
}

module.exports = {
  encodeLine
};
