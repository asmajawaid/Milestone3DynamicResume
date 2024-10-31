
//DOM elements
const form = document.getElementById("resume-form") as HTMLElement;
const profile = document.getElementById("profile-pic") as HTMLInputElement;
const profileDisplay = document.getElementById("profileDisplay") as HTMLImageElement;

profile.addEventListener("change", () =>{
  const file = profile.files?.[0];

  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = () => {
      profileDisplay.src = reader.result as string;
      CVProfile.src = reader.result as string;
      profileDisplay.style.display = "block"; // Show image
    };

    reader.readAsDataURL(file); // Convert image to DataURL for preview
  }
})

// dynamic resume builder

const CVProfile = document.getElementById("CVProfile") as HTMLImageElement
const CVName = document.getElementById("CVName") as HTMLHeadingElement
const CVEmail = document.getElementById("CVEmail")?.querySelector("span") as HTMLSpanElement
const CVPhone = document.getElementById("CVPhone")?.querySelector("span") as HTMLSpanElement 
const CVAboutme = document.getElementById("CVAboutme") as HTMLParagraphElement
const CVExperience = document.getElementById("CVExperience") as HTMLParagraphElement
console.log(CVExperience)
const CVEducation = document.getElementById("CVEducation") as HTMLParagraphElement
const CVSkills = document.getElementById("CVSkills") as HTMLParagraphElement


form.addEventListener("input", (event: Event) => {
  const target = event.target as HTMLInputElement | HTMLTextAreaElement;

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
      CVSkills.textContent = target.value.split(',').map(skill => skill.trim()).join(', ') || "";
      break;
  }
});
