const form = document.getElementById("add-project-form");
const projectsList = document.getElementById("projects-list");

function toggleForm() {
  form.classList.toggle("hidden");
}

function addProject() {
  const name = document.getElementById("project-name").value.trim();
  const description = document.getElementById("project-description").value.trim();

  if (!name || !description) {
    alert("Please enter both name and description.");
    return;
  }

  const projectDiv = document.createElement("div");
  projectDiv.className = "project";
  projectDiv.innerHTML = `
    <h3>${name}</h3>
    <p>${description}</p>
    <button onclick="this.parentElement.remove()">Delete</button>
  `;

  projectsList.appendChild(projectDiv);

  document.getElementById("project-name").value = "";
  document.getElementById("project-description").value = "";
  form.classList.add("hidden");
}
