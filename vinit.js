console.log("hello");
function great(name,text="greetings from bhavya"){
    console.log(text + " "+ name);
    console.log(name + " is a good boy");
}
function sum(a,b,c){

    let d = a+b+c;
    return d ;
}
let name = "Bhavya";
let name1 = "Manav";
let name2 = "Yash";
let name3 = "Ram";
let name4 = "Abhiraj";
let text = "Good Morning";
great(name,text);
great(name1,text);
great(name2,text);
great(name3,text);
great(name4);
let returnVal = sum                                                                                                                                                                                                                                                                                                                                                                                                                                              (1,3,4);
console.log(returnVal);
function max(x,y){
    return x>y ? x : y;
}
function min(x,y){
    if(x<y){

    
    return x;
}
else{
    return y;
}
}
let maximum = max(35,65);
console.log(maximum);
let minimum = min(35,65);
console.log(minimum);

