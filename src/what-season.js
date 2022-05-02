const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let winterStart = new Date (2020,11,1);
  let springStart = new Date (2020,2,1);
  let summerStart = new Date (2020,5,1);
  let autumnStart = new Date (2020,8,1);
 if ( date == undefined) {
   return 'Unable to determine the time of year!';
 }
 console.log(date[Symbol.toStringTag]);
 if (Object.prototype.toString.call(date) !== '[object Date]' || date[Symbol.toStringTag] == 'Date') {
  throw new Error ("Invalid date!");
 }
   
  if  ( date.getMonth() == 11 || date.getMonth() == 0 || date.getMonth() == 1) {
     return "winter";
   }
   if ( springStart.getMonth() <= date.getMonth() && date.getMonth() < summerStart.getMonth()) {
    return "spring";
  }
  if (summerStart.getMonth() <= date.getMonth() && date.getMonth() < autumnStart.getMonth()) {
    return "summer";
  }
  if ( autumnStart.getMonth() <= date.getMonth()&& date.getMonth() < winterStart.getMonth()) {
    return "autumn";
  }
 
}
let date = new Date(2020, 02, 31);
console.log(getSeason(date))
module.exports = {
  getSeason
};
