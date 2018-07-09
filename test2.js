function add (a,b){
	return a+b;
}
function doCalculation(a,b,fn){
    a = a*3;
    b = b * 5;
	var res = fn(a,b);
	return res;
}
var ress = doCalculation(6,3,function (num1,num2){
    return num1+num2 ;
});
console.log(ress);