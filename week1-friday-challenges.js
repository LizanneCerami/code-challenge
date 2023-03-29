// Convert temperature in fahrenheit to celsius.

const convertFahrenheitToCelsius = param => {
  // shows logic we will be using
  const celsiusRes = (param - 32) * .5556;
  const roundedRes = celsiusRes.toFixed(1);
  return `Today is ${param}F (${roundedRes}C).`;
}

const res = convertFahrenheitToCelsius(72);
console.log(res);

// write a function that converts Japenese Yen to Dollars

const yenToDollars = param => {
  const usdResult = param / 129.87;
  const roundedResult = usdResult.toFixed(2);
  return `${param} Yen is ${roundedResult} US Dollars.`;
}

const result2 = yenToDollars(100);
console.log(result2);

// Given the array of numbers, write funtion returning largest number in array.

const largestInt = [2,5,7,1337,13,21,22,55,66,13,14551,41]

const highNumFunc = arr => {

  let highNum = 0;
  for(let i = 0; i < arr.length; i++){
    highNum = arr[i] > highNum ? arr[i] : highNum;
  }
  return highNum;
}

const highNumResult = highNumFunc(largestInt);
console.log(highNumResult);

//Calculate the sum of all the numbers in the following array
const sumInt = [6,1,643,234,123,4,7,9]

const sumOfNums = arr => {

  let totalSum = 0;
  for(let i = 0; i < arr.length; i++) {
    totalSum = totalSum + arr[i];
}
return totalSum;
}

const sumResult = sumOfNums(sumInt);
console.log(sumResult);

//Given any array of numbers (all will be > 0), write a function that returns the number of odd numbers in the array.
const countNumber = [1,3,7,6,13,20,2,5,33,9,14];

const oddCountFunc = arr =>  {

  let counter = 0;
  for(let i = 0; i <arr.length; i++) {
    if(arr[i] % 2 !== 0) {
      counter++;
    }
  }
  return counter;
}

const totalOdds = oddCountFunc(countNumber);
console.log(totalOdds);

// Create a multiplication table for numbers up to 10
const multiplicationTable = parseInt(1)
for(let i = 0; i < 10; i++){
  
    result =
  }


//Check if a string is a palindrome
const isPalindrome = str => {
  const charArr = [];
  const strLowerCase = str.toLowerCase();
  const strRemoveSpace = strLowerCase.replace(/[" "]/g, "");
  for(let i = strRemoveSpace.length-1; i >= 0; i--){
    charArr.push(strRemoveSpace.charAt(i));
  }

  let reverseStr = "";
  for(let i = 0; i < charArr.length; i++){
    reverseStr = reverseStr + charArr[i];
  }
  const res = (strRemoveSpace === reverseStr) ? true : false;
  return res;
}

const strRes = isPalindrome('mom ');
console.log(strRes);