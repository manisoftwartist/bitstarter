#!/usr/bin/env node
var fs = require('fs');
var outfile = "primes.txt";
var arrprimes = new Array();
arrprimes[0] = 2; // 2 is the first and only even prime number
N = 100; //First 100  prime numbers

// n is the number to be checked for primality
var count = 0;
var n = 3; // Start with 3
while (arrprimes.length < N) {
   count = 0;
   for (var i = 2; i < n; i++)
   {
      if (n%i==0){
        count+=1;
        break;
      }
    }// inner for
    if (count==0){ 
       //console.log("Prime found");     
       arrprimes.push(n);
 
   
   }// if any number was a divisor of n, count will be > 0
   n+=1;
}// outer while
console.log("No. of primes found = " + arrprimes.length);
var out = arrprimes.join()+"\n";
fs.writeFileSync(outfile, out);  

console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
