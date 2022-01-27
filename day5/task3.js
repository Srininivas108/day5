  //do below program in arrow functions
//a)Print odd numbers in an array
let s=(array)=>{
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
let s= (array)=>{
    return array.map((ele)=>ele.charAt(0).toUpperCase()+ ele.substr(1).toLowerCase());
    }
    console.log(s(['sri','arun','krish']));

    //Sum of all numbers in an array
    let s =(array)=>{
        console.log(array.reduce((a,b)=> a+b,0));
        })
        console.log(s([3,4,5,6,9]));
//Return all the prime numbers in an array
let s= (array)=>{
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
let s=(array)=>{
    return array.filter((ele)=> ele.split('').reverse().join('') === ele);
}
console.log(s(['nitin','jack','ata','neilarmstronggnortsmralien']));
