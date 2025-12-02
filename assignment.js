//Convert the string "123" to a number and add 7. (0.5 Grade)
num = "123"
console.log(Number(num)+7);

//Check if the given variable is falsy and return "Invalid" if it is. (0.5 Grade)
let value = 0 
if (!value) {
  console.log("invalid");
}


//Use for loop to print all numbers between 1 and 10, skipping even numbers using continue (0.5 Grade)
for (let index=1 ; index <= 10 ; index++) {
  if (index % 2 ===0) {
    continue ;
    
  }
  console.log(index)
}



