fetch('https://api.github.com/users/mariiakirkpatrick/repos')
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(repositories => {
    const projectSection = document.getElementById('Projects');
    const projectList = projectSection.querySelector('ul');

    for (let i = 0; i < repositories.length; i++) {
        let project = document.createElement('li');
        project.innerText = repositories[i].name; 
        projectList.appendChild(project); 
    }
})
.catch(error => {
    console.error('Error fetching data:', error);
});
