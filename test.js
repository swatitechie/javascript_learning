function add (a,b){
	return a+b;
}
function sub (a,b){
	return b-a;
}
function mul (a,b){
	return a*b;
}
function div (a,b){
	return b/a;
}

function doCalculation(a,b,fn){
	var res = fn(a,b);
	return res;
}
console.log(doCalculation(6,3,sub));


