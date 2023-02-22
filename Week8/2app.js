let stu = new Student('Johnathan', 'Martinez', '9876543');
console.log(stu);
//calling the method
stu.enrollStudent();
stu.addGrade(90);
stu.addGrade(80);
stu.addGrade(95);
console.log(stu);
//call a static method
console.log(Student.getCreditCost());

//create an ITStudent
let stu2 = new ITStudent('Jerome', 'Antiporda', '2142323', 'CYB');
console.log(stu2);
stu2.enrollStudent();
stu2.addGrade(100);
console.log(stu2);
console.log(ITStudent.getCreditCost());