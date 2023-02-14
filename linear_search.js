
/*
Write code to print if n is a prime Number

for example if n = 11, then its divisible only by 1 and 11 
(Hint: only n%1 == 0 and n%11==0,  ) no other number can divide 11

but if n = 12 then n%1 ==0 and n%2==0, n%3 == 0, n%4 == 0, n%6==0 hence its not a prime number

Your code should work for any value of n
*/


let a = [13, 11, 13 , 4 , 10, 9, 1];
let x = [11, 13, 4, 17];

for(i=0;i<x.length;i++) {
  let  count = 0;
    for(j=0;j<a.length;j++) {
    if(  x[i] == a[j] ){
      count++;
    
    } 
}


 if(count == 0) {
     console.log(x[i] + " " + "is not found");
 } else if(count == 1) {
    console.log(x[i] +" " + "is found 1 time");
 } else {
    console.log(x[i] + "is found" + " " + count +" " + "times");
 }

}