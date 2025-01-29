function getLargestElement(arr) {
  // your code here
    let masLargo = arr[0];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > masLargo) {
        masLargo = arr[i];
      }
    }
  
    return masLargo;
  }


let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;
