function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for(var i = 0; i < musicians.length; i++) {
<<<<<<< HEAD
    array.push(`${musicians[i]} plays ${instruments[i]}`);
=======
    array.push(`${musicians[i]} plays ${instruments[i]}`)
>>>>>>> 52173f2c58266d0f1a544ac7ff927ec515ccc5c0
  }
  return array;
}

<<<<<<< HEAD
function johnLennonFacts(array) {
  var newArray = [];
  var i = 0;
  while(i < array.length) {
     newArray.push(array[i] + "!!!");
     i++;
  }
  return newArray;
}

function iLoveTheBeatles(n) {
  var newArray = [];
  do {
    newArray.push("I love the Beatles!");
  } while(n < 15 && newArray.length <= n);
  return newArray;
=======
function johnLennonFacts(facts) {

}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push("I love the Beatles!") * n;
  } while (n < 15);
  return array;
>>>>>>> 52173f2c58266d0f1a544ac7ff927ec515ccc5c0
}
