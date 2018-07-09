var a = ["name1","name2","name3","name4","name5"];
console.log(a.length);
for (i=0;i<=a.length-1;i++){
    console.log(a[i]);
}

a.push("name6");  //adding a new element
console.log(a.length);
for (i=0;i<=a.length-1;i++){
    console.log(a[i]);
}
console.log("element wich got removed : "+a.pop());
console.log(a.length);
for (i=0;i<=a.length-1;i++){
    console.log(a[i]);
}