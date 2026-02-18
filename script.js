/**************************************
 MODULE 4: ARRAYS
**************************************/
let students = [];


/**************************************
 MODULE 6: EVENTS (FORM SUBMISSION)
**************************************/
const form = document.getElementById("studentForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        /**************************************
         MODULE 2: VARIABLES & DATA TYPES
        **************************************/
        let name = document.getElementById("name").value.trim();
        let age = Number(document.getElementById("age").value);
        let course = document.getElementById("course").value.trim();
        let units = Number(document.getElementById("units").value);
        let message = document.getElementById("message");

        /**************************************
         MODULE 3: LOGICAL STATEMENTS
        **************************************/
        if (name === "" || age <= 0 || course === "" || units <= 0 || isNaN(age) || isNaN(units)) {
            message.textContent = "Please fill out all fields correctly.";
            message.style.color = "red";
            return;
        }

        /**************************************
         MODULE 5: FUNCTIONS
        **************************************/
        function createStudent(name, age, course, units) {
            return {
                name: name,
                age: age,
                course: course,
                units: units
            };
        }

        let student = createStudent(name, age, course, units);

        students.push(student);

        message.textContent = "Student registered successfully!";
        message.style.color = "green";

        form.reset();
    });
}


/**************************************
 MODULE 4 & 6: LOOPS + DOM MANIPULATION
**************************************/
function updateDashboard() {
    const tableBody = document.querySelector("#studentTable tbody");

    if (!tableBody) return;

    tableBody.innerHTML = "";

    for (let i = 0; i < students.length; i++) {
        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${students[i].name}</td>
            <td>${students[i].age}</td>
            <td>${students[i].course}</td>
            <td>${students[i].units}</td>
        `;

        tableBody.appendChild(row);
    }
}
