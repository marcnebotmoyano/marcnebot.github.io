document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to Marc Nebot\'s Website');
    loadProjects();
});

function loadProjects() {
    const projects = [
        { title: 'Generative Artificial Tabular Data Methods', description: 'TFG-FIB-GenerativeArtificialTabularDataMethods' }
    ];

    const projectsList = document.getElementById('projects-list');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        projectsList.appendChild(projectElement);
    });
}