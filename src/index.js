module.exports = function longestConsecutiveLength(array) {

  if (array.length == 0) {
    return 0
  }
  
  const defaultValue = 1
  var result = defaultValue
  var counter = defaultValue
  var nextValue = -1

  function compare(a, b) {
    return a-b
  }
  array.sort(compare)

  for (let index = 0; index < array.length; index++) {
    var value = array[index];

    if (index >= 1) {
      if (array[index-1] == value) {
        nextValue = ++value;
        continue;
      }
    }

    if (value == nextValue) {
        ++counter;
    } else {
       if (counter > result) {
         result = counter
       }
       counter = defaultValue
    }

    nextValue = ++value;
  }

  if (counter > result) {
    result = counter
  }

  return result
}