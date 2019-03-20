/* 

Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). You may use a for loop or the forEach method.

 */

// the global Array
var myArray = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  
  this.forEach(i => newArray.push(callback(i)) );
  
  return newArray;

};

var newArr = myArray.myMap(function(item){
  return item * 2;
});

console.log(newArr);