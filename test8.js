var a = ["name1","name2","name3","name4","name5"];
a.unshift("name0");  //add an new element to the first index
console.log(a.length);
for (i=0;i<=a.length-1;i++){
    console.log(a[i]);
}

console.log("lement which got removed from first index : "+a.shift()); 
console.log(a.length);
for (i=0;i<=a.length-1;i++){
    console.log(a[i]);
}

//splice()  - homework
a.splice(2,1);

