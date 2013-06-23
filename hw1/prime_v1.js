#!/usr/bin/env node
var fs = require('fs');
var outfile = "primes.txt";
var arrprimes = [];
arrprimes[0] = 2; 	// 2 is the first prime number
N = 100; // To look for upto 100 prime numbers
var idx = 1; // array index

/* 
//Test with simple for loop
for(var i = 0; i<6;i++){
 arrprimes[i]=i;
}
*/

// n is the number to be checked for primality
var count = 0;
for (var n = 3; n < N+1; n++) { // n+2 since no even number needs to be checked for
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
       arrprimes[idx]=n;
       console.log(arrprimes[idx]);
       idx+=1;
   }// if any number was a divisor of n, count will be > 0
}// outer for
var out = arrprimes.join();
fs.writeFileSync(outfile, out);  
console.log(out);
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
