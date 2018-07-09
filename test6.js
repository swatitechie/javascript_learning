function isPrime(num){
    var flag = true;
    for ( var i=2;i<=num-1;i++){
        if(num%i == 0){
            flag=false;
            break;
        }
    }
    return flag;
}
function showPrime(){
    var num1 = 10;
    var num2 = 15;
    for (var i=num1; i<=num2; i++){
        if(isPrime(i)){
            console.log(i+" is a prime number.");
        }
    }
}
showPrime();