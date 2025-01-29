function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  // your code here
  
    let interestFactor = 1 + interestRate / compoundingFrequency;
    let exponent = compoundingFrequency * timeInYears;
    let amount = principal * Math.pow(interestFactor, exponent);
    let compoundInterest = amount - principal;
    return compoundInterest;
  }
  


let output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.83682213410543
