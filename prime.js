console.log("number is prime or not");

let num=7;
let count=0;
if(num<=1){
    console.log("Not Prime");
}else {
for(let i=1; i<=num; i++){
   if(num%i==0){
     count++;
   }
}
}
if(count==2)
{
    console.log("Prime Number");
}else{
    console.log("Not prime number");
    
}