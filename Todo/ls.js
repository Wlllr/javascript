const studentForm = document.getElementById('studentForm');
const studentsContainer = document.querySelector('.students');

const nameInput = studentForm['name'];
const ageInput = studentForm['age'];
const rollInput = studentForm['roll'];

const students = JSON.parse(localStorage.getItem('students')) || [];

const addstudent = (name, age, roll) => {
    students.push({
        name,
        age,
        roll
    });

    localStorage.setItem("students", JSON.stringify(students));

    return { name, age, roll};
};

const createStudentElement = ({name, age, roll}) => {
    const studentDiv = document.createElement("div");
    const studentName = document.createElement("h2");
    const studentAge = document.createElement("p");
    const studentRoll = document.createElement("p");

    studentName.innerText = "Student name: " + name;
    studentAge.innerText = "Student age: " + age;
    studentRoll.innerText = "Student roll: " + roll;

    studentDiv.append(studentName, studentAge, studentRoll);
    studentsContainer.appendChild(studentDiv);

    studentsContainer.style.display = students.length === 0 ? "none" : "flex";
};

studentsContainer.style.display = students.length === 0 ? "none" : "flex";

students.forEach(createStudentElement);

//Talvez usar addEventListener
studentForm.onsubmit = e => {
    e.preventDefault();

    const newStudent = addstudent(
        nameInput.value,
        ageInput.value,
        rollInput.value
    );
    createStudentElement(newStudent);
    nameInput.value = "";
    ageInput.value = "";
    rollInput.value = "";
};