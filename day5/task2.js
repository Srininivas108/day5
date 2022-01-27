//Write a function called “addFive”.
//Given a number, “addFive” returns 5 added to that number.
var num = 10;
function addFive(num) {
    return num+5; 

}
var result = addFive(num)
console.log(result);
//Write a function called “getOpposite”.
//Given a number, return its opposite
var num = 5;
function getOpposite(num) {
    if(typeof(num)==='number') return -num
    else return -1
}
var result = getOpposite(num)
console.log(result);

//Fill in your code that takes an number minutes and converts it to seconds.
var min = 5;
function toSeconds(min) {
    return min*60;
}
var secs = toSeconds(min)
console.log(secs);

//Create a function that takes a string and returns it as an integer.
var mystr = "5";
function toInteger(mystr) {
    return parseInt(mystr)
}
var myint = toInteger(mystr)
console.log(myint);

//Create a function that takes a number as an argument, increments the number by +1 and returns the result.
var myint = 0;
function nextNumber(myint) {
    return myint+1
}
var myNextint = nextNumber(myint)
console.log(myNextint);

//Create a function that takes an array and returns the first element.
var arr = [1, 2, 3];
function getFirstElement(arr) {
    return arr[0]
}
var data = getFirstElement(arr)
console.log(data);

//Write a function that converts hours into seconds
var arr = [1, 2, 3];
function hourToSeconds(arr) {
    return arr.map(ele=>ele*60*60)
}
var data = hourToSeconds(arr)
console.log(data);

//Create a function that takes height and width and finds the perimeter of a rectangle.
function findPerimeter(num1,num2) {
    return 2*(num1+num2)
}
var peri = findPerimeter(6,7)
console.log(peri);

//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(num1,num2) {
    return num1+num2 > 100 ? true : false;
}
var res = lessThan100(22,15)
console.log(res);
//Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

function remainder(num1,num2) {
    return num1%num2;
}
var res = remainder(1,3)
console.log(res);

/*turkey = 2 legs
horse = 4 legs
pigs = 4 legs
The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.*/
function CountAnimals(tur,horse,pigs) {
    return (tur*2)+(horse*4)+(pigs*4)
}
var legs = CountAnimals(2,3,5)
console.log(legs)

//Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
function frames(num1,num2) {
    return num1*num2*60
}
var fps = frames(1,2)
console.log(fps)

//Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
function divisibleByFive(num1) {
    return num1%5 ===0 ? true:false;
}
var divisible = divisibleByFive(5)
console.log(divisible)
//Given a number, “isEven” returns whether it is even.

function isEven(num){
    if(typeof(num) !== 'number') return -1
    else return num%2 ===0 ? true:false;

   }
   var even = isEven(5)
   console.log(even)

   //Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.
   function areBothOdd(num1, num2){
    (num1%2 !== 0 && num2 %2 !==0) ? true:false;
   }
   console.log(areBotthOdd(1,3));

   //Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.
   function getFullName(firstName, lastName){
    return firstname+' '+lastName;
   }
   console.log(getFullName(firstName, lastName))

   //Given a word, “getLengthOfWord” returns the length of the given word.
   function getLengthOfWord(word1){
    if(typeof(word1)==='string') return word1.length
    else return -1;
}
console.log(getLengthOfWord(6))

//Given two words, “isSameLength” returns whether the given words have the same length.

function isSameLength(word1, word2){
   return word1.length=== word2.length ? true:false ;
   }
   console.log(isSameLength(word1, word2));
   //Create a function to calculate the distance between two points defined by their x, y coordinates
   console.log(getDistance(100, 100, 400, 300));
function getDistance(x1, y1, x2, y2)
{
 return Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2))

}

//Write a function called “getNthElement”.
function getNthElement(array,n){
    if( array.length=== 0) return undefined
   return array[n]
   }


   //getLastElement([1, 2, 3, 4]);
   
function getLastElement(array){
    if(array.length ===0) return -1;
    return array.pop()
   }

   //Given an object and a key, “addProperty” adds a new property on the given object with a value of true.
   var obj = {
    mykey: "value"
   };
   function addProperty(obj, key){
       obj.key="true";
       
       return obj
   }
   console.log(addProperty(obj,"ss"))

   //Given an object and a key, “removeProperty” removes the given key from the given object.
   function removeProperty(obj, key){
    delete obj.key;
    return obj;
   }
   console.log(removeProperty(obj,key));
   //Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
   var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
   function countPositivesSumNegatives(arr) {
      var n=0;
      var p=0;
      for(i=0;i<arr.length;i++){
          if(arr[i]<0){
              n+=arr[i];
          }else{
              p+=arr[i];
          }
      }
  
    return [n,p]
  }
  console.log(countPositivesSumNegatives(arr));
//Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).
function powersOfTwo(n){
    let res='';
    for(i=0;i<=n;i++){
        res+= Math.pow(2,i)+","
    }
  
  return res.slice(0,res.length-1);
}
console.log(powersOfTwo(2))

//Find the maximum number in an array of numbers
function findMax(ar)
{
 return Math.max(...ar)
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log(max);

//Create a function that will merge two arrays and return the result as a new array
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var res=(arr1,arr2)=>arr1.concat(arr2)
console.log(res(ar1,ar2));

//Calculate the sum of numbers received in a comma delimited string
let v='1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9'.split(',')
let s=0;
for(i=0;i<v.length;i++){
    s+=parseFloat(v[i]);
}
console.log(s);

//Reverse a string
var s = reverseString("JavaScript");
console.log(s);
function reverseString(s)
{
  return s.split('').reverse().join(''); 

}

//Print the first 100 prime numbers
printPrimes(100);
// Function prints the first nPrimes numbers
function printPrimes(nPrimes)
{
 var n = 0;
 var i = 2;
 
 while(n < nPrimes)
 {
 if (isPrime(i))
 {
 console.log(n,'->', i);
 n++;
 }
 
 i++;
 }
}
// Returns true if a number is prime
function isPrime(n)
{
 for(j=2;j<n;j++){
     if(n%j ===0) return false
 }
 return true
}
//printPrimes(10,100);
// Function prints the first nPrimes numbers
function printPrimes(nPrimes,i)
{
 var n = 0;
 
 
 while(n < nPrimes)
 {
 if (isPrime(i))
 {
 console.log(n,'->', i);
 n++;
 }
 
 i++;
 }
}
// Returns true if a number is prime
function isPrime(n)
{
 for(j=2;j<n;j++){
     if(n%j ===0) return false
 }
 return true
}