console.log("Looping statement");

//print the number 1 to 10
//for loop

for(let i=1; i<=10; i++)
{
   console.log(i);  
}

for(let i=10; i>=1; i--)   //Reverse
{
    console.log(i);
}

//while loop
let i=1;
while(i<=10)
{
    console.log(i);
    i++;
}

let j=10;      
while(j>=1){         //Reverse
    console.log(j);
    j--;  
}

//do while

let k=1;
do{
    console.log(k);
    k++;
}while(k<=10);

let m=10;
do{
    console.log(m);
    k--;
}while(k>1)


    //for off loop

    console.log("For off loop");
    
    let numarr =[3,4,6,1,3,2];

    for(let n of numarr){
        console.log(n); 
    }

    //for in loop

    console.log("for in loop");

    let student={
        id:1,
        name:"Gauri",
        marks:80.65,
        address:{
            area:"Karve nagar",
            city:"Pune"
        }
    }

    for(let props in student){
        console.log(props+" = "+student[props]);
        //console.log(student[props]);
       
        for(let a in student[props]){
            console.log(a+" = "+student[props][a]);
            
        }
    }
    
