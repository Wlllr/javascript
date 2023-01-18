const studentForm = document.querySelector('#studentForm');
const studentsContainer = document.querySelector('.students');

const nameInput = studentForm['name'];
const ageInput = studentForm['age'];
const rollInput = studentForm['roll'];

const students = [
    {
        name: "Usman",
        age: 16,
        roll: 36,
    },
];

const addstudent = (name, age, roll) => {};

const createStudentElement = ({name, age, roll}) => {
    const studentDiv = document.createElement("div");
    const studentName = document.createElement("h2");
    const studentAge = document.createElement("p");
    const studentRoll = document.createElement("p");

    studentName.innerText = "Student name: " + name;
    studentAge.innerText = "Student age: " + age;
    studentRoll.innerText = "Student roll: " + roll;
}

