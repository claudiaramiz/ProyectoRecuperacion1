// Find Index is a function or method executes a function for each array element
function isPrime(element, index, array) {
    var start = 2;
    while (start <= Math.sqrt(element)) {
      if (element % start < 1) {
        return false;
      } else {
        start++;
      }
    }
    return element > 1;
  }
  
  console.log([4, 6, 8, 12].findIndex(isPrime)); // -1, no encontrado
  console.log([4, 6, 7, 12].findIndex(isPrime)); // 2