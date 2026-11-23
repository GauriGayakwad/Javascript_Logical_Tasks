console.log("Number Array");


//Reverse order

let numarr=[5,6,7,3,2,1];
let rev=[];
for(let i=numarr.length-1; i>=0; i--)
{
    rev.push(numarr[i]);
    
}
console.log(rev);
console.log("***************");

//Only even number print and its count
console.log("Even Numbers");
let count=0;
for(let i=0; i<=numarr.length; i++){
    if(numarr[i]%2==0){
        console.log(numarr[i]);
        count++;
    }
}
  console.log("Total Even Numbers"+" "+count);

  //print square  of all odd number
console.log("**************");

  console.log("Odd Number");
  
  for(let i=1;i<=numarr.length-1;i++){
    if(numarr[i]%2!=0){
        console.log(numarr[i]*numarr[i]); 
    }
  }
console.log("***********");

  //print count of prime numbers from array
console.log("prime number");

  let primecount=0;
   for(let i=0; i<numarr.length; i++)
    {
    let counts=0;

   if(numarr[i]>1){
     for(let j=1; j<=numarr[i]; j++){
    
      if(numarr[i]%j==0){
        counts++;
      }
   }
   if(counts==2)
    {
        primecount++;
    }

  }
  }
  console.log("Total prime numbers:",primecount);
     

  //
  console.log("************");
  
  let arr =[10,"Gauri",'a'];
  for(let i=0; i<=arr.length;i++)
  {
    console.log(arr[i]);
    
  }