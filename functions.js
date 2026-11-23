//ways to write functions is javascript

//function declaration 

function m1(){
    console.log("m1() function");
}
m1();

function add(num1,num2)
{
    let num=40+10; 
     console.log("Addition is:"+num);
}
add();

//function expression

let m2=function(){
    console.log( "function Expression");
}
m2();

let sub=function(){
    let sub=100-30;
    console.log("Subtraction is:"+sub);
}
sub();

//Arrow Function

let m3 =() =>{
    console.log("Arrow function");
}
m3();


let mul =() =>{
    let mul=10*10;
    console.log("Multiplication is:"+mul);
}
mul();

// Function Hoisting

display();
function display(){
    console.log("Hoisting Function");
}

div();
function div(){
    let div=50/4;
    console.log("Division is:"+div);
}