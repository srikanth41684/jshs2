let studentRecords = [  
    {name: 'John', id: 123, marks : 98 },
    {name: 'Baba', id: 101, marks : 23 },
    {name: 'yaga', id: 200, marks : 45 },
    {name: 'Wick', id: 115, marks : 75 } 
] ;

// "Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.
// ['JOHN', 'BABA', 'YAGA', 'WICK']

let namesOfStudents = studentRecords.map(x => x.name.toUpperCase());
console.log(namesOfStudents);


//"Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.


let getDetails = studentRecords.filter(x => x.marks > 50);
console.log(getDetails);

//Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.
let getDetailsId = studentRecords.filter((x) =>x.marks > 50 && x.id > 120);
console.log(getDetailsId);

//Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.

let totalMarks = studentRecords.reduce((accu, curr) => accu + curr.marks,0);
console.log(totalMarks);

//Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.

let nameOfFirst = studentRecords.filter(x => x.marks > 50);
for(let i = 0; i<nameOfFirst.length; i++){
console.log(nameOfFirst[i].name);
}

// Question 6: This time we are required to print the sum of marks of the students with id > 120.

let checkId = studentRecords.filter(x => x.id > 120);
let sumMarks = checkId.reduce((accu, curr) => accu + curr.marks,0);
console.log(sumMarks);

//Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.

for(let x of studentRecords){
if(x.marks<50){

x.marks = x.marks + 15;
}
}

let checkMarks = studentRecords.filter(x => x.marks > 50);
let addMarks = checkMarks.reduce((accu, curr) => accu + curr.marks,0);
console.log(addMarks);


//Question 8. Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 

let student1 = {
name : "Srikanth",
class : 12,
roll_no : 254
}

let student2 = {
name : "Prudvi",
class : 12,
roll_no : 251
}
let student3 = {
name : "Santhosh",
class : 12,
roll_no : 252
}

let student4 = {
name : "Bhanu",
class : 12,
roll_no : 255
}
let student5 = {
name : "Manasa",
class : 12,
roll_no : 256
}

let student6 = {
name : "Prem Raj",
class : 12,
roll_no : 291
}
let allStudents =[{...student1},{...student2},{...student3},{...student4},{...student5},{...student6}];
console.log(allStudents);