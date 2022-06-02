const project = { tasks: [] };
project.name = 'Default Project';
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
        projectTitleButton.addEventListener('click', () => {
            //code to append form to page
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
            projectName.placeholder = project.name;
            const editNameSubmit = document.createElement('div');
            editNameSubmit.classList.toggle('edit-name-submit');
            editNameSubmit.textContent = 'Submit';
            editName.appendChild(projectName);
            editName.appendChild(editNameSubmit);
            transparentBG.appendChild(editName);
            editNameModal.appendChild(transparentBG);
            popUps.appendChild(editNameModal);
            //code to cancel form if hitting escape or clicking away
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
            //code that ties name value to a variable that will be exported
            editNameSubmit.addEventListener('click', () => {
                if (!projectName.value) {
                    popUps.removeChild(editNameModal);
                } else {
                    project.name = projectName.value;
                    title.textContent = projectName.value;
                    popUps.removeChild(editNameModal);
                }
            });
            projectName.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    if (!projectName.value) {
                        popUps.removeChild(editNameModal);
                    } else { 
                    project.name = projectName.value;
                    title.textContent = projectName.value;
                    popUps.removeChild(editNameModal);
                    };
                }
            });
        })
    })();
    //code to add new tasks to current project
    const addNewTask = (() => {
       //code to append form to page
        const newTaskButton = document.querySelector('.new-task-button');
        newTaskButton.addEventListener('click', () => {
            const popUps = document.querySelector('.pop-ups');
            const taskInputDetails = document.createElement('div');
            taskInputDetails.classList.toggle('task-input-details');
            const transparentBG = document.createElement('div');
            transparentBG.classList.toggle('transparent-background');
            const taskInputForm = document.createElement('div');
            taskInputForm.classList.toggle('task-input-form');
            const taskHeader = document.createElement('div');
            taskHeader.classList.toggle('task-header');
            taskHeader.textContent = 'New Task';
            const dueDateTitle = document.createElement('label');
            dueDateTitle.classList.toggle('due-date-title');
            dueDateTitle.for = 'date';
            dueDateTitle.textContent = 'Due Date:';
            const taskTitleInput = document.createElement('div');
            taskTitleInput.classList.toggle('task-title-input');
            const innerTaskTitleInput = document.createElement('input');
            innerTaskTitleInput.type = 'text';
            innerTaskTitleInput.placeholder = 'Title';
            taskTitleInput.appendChild(innerTaskTitleInput);
            const dueDatePicker = document.createElement('div');
            dueDatePicker.classList.toggle('due-date-picker');
            const innerDueDatePicker = document.createElement('input');
            innerDueDatePicker.type = 'date';
            innerDueDatePicker.name = 'date';
            innerDueDatePicker.id = 'date';
            dueDatePicker.appendChild(innerDueDatePicker);
            const taskDescriptionInput = document.createElement('div');
            taskDescriptionInput.classList.toggle('task-description-input');
            const innerTaskDescriptionInput = document.createElement('textarea');
            innerTaskDescriptionInput.name = 'task-description';
            innerTaskDescriptionInput.id = 'task-description';
            innerTaskDescriptionInput.cols = '21';
            innerTaskDescriptionInput.rows = '6';
            innerTaskDescriptionInput.placeholder = 'Description';
            taskDescriptionInput.appendChild(innerTaskDescriptionInput);
            const priorityPicker = document.createElement('div');
            priorityPicker.classList.toggle('priority-picker');
            const priority = document.createElement('div');
            priority.textContent = 'Priority:';
            const low = document.createElement('div');
            low.id = 'low';
            low.classList.toggle('low');
            low.classList.toggle('circle');
            low.classList.toggle('active');
            const medium = document.createElement('div');
            medium.id = 'medium';
            medium.classList.toggle('medium');
            medium.classList.toggle('circle');
            const high = document.createElement('div');
            high.id = 'high';
            high.classList.toggle('high');
            high.classList.toggle('circle');
            priorityPicker.appendChild(priority);
            priorityPicker.appendChild(low);
            priorityPicker.appendChild(medium);
            priorityPicker.appendChild(high);
            const finishButton = document.createElement('div');
            finishButton.classList.toggle('finish-button');
            finishButton.textContent = 'Finish';
            taskInputForm.appendChild(taskHeader);
            taskInputForm.appendChild(dueDateTitle);
            taskInputForm.appendChild(taskTitleInput);
            taskInputForm.appendChild(dueDatePicker);
            taskInputForm.appendChild(taskDescriptionInput);
            taskInputForm.appendChild(priorityPicker);
            taskInputForm.appendChild(finishButton);
            transparentBG.appendChild(taskInputForm);
            taskInputDetails.appendChild(transparentBG);
            popUps.appendChild(taskInputDetails);
            //code to change priority
            const priorityChanger = (() => {
                const changer = (e) => {
                    const circles = document.querySelectorAll('.circle');
                    if (e.target.classList.contains('active')) {
                        return;
                    } else {
                        for (let circle of circles) {
                            if (circle === e.target) {
                                circle.classList.add('active');
                            } else circle.classList.remove('active');
                        }
                    }
                }
                low.addEventListener('click',changer);
                medium.addEventListener('click',changer);
                high.addEventListener('click',changer);
            })();
            //code to include the values from the form into a usable form
            finishButton.addEventListener('click', () => {
                if (!innerTaskTitleInput.value || !innerDueDatePicker.value) {
                    alert('Please enter a title and due date');
                    return;
                };
                const taskTitle = innerTaskTitleInput.value;
                const dueDate = innerDueDatePicker.value;
                const taskDescription = innerTaskDescriptionInput.value;
                let priorityChosen = '';
                const circles = document.querySelectorAll('.circle');
                for (let circle of circles) {
                    if (circle.classList.contains('active')) {
                        priorityChosen = circle.id;
                    }
                };
                const input = {taskTitle, dueDate, taskDescription, priorityChosen}
                project.tasks.push(input);
                popUps.removeChild(taskInputDetails);
            });
            

            //code to escape form with escape or or clicking away
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    popUps.removeChild(taskInputDetails);
                }
            },{once:true});

            transparentBG.addEventListener('click', (e) => {
                if (e.target !== transparentBG) {
                    return;
                } else popUps.removeChild(taskInputDetails);
            });
        })
    })();
})();

export { domManip };
export { project }; 