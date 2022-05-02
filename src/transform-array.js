const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!")
  }
  let arr1 = arr.slice();
  
    
  for(let i = 0;i<arr1.length;i++ ){
  

  

switch(arr1[i]){
  
  case '--discard-next':
    if (arr1[i+1] == undefined) {
    arr1.splice(i,1);
    }
    else {
      arr1.splice(i,2);
    }
    break;
  
  case '--discard-prev':
    if (arr1[i-1] == undefined) {
    arr1.splice(i,1);
    }
    else {
      arr1.splice(i-1,2);
    }
    break;
  case '--double-next':
    if (arr1[i+1] == undefined) {
      arr1.splice(i,1);
      }
      else {
        arr1.splice(i,0,arr1[i+1]);
      }

    break;
  case '--double-prev':  
  if (arr1[i-1] == undefined) {
    arr1.splice(i,1);
    }
    else {
      arr1.splice(i-1,0,arr1[i-1]);
    }

  break;
}
  }
  return arr1;
}



module.exports = {
  transform
};
