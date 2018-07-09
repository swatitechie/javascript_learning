var a = ["name1","name2","name3","name4","name5"];
console.log(a.length);
for (i=0;i<=a.length-1;i++){
    console.log(a[i]);
}
a.splice(2,2); // first argument is for index to start from,  2nd arg is for delte count
console.log("after using splice function, length is  : "+a.length);
for (i=0;i<=a.length-1;i++){
    console.log(a[i]);
}