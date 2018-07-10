var name = "Swati Global"; // global variable

function foo (){
    var name = "Swati local";
    console.log(name); //local name
}
foo();
console.log(name); //global refer