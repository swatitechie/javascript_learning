var myObj = {
    firstName : "Swati",
    lastName : "Samntray",
//    location : this.firstName+" from CTC",   //undefined
//    location : myObj.firstName,  // undefined
    getFullname : function (){
        return this.firstName + " "+ this.lastName
    }
}

// console.log(myObj.getFullname());
var myObj2 = myObj;
myObj = {}; // new value
console.log(myObj2.getFullname()); // swati samntray
console.log(myObj2.location); // undefined
console.log(myObj2.prop);