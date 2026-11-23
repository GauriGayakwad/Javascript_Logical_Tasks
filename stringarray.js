console.log("String Array");

let strarr=["Pune","Mumbai","Nashik","Amravati","Jalgao"];

//print cities name start with A
for(let i=0; i<strarr.length; i++){
    if(strarr[i].startsWith("A")){
      console.log(strarr[i]);
    }      
}
console.log("**********");

//print cities length>=5

for(let i=0; i<strarr.length;i++)
{
    if(strarr[i].length>=5){
        console.log(strarr[i]);
    }
}
console.log("*********");

//print count of vowels of each city

for(let i=0; i<strarr.length;i++)
{
    let count=0;
    let vowels="";

    for(let j=0; j<strarr[i].length;j++){
        let ch=strarr[i].charAt(j).toLowerCase();
        if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u'){
            count++;
            vowels=vowels+ch;
            
        }
    }
    console.log(strarr[i]+":"+vowels);
    console.log("Vowel Count"+"="+count);
    
}
