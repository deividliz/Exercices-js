/* function isIsogram(text) {
  // your code here
    const strLower = text.toLowerCase();
  
    const uniqueChars = new Set();
  
    for (let char of strLower) {
      if (uniqueChars.has(char)) {
        return false;
      }
      uniqueChars.add(char);
    }
  
    return true;
  } */
  
    function isIsogram(str) {
      return new Set(str.toLowerCase()).size === str.length;
    };

console.log(isIsogram("Camile")); // --> true
console.log(isIsogram("Camille")); // --> false
