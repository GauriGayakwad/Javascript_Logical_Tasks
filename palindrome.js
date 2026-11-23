console.log("Palindrome or not");

let string="madam";
let rev="";

for(let i=string.length-1; i>=0; i--){
    rev=rev+(string.charAt(i));
}
if(rev==string){
    console.log("Palindrome");
}else{
    console.log("Not Palindrome");
}

