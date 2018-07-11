function createEmployeeObject (name,id){
    var employee = {};
    employee.name = name;
    employee.id = id;
    return employee;    
}

 var emp1 = createEmployeeObject("Swati",111);
 console.log(emp1);