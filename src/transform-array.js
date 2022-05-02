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
   arr1.forEach((el,i) => {
    
    if (el == '--double-next' && i !== 0 && i !== arr1.length-1) {
      
        arr1.splice(i,1,i+1);
      
    
    }
    if (el == '--double-next' &&  i == arr1.length-1)
    {
      arr1.splice(i,1);
    }

    if (el == '--discard-prev'  && i !== 0 && i !== arr1.length-1) {
     
      arr1.splice(i,1);
      arr1.splice(i-1,1);

      
    }
    if (el == '--discard-prev' && i == 0)
    {
      arr1.splice(i,1);
    }
    if (el == '--discard-next'  && i !== 0 && i !== arr1.length-1) {
     
      arr1.splice(i,1);
      arr1.splice(i,1)
    
  }
  if (el == '--discard-next' &&  i == arr1.length-1)
    {
      arr1.splice(i,1);
    }
    if (el == '--double-prev'  && i !== 0 && i !== arr1.length-1) {
    
      arr1.splice(i,1,i);
    
  } 
  if (el == '--double-prev' && i == 0 )
    {
      arr1.splice(i,1);
    }
  })
  return arr1;
  
}
console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-next', 4, 5]))
/*['--double-prev', 1, 2, 3],
[1, 2, 3, '--double-next'],
[1, 2, 3, '--discard-next']*/
module.exports = {
  transform
};
