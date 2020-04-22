function test() {
  return "Hello, Computer!";
}

console.log("This is in the test function, ", test());

const nemo = ['nemo', 'help', 'apple', 'pineapple', 'talk', 'new', 'top', 'spin', 'talent'];

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'talk') {
      console.log('running');
      console.log('Found talk!');
      break; //stops the code when the word is found
    }
  }
}

findNemo(nemo);//Big O of O(n) --> Linear Time (most common)

const compressBoxesFirstBox = boxes => {
  console.log(boxes[0]);
};
compressBoxesFirstBox(nemo); //Big O of O(1) 


//Exercise 1
// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10;//O(1)
  a = 50 + 3;//O(1)

  for (let i = 0; i < input.length; i++) { //O(n)
    anotherFunction();//O(n)
    let stranger = true;//O(n)
    a++;//O(n)
  }
  return a;//O(1)
}  //O(n) Linear Time  Real Answer is O(3 + 4n)

//Exercise 2
// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5;//O(1)
  let b = 10;//O(1)
  let c = 50;//O(1)
  for (let i = 0; i < input; i++) {//O(n)
    let x = i + 1;//O(n)
    let y = i + 2;//O(n)
    let z = i + 3;//O(n)

  }
  for (let j = 0; j < input; j++) {//O(n)
    let p = j * 2;//O(n)
    let q = j * 2;//O(n)
  }
  let whoAmI = "I don't know";//O(1)
}//BigO O(n) or O(4 + 7n)


//log all pairs of array
const boxes = [1, 2, 3, 4, 5];

function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j > array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}
logAllPairsOfArray(boxes); //Big(0) = o(n^2)

//Space Complexity

function boooo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log('Booo!');
  }
}
boooo([1, 2, 3, 4, 5]);
//space complexity of O(1)

function arrayOfHiNTimes(n) {
  let hiArray = [];//data structure
  for (let i = 0; i < n.length; i++) { //created a verable
    hiArray[i] = 'hi';
  }
  return hiArray;
}
arrayOfHiNTimes(6); //space complexity becomes O(n)



//twiter exercise

//Find 1st, Find Nth
const array = [{ tweet: 'hi', date: 2018 }, { tweet: 'my', date: 2011 }, { tweet: 'teddy', date: 2016 }];//nested loop  O(n^2)
array[0];
array[array.length - 1];

// write code to put the items in the array in cronological order

//loop through each object in the array
//check that the date is not older than the last
//reorder new array
//print new array

function orderedByDate(n) {
  let newArray = n.sort((a, b) => a.date - b.date);
  console.log(newArray);
}

orderedByDate(array);//BigO = O(n)


//Interview question #1

//Given 2 arrays, create a funtion that let's a user know (ture/false) whether these two arrays have any common items
//Example: array1-[a,d,c,f]
//array2=[s,x,d,h]
//returns true

//Pre-setup
//there are 2 parameters -arrays
//return true or false

//questions: How big can the array get?-no size limit  Am I making this as efficient as possible?-yes

//function containsCommonItem(arr1, arr2) {
//  for (let i = 0; i < arr1.length; i++) {
//    for (let j = 0; j < arr2.length; j++) {
//      if (arr1[i] === arr2[j]) {
//        return true;
//      }
//    }
//  } 
//  return false;
//} //O(a*b)

const array1 =['g','b','p','x'];
const array2 =['z','y', 'g'];

function constainsCommonItems2(arr1,arr2){
  //loop through first array and create object properties where properties === items in array
  //loo through second array and check if item in second array exists on created object.
  //what if there are not 2 arrays
  if(arr1 === null || arr2 === null){
    return 'Missing an input';
  }
  let map ={};
  for(let i =0; i<arr1.length; i++){
    if(!map[arr1[i]]){
      const item = arr1[i];
      map[item]= true;
    }
  }
  for(let j=0; j<arr2.length; j++){
    if(map[arr2[j]]){
      return true;
    }
  }
  return false;
} //O(a+b)
console.log(constainsCommonItems2(array1,array2));

function containsCommonItems3(arr1,arr2){
  return arr1.some(item => arr2.includes(item));
}//ES6 solution

console.log(containsCommonItems3(array1,array2));