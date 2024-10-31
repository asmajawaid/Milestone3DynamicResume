// // get reference to the form and display
var _a, _b;
// const form = document.getElementById('resume-form') as HTMLFormElement;
// const resumeContainer = document.getElementById('resume-display') as HTMLDivElement;
// //handel form submission
// form.addEventListener('submit', (event: Event) => {
//   event.preventDefault()//prevent page reload
// // Handle profile picture upload
//   const profilePicInput = document.getElementById('profile-pic') as HTMLInputElement;
//   const profilePic = profilePicInput.files?.[0];
//   const profilePicUrl = profilePic ? URL.createObjectURL(profilePic) : '';
//   //collect input values
// // Fetch form values
//   const fullName = (document.getElementById('full-name') as HTMLInputElement).value;
//   const email = (document.getElementById('email') as HTMLInputElement).value;
//   const phone = (document.getElementById('phone') as HTMLInputElement).value;
//   const aboutMe = (document.getElementById('about-me') as HTMLTextAreaElement).value;
//   const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
//   const education = (document.getElementById('education') as HTMLTextAreaElement).value;
//   const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',').map(skill => skill.trim());
// //Generate the resume content dynamically
// const resumeHTML= `
// <h2><b>Resume</b></h2>
//   <h3>Personal Information</h3>
//     <h2>${fullName}</h2>
//     <img src="${profilePicUrl}" alt="Profile Picture">
//     <p><strong>Email:</strong> ${email}</p>
//     <p><strong>Phone:</strong> ${phone}</p>
//     <h3>About Me</h3>
//     <p>${aboutMe}</p>
//     <h3>Experience</h3>
//     <p>${experience}</p>
//     <h3>Education</h3>
//     <p>${education}</p>
//     <h3>Skills</h3>
//     <ul>
//       ${skills.map(skill => `<li>${skill}</li>`).join('')}
//     </ul>
//   `;
// //Display the generated resume
// if (resumeContainer) {
//   resumeContainer.innerHTML = resumeHTML;
// } else {
//   console.error('The resume display element is missing.')
// }
// })
// 2nd ,method//
// const form = document.getElementById("resume-Form") as HTMLFormElement;
// const nameInput = document.getElementById("full-name") as HTMLInputElement;
// const emailInput = document.getElementById("email") as HTMLInputElement;
// const fileInput = document.getElementById("profile-Pic") as HTMLInputElement;
// const previewName = document.getElementById("previewName") as HTMLElement;
// const previewEmail = document.getElementById("previewEmail") as HTMLElement;
// const previewImage = document.getElementById("previewImage") as HTMLImageElement;
// // Update name and email in the live preview
// nameInput.addEventListener("input", () => {
//   previewName.textContent = nameInput.value || "Your Name";
// });
// emailInput.addEventListener("input", () => {
//   previewEmail.textContent = emailInput.value || "Your Email";
// });
// // Update image preview when a file is selected
// fileInput.addEventListener("change", () => {
//   const file = fileInput.files ? fileInput.files[0] : null;
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       previewImage.src = e.target?.result as string;
//       previewImage.style.display = "block";
//     };
//     reader.readAsDataURL(file);
//   }
// });
// // Prevent form submission and dynamically show generated resume
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   alert("Resume generated successfully!");
// });
// const form = document.getElementById("resume-form") as HTMLFormElement;
// const nameInput = document.getElementById("full-name") as HTMLInputElement;
// const emailInput = document.getElementById("email") as HTMLInputElement;
// const phoneInput = document.getElementById("phone") as HTMLInputElement;
// const aboutMeInput = document.getElementById("about-me") as HTMLTextAreaElement;
// const experienceInput = document.getElementById("experience") as HTMLTextAreaElement;
// const educationInput = document.getElementById("education") as HTMLTextAreaElement;
// const skillsInput = document.getElementById("skills") as HTMLInputElement;
// const fileInput = document.getElementById("profile-pic") as HTMLInputElement;
// const previewName = document.getElementById("previewName") as HTMLElement;
// const previewEmail = document.getElementById("previewEmail") as HTMLElement;
// const previewPhone = document.createElement("p"); // Add phone to preview
// const previewAboutMe = document.createElement("p"); // Add about me to preview
// const previewExperience = document.createElement("p"); // Add experience to preview
// const previewEducation = document.createElement("p"); // Add education to preview
// const previewSkills = document.createElement("p"); // Add skills to preview
// const previewImage = document.getElementById("previewImage") as HTMLImageElement;
// // Insert additional fields into the live preview
// const resumePreview = document.getElementById("resumePreview") as HTMLElement;
// resumePreview.appendChild(previewPhone);
// resumePreview.appendChild(previewAboutMe);
// resumePreview.appendChild(previewExperience);
// resumePreview.appendChild(previewEducation);
// resumePreview.appendChild(previewSkills);
// // Update name, email, and phone in the live preview
// nameInput.addEventListener("input", () => {
//   previewName.textContent = nameInput.value || "Your Name";
// });
// emailInput.addEventListener("input", () => {
//   previewEmail.textContent = emailInput.value || "Your Email";
// });
// phoneInput.addEventListener("input", () => {
//   previewPhone.textContent = phoneInput.value || "Your Phone Number";
// });
// // Update "About Me", experience, education, and skills in the live preview
// aboutMeInput.addEventListener("input", () => {
//   previewAboutMe.textContent = aboutMeInput.value || "A short bio...";
// });
// experienceInput.addEventListener("input", () => {
//   previewExperience.textContent = experienceInput.value || "Your experience will be displayed here";
// });
// educationInput.addEventListener("input", () => {
//   previewEducation.textContent = educationInput.value || "Your education will be displayed here";
// });
// skillsInput.addEventListener("input", () => {
//   const skills = skillsInput.value.split(',').map(skill => skill.trim()).filter(skill => skill !== '');
//   previewSkills.textContent = skills.length ? `Skills: ${skills.join(', ')}` : "Your skills will be displayed here";
// });
// // Update image preview when a file is selected
// fileInput.addEventListener("change", () => {
//   const file = fileInput.files ? fileInput.files[0] : null;
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       previewImage.src = e.target?.result as string;
//       previewImage.style.display = "block";
//     };
//     reader.readAsDataURL(file);
//   }
// });
// // Prevent form submission (optional: you could generate a downloadable PDF here)
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   alert("Resume generated successfully!");
// });
//DOM elements
var form = document.getElementById("resume-form");
var profile = document.getElementById("profile-pic");
var profileDisplay = document.getElementById("profileDisplay");
profile.addEventListener("change", function () {
    var _a;
    var file = (_a = profile.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file && file.type.startsWith("image/")) {
        var reader_1 = new FileReader();
        reader_1.onload = function () {
            profileDisplay.src = reader_1.result;
            CVProfile.src = reader_1.result;
            profileDisplay.style.display = "block"; // Show image
        };
        reader_1.readAsDataURL(file); // Convert image to DataURL for preview
    }
});
// dynamic resume builder
var CVProfile = document.getElementById("CVProfile");
var CVName = document.getElementById("CVName");
var CVEmail = (_a = document.getElementById("CVEmail")) === null || _a === void 0 ? void 0 : _a.querySelector("span");
var CVPhone = (_b = document.getElementById("CVPhone")) === null || _b === void 0 ? void 0 : _b.querySelector("span");
var CVAboutme = document.getElementById("CVAboutme");
var CVExperience = document.getElementById("CVExperience");
console.log(CVExperience);
var CVEducation = document.getElementById("CVEducation");
var CVSkills = document.getElementById("CVSkills");
form.addEventListener("input", function (event) {
    var target = event.target;
    switch (target.id) {
        case "full-name":
            CVName.textContent = target.value || "Your Name";
            break;
        case "email":
            CVEmail.textContent = target.value || "";
            break;
        case "phone":
            CVPhone.textContent = target.value || "";
            break;
        case "about-me":
            CVAboutme.textContent = target.value || "";
            break;
        case "education":
            CVEducation.textContent = target.value || "";
            break;
        case "my-experience":
            CVExperience.textContent = target.value || "";
            break;
        case "skills":
            CVSkills.textContent = target.value.split(',').map(function (skill) { return skill.trim(); }).join(', ') || "";
            break;
    }
});
