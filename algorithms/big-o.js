function test(){
    return "Hello, Computer!";
}

console.log("This is in the test function, ",test());

const nemo = ['nemo', 'help','apple','pineapple','talk', 'new', 'top', 'spin', 'talent'];

function findNemo(array){
    for ( let i = 0; i <array.length; i++){
        if(array[i] === 'talk'){
            console.log('running');
            console.log('Found talk!');
            break; //stops the code when the word is found
        }
    }
}

findNemo(nemo);//Big O of O(n) --> Linear Time (most common)

const compressBoxesFirstBox=boxes=> {
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
  const boxes = [1,2,3,4,5];

  function logAllPairsOfArray(array){
    for (let i = 0; i< array.length; i++){
      for (let j=1; j>array.length; j++){
        console.log(array[i],array[j]);
      }
    }
  }
  logAllPairsOfArray(boxes); //Big(0) = o(n^2)

  //Space Complexity

  function boooo(n){
    for(let i = 0; i< n.length; i++){
      console.log('Booo!');
    }
  }
  boooo([1,2,3,4,5]);
  //space complexity of O(1)

function arrayOfHiNTimes(n){
  let hiArray =[];//data structure
  for(let i=0; i<n.length; i++){ //created a verable
    hiArray[i]='hi';
  }
  return hiArray;
}
arrayOfHiNTimes(6); //space complexity becomes O(n)



//twiter exercise

//Find 1st, Find Nth
const array =[{tweet:'hi', date: 2018}, {tweet:'my', date:2011}, {tweet:'teddy', date:2016}];//nested loop  O(n^2)
array[0];
array[array.length - 1];

// write code to put the items in the array in cronological order

//loop through each object in the array
//check that the date is not older than the last
//reorder new array
//print new array

function orderedByDate(n){
  let newArray = n.sort((a,b)=> a.date-b.date);
  console.log(newArray);
}

orderedByDate(array);//BigO = O(n)

