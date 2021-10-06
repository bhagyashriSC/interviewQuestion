

/*-----------------------------------------------------------------------------
-----------------------shallow copy-----------------------------------------
-----------------------------------------------------------------------------*/
var employeeDetailsOriginal = { name: 'Manjula', age: 25, Profession: 'Software Engineer' };
var employeeDetailsDuplicate = employeeDetailsOriginal; //Shallow copy!
employeeDetailsDuplicate.name = 'NameChanged';
console.log(employeeDetailsOriginal) //namechanged
/*-----------------------------------------------------------------------------
-----------------------Deep copy-----------------------------------------
-----------------------------------------------------------------------------*/
var employeeDetailsOriginal = { name: 'Manjula', age: 25, Profession: 'Software Engineer' };
var employeeDetailsDuplicate = { 
    name: employeeDetailsOriginal.name, 
    age: employeeDetailsOriginal.age, 
    Profession: "changed"
}; //Deep copy!
console.log(employeeDetailsOriginal) //return old