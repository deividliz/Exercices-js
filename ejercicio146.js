function flipPairs(input) {
    // your code here
    let result = "";
    for (let i = 0; i < input.length; i += 2) {
        
        let par = input.substring(i, i + 2);
        par = par.split("").reverse().join("");
        result += par; 
    }
    return result;
}

let input = "Can you see what this is about?";
let output = flipPairs(input);
console.log(output); // --> aC noy ues ehwtat ih ssia obtu?
