document.addEventListener("DOMContentLoaded", function () {
    // Get the student ID from the URL parameter 
    const urlParams = new URLSearchParams(window.location.search);
    const studentId = parseInt(urlParams.get("id"));

    // Fetch student data 
    fetch("student_data.json")
        .then(response => response.json())
        .then(data => {
            const student = data.find(item => item.id === studentId);
            if (student) {
                displayStudentDetails(student);
            }
        })
        .catch(error => console.error("Error fetching data:", error));
});

// Rendering Html dynamicaly
function displayStudentDetails(student) {
    const studentInfo = document.querySelector(".student-info");
    studentInfo.innerHTML = `
        <div class="student-photo">
            <img src="${student.image}" alt="${student.name} Photo">
        </div>
        <div class="student-details">
            <h2>${student.name}</h2>
            <p>Education: ${student.education}</p>
            <p>Address: ${student.address}</p>
            <p>Skills: ${student.skills}</p>
            <p>Contact: ${student.contact}</p>
        </div>
    `;

    const certifications = document.querySelector(".certifications");
    const certificationsList = student.certifications.map(cert => `<li>${cert}</li>`).join("");
    certifications.innerHTML = `
        <h2>Certifications</h2>
        <ul>${certificationsList}</ul>
    `;
}
