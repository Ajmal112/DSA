
/*
Try this if you are comfortable with linear search.

int a[] = [13, 11, 13,4, 10, 9, 1];
int x[] = [11, 13, 4, 17];
// Your program should print
// 11 is found 1 time
// 13 is found 2 times
// 4 is found 1 time
// 17 is NOT found
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
