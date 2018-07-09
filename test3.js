/*function doCalculation(fn1){   
	fn1(function (fn3){
        console.log("something 1");
        fn3();
    });	
}
doCalculation(function (fn2){
    fn2(function (){
        console.log('something 2');
    });
});*/

//step 2
function doCalculation(fn1){
    console.log("inside doCalcualtion function..")
    fn1(function(f3){
        console.log("inside fn2 function..");
        f3();
    });
}

doCalculation(function (fn2){
    console.log("inside fn1.");
    fn2(function(){
        console.log("inside fn3");
    });
});
