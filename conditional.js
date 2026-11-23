console.log("Conditional statements");

//number is possitive or not

let num=0;
//if
if(num>0)
{
    console.log("Positive number:"+num);
}
//else-if
else if(num===0){
    console.log("Neutral Number:"+num); 
}
//else
else
    console.log("Negative Number:"+num);
    

//number is even or odd
let n=1;
if(n%2==0)
{
    console.log(n+" "+"Even number");
}
else{
    console.log(n+" "+"odd number");  
}

//Switch case
 let choice=6;

switch(choice){
    case 1:console.log("Monday");
    break;
    case 2:console.log("Tuesday");
    break;
    case 3:console.log("Wednesday");
    break;
    case 4:console.log("Thursday");
    break;
    case 5:console.log("Friday");
    break;
    case 6:console.log("Saturday");
    break;
    default:
        console.log("Invalid choice");
        
}