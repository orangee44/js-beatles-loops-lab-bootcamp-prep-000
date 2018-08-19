function theBeatlesPlay(eachmusician, instruments) {
  var array = [];
  for (var i = 0; i < eachmusician.length; i++) {
    array.push(`${eachmusician[i]} plays ${instruments}`);
  }
  return array;
}

