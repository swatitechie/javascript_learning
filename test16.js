var name = "Swati global";
function foo (){ 
    //var name = "Swati local";   
    console.log(name); 
 //   var name = "Swati local";
    function childFoo(){        
        console.log(name);
      //  var name = "Swati childfoo";
    }
    childFoo();
}
foo();