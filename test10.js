var myObj = {
    firstName : "Swati",
    lastName : "Samntray",
    getFullname : function (){
        return myObj.firstName + " "+ myObj.lastName
    }
}

// console.log(myObj.getFullname());
var myObj2 = myObj;
myObj = {}; // new value
console.log(myObj2.getFullname()); // undefined unfdefined