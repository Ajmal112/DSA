/*
the code should be give this output

   1 
  1 2 
 1 2 3
1 2 3 4
 1 2 3
  1 2
   1

*/

let n = 4;

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n - i; j++) {
    row += " ";
  }
  for (let k = 1; k <= i; k++) {
    row += k + " ";
  }
  console.log(row);
}

for (let i = n - 1; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= n - i; j++) {
    row += " ";
  }
  for (let k = 1; k <= i; k++) {
    row += k + " ";
  }
  console.log(row);
}