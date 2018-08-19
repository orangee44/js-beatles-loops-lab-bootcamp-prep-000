function theBeatlesPlay(eachmusician, instruments) {
  var array = [];
  for (var i = 0; i < eachmusician.length; i++) {
    array.push(`${eachmusician[i]} plays ${instruments}`);
  }
  return array;
}



  1) Beatles Loops returns an array of strings containing what instruments eachmusician plays:
     ReferenceError: theBeatlesPlay is not defined
      at Context.<anonymous> (test/index-test.js:6:5)
