var name ="neil";
const state=50;
var sum = 5 +4;
var start= name.charAt(0);//gets the first letter of name


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
