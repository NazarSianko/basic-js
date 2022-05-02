const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(array) {
  /* let indices = []
  let element = -1;
  var idx = arr.indexOf(element);
  while (idx != -1) {
    indices.push(idx);
    idx = arr.indexOf(element, idx + 1);
    arr.splice(idx,1);
  }
  return indices;
  for (let i = 0; i<arr.length; i++) {
    if (arr[i] == -1) {
      arr.splice(i,1);
    }
  }
  arr.sort((a,b)=> a-b);
  for (let i = 0; i< indices.length; i++) {
    arr.splice(indices[i],0,-1)
  }*/
  var indices = [];

var element = -1;
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}

array.sort((a,b)=> a-b);

  array.splice(0,indices.length);
  for (let i = 0; i < indices.length; i++){
    array.splice(indices[i],0,-1);
  }
  



return array;
}
console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))

module.exports = {
  sortByHeight
};
