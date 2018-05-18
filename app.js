var name ="neil";
const state=50;
var sum = 5 +4;
var start= name.charAt(0);//gets the first letter of name
var bill={
    name:"bill",
    age:21
};
var june={
    name:"june",
    age:18
};
var tom={
    name:"tom",
    age:42
}
var brit={
    name:"brit",
    age : 15
}
var trent={
    name:"trent",
    age:12
};
var people=[bill, june, tom, brit,trent];

//checks to see if the first letter is greater than L
if(name.charAt(0)>'l') {
    alert("Back of the Line");

}else{
    alert("next")
}

function sayHello(){
    alert("hello world");
}

sayHello();

function checkAge(yourName,numAge){
    if(numAge<21){
        alert("sorry "+yourName +" you aren't old enough for this page"); 
    }
}


checkAge("charles",21);
checkAge("abby",27);
checkAge("james",18);
checkAge("john",17);

for (i=0;i<people.length; i++){
    checkAge(people[i].name,people[i].age);

}