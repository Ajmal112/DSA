/*
let n=3;
we have to print triangle consecutive numbers like this

  1
 234
56789

*/

let n=3;
let count = 1;
for(let i=1;i<=n;i++){
  let str="";
  for( let j=1;j<=n-i;j++){
    str+= " ";
  }
  for(let k=1;k <= 2*i-1; k++){
      str+= count++;
  }
  console.log(str);
}