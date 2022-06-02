const domManip = (() => {
    //code for side menu opening
    const menuToggle = (() => {
        const openMenuButton = document.querySelector('.open-menu-button');
        const menu = document.querySelector('.menu');
        openMenuButton.addEventListener('click', () => {
            menu.classList.toggle('menu-open');
        });
    })();
    //code to set/change name of project
    const editProjectName = (() => {
        const projectTitleButton = document.querySelector('.project-title-button');
        let nameOfProject = 'Default Project';
        projectTitleButton.addEventListener('click', () => {
            const title = document.querySelector('.title');
            const popUps = document.querySelector('.pop-ups');
            const editNameModal = document.createElement('div');
            editNameModal.classList.toggle('edit-project-name');
            const transparentBG = document.createElement('div');
            transparentBG.classList.toggle('transparent-background');
            const editName = document.createElement('div');
            editName.classList.toggle('edit-name');
            editName.innerHTML = `<label for="project-name">Edit Project Name</label>`;
            const projectName = document.createElement('input');
            projectName.type = 'text';
            projectName.id = 'project-name';
            projectName.placeholder = nameOfProject;
            const editNameSubmit = document.createElement('div');
            editNameSubmit.classList.toggle('edit-name-submit');
            editNameSubmit.textContent = 'Submit';
            editName.appendChild(projectName);
            editName.appendChild(editNameSubmit);
            transparentBG.appendChild(editName);
            editNameModal.appendChild(transparentBG);
            popUps.appendChild(editNameModal);
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    popUps.removeChild(editNameModal);
                }
            },{once:true});
            transparentBG.addEventListener('click', (e) => {
                if (e.target !== transparentBG) {
                    return;
                } else popUps.removeChild(editNameModal);
            });
            editNameSubmit.addEventListener('click', () => {
                if (!projectName.value) {
                    popUps.removeChild(editNameModal);
                } else {
                    nameOfProject = projectName.value;
                    title.textContent = projectName.value;
                    popUps.removeChild(editNameModal);
                }
            });
            projectName.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    if (!projectName.value) {
                        popUps.removeChild(editNameModal);
                    } else { 
                    nameOfProject = projectName.value;
                    title.textContent = projectName.value;
                    popUps.removeChild(editNameModal);
                    };
                }
            });
        })
    })();

})();

export { domManip } 