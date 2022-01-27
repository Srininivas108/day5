//Do the below programs in anonymous function & IIFE
//a)Print odd numbers in an array
let s= function(array){
    var a=[];
    for(i=0;i<array.length;i++){
        if(array[i]%2 !== 0){
            a.push(array[i]);
        }
    }
  
  return a;  
}
console.log(s([1,2,3,4,5,6,7]));    

//Convert all the strings to title caps in a string array
let s= function(array){
    return array.map((ele)=>ele.charAt(0).toUpperCase()+ ele.substr(1).toLowerCase());
    }
    console.log(s(['sri','arun','krish']));

//Sum of all numbers in an array
(function(array){
    console.log(array.reduce((a,b)=> a+b,0));
    })([3,4,5,6,9])

//Return all the prime numbers in an array
let s= function(array){
    let x= array.filter(ele=>{
        for(i=2;i<ele;i++){
            if(ele%i=== 0) return false
        }
        return true; 
    });
 return x;
}
console.log(s([5,6,13,15,23,26,36]));

//Return all the palindromes in an array
let s= function(array){
    return array.filter((ele)=> ele.split('').reverse().join('') === ele);
}
console.log(s(['nitin','jack','ata','neilarmstronggnortsmralien']));

//Return median of two sorted arrays of same size
let s= function(array1,array2){
    var a= array1.concat(array2).sort((a,b)=> a-b);
    var x=a.length/2 ;
   return (a[x]+a[x-1])/2
}
console.log(s([1,12,15,26,38],[2,13,17,30,45]));

//Remove duplicates from an array
let s= function(array){
    var x=array.filter(function(item,p){
        return  array.indexOf(item)== p
    })
    return x
}
console.log(s([1,3,4,5,2,3,4,5,7,6,4,5,6]));

//Rotate an array by k times
(function(array,k){
    for(i=0;i<k;i++){
        array.unshift(array.pop())
    }
  console.log(array)    
})([1,3,4,5,8],3);
