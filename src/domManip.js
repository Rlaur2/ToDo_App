import { parseISO } from "date-fns";
import { format } from "date-fns";
import { compareAsc } from "date-fns";
import { compareDesc } from "date-fns";

const allProjects = [];
const project = { tasks: [] };
project.name = "Default Project";
project.currentlyActive = true;
allProjects.push(project);
const domManip = (() => {
  //code for side menu opening
  const menuToggle = (() => {
    const openMenuButton = document.querySelector(".open-menu-button");
    const menu = document.querySelector(".menu");
    openMenuButton.addEventListener("mousedown", () => {
      menu.classList.toggle("menu-open");
    });
  })();
  //code to set/change name of project
  const editProjectName = (() => {
    const projectTitleButton = document.querySelector(".project-title-button");
    projectTitleButton.addEventListener("mousedown", () => {
      //code to append form to page
      const title = document.querySelector(".title");
      const popUps = document.querySelector(".pop-ups");
      const editNameModal = document.createElement("div");
      editNameModal.classList.toggle("edit-project-name");
      const transparentBG = document.createElement("div");
      transparentBG.classList.toggle("transparent-background");
      const editName = document.createElement("div");
      editName.classList.toggle("edit-name");
      editName.innerHTML = `<label for="project-name">Edit Project Name</label>`;
      const projectName = document.createElement("input");
      projectName.type = "text";
      projectName.id = "project-name";
      projectName.placeholder = project.name;
      const editNameSubmit = document.createElement("div");
      editNameSubmit.classList.toggle("edit-name-submit");
      editNameSubmit.textContent = "Submit";
      editName.appendChild(projectName);
      editName.appendChild(editNameSubmit);
      transparentBG.appendChild(editName);
      editNameModal.appendChild(transparentBG);
      popUps.appendChild(editNameModal);
      //code to cancel form if hitting escape or clicking away
      document.addEventListener("keydown", (e) => {
          if (e.key === "Escape") {
            popUps.removeChild(editNameModal);
          }
        },
        { once: true }
      );
      transparentBG.addEventListener("mousedown", (e) => {
        if (e.target !== transparentBG) {
          return;
        } else popUps.removeChild(editNameModal);
      });
      //code that ties name value to a variable that will be exported
      editNameSubmit.addEventListener("mousedown", () => {
        allProjects.forEach(project => {
            if (project.currentlyActive) {
                if (!projectName.value) {
                  popUps.removeChild(editNameModal);
                } else {
                  project.name = projectName.value;
                  title.textContent = projectName.value;
                  const projectTitles = document.querySelectorAll('.project');
                  for (let projectTitle of projectTitles) {
                    if (projectTitle.classList.contains('currently-active')) {
                        projectTitle.textContent = project.name;
                    }
                  }
                  popUps.removeChild(editNameModal);
                }
            } else return;
          });
        })
      projectName.addEventListener("keydown", (e) => {
        allProjects.forEach(project => {
            if (project.currentlyActive){
                if (e.key === "Enter") {
                  if (!projectName.value) {
                    popUps.removeChild(editNameModal);
                  } else {
                    project.name = projectName.value;
                    title.textContent = projectName.value;
                    popUps.removeChild(editNameModal);
                  }
                }
            } else return;
        });
      });
    });
  })();
  //code for initial project display and switching between active projects
  const initialProject = (() => {
    const projectTitle = document.querySelector('.project');
    allProjects.forEach(project => {
        if (project.currentlyActive) {
            projectTitle.textContent = project.name;
        } else return;
    })
  })();
  //code to add new projects
  const addProject = (() => {
    const newProjectButton = document.querySelector('.new-project-button');
    newProjectButton.addEventListener('mousedown', () => {
        //the classes might say edit project name but this is for
        //initial creation, not edited
        const popUps = document.querySelector(".pop-ups");
        const editNameModal = document.createElement("div");
        editNameModal.classList.toggle("edit-project-name");
        const transparentBG = document.createElement("div");
        transparentBG.classList.toggle("transparent-background");
        const editName = document.createElement("div");
        editName.classList.toggle("edit-name");
        editName.innerHTML = `<label for="project-name">Project Name</label>`;
        const projectName = document.createElement("input");
        projectName.type = "text";
        projectName.id = "project-name";
        projectName.placeholder = project.name;
        const editNameSubmit = document.createElement("div");
        editNameSubmit.classList.toggle("edit-name-submit");
        editNameSubmit.textContent = "Submit";
        editName.appendChild(projectName);
        editName.appendChild(editNameSubmit);
        transparentBG.appendChild(editName);
        editNameModal.appendChild(transparentBG);
        popUps.appendChild(editNameModal);
        //code to cancel form if hitting escape or clicking away
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          popUps.removeChild(editNameModal);
        }
      },
      { once: true }
        );
    transparentBG.addEventListener("mousedown", (e) => {
      if (e.target !== transparentBG) {
        return;
      } else popUps.removeChild(editNameModal);
        });
    
    editNameSubmit.addEventListener('mousedown', () => {
        const title = document.querySelector('.title');
        title.textContent = projectName.value;
        const projectArea = document.querySelector('.project-area');
        const projectAndTasks = document.createElement('div');
        projectAndTasks.classList.toggle('project-and-tasks');
        const projectContainer = document.createElement('div');
        projectContainer.classList.toggle('project-container');
        const editProject = document.createElement('div');
        editProject.classList.toggle('edit-project');
        editProject.innerHTML = '<img src="../src/images/dots-vertical.svg" alt="Edit or delete button">';
        const projectTitle = document.createElement('div');
        projectTitle.classList.toggle('project');
        const disableCurrentlyActiveClass = (() => {
            const projectTitles = document.querySelectorAll('.project');
            for (let title of projectTitles) {
                title.classList.remove('currently-active');
            }
        })();
        projectTitle.classList.toggle('currently-active');
        projectTitle.textContent = projectName.value;
        const arrow = document.createElement('img');
        arrow.classList.toggle('arrow');
        arrow.src = '../src/images/menu-right-outline.svg';
        arrow.alt = 'Task expand button';
        //makes all projects 'inactive'
        allProjects.forEach(project => {
            project.currentlyActive = false;
        });
        //project constructor, also makes it currently active
        const newProject = {
            name: projectName.value,
            currentlyActive: true,
            tasks: []
        };
        projectContainer.appendChild(editProject);
        projectContainer.appendChild(projectTitle);
        projectContainer.appendChild(arrow);
        projectAndTasks.appendChild(projectContainer);
        projectArea.appendChild(projectAndTasks);
        //code to switch between active projects
        projectTitle.addEventListener('mousedown', () => {
            const projectTitles = document.querySelectorAll('.project');
            for (let title of projectTitles) {
                title.classList.remove('currently-active');
            }
            projectTitle.classList.add('currently-active');
            allProjects.forEach(project => {
                project.currentlyActive = false;
            });
            newProject.currentlyActive = true;
            title.textContent = newProject.name;
        });
        allProjects.push(newProject);
        popUps.removeChild(editNameModal);
        });
        //stop testing with enter ATM, copy+paste when all down
        projectName.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const title = document.querySelector('.title');
            title.textContent = projectName.value;
            const projectArea = document.querySelector('.project-area');
            const projectAndTasks = document.createElement('div');
            projectAndTasks.classList.toggle('project-and-tasks');
            const projectContainer = document.createElement('div');
            projectContainer.classList.toggle('project-container');
            const editProject = document.createElement('div');
            editProject.classList.toggle('edit-project');
            editProject.innerHTML = '<img src="../src/images/dots-vertical.svg" alt="Edit or delete button">';
            const projectTitle = document.createElement('div');
            projectTitle.classList.toggle('project');
            projectTitle.classList.toggle('currently-active');
            projectTitle.textContent = projectName.value;
            const arrow = document.createElement('img');
            arrow.classList.toggle('arrow');
            arrow.src = '../src/images/menu-right-outline.svg';
            arrow.alt = 'Task expand button';
            //makes all projects 'inactive'
            allProjects.forEach(project => {
                project.currentlyActive = false;
            });
            //project constructor, also makes it currently active
            const newProject = {
                name: projectName.value,
                currentlyActive: true,
                tasks: []
            };
            projectContainer.appendChild(editProject);
            projectContainer.appendChild(projectTitle);
            projectContainer.appendChild(arrow);
            projectAndTasks.appendChild(projectContainer);
            projectArea.appendChild(projectAndTasks);
            allProjects.push(newProject);
            popUps.removeChild(editNameModal);
            };
        });
    })
  })();
  //code to add new tasks to current project
  let priorityChosen = "";
  const addNewTask = (() => {
    //code to append form to page
    const newTaskButton = document.querySelector(".new-task-button");
    newTaskButton.addEventListener("mousedown", () => {
      const popUps = document.querySelector(".pop-ups");
      const taskInputDetails = document.createElement("div");
      taskInputDetails.classList.toggle("task-input-details");
      const transparentBG = document.createElement("div");
      transparentBG.classList.toggle("transparent-background");
      const taskInputForm = document.createElement("div");
      taskInputForm.classList.toggle("task-input-form");
      const taskHeader = document.createElement("div");
      taskHeader.classList.toggle("task-header");
      taskHeader.textContent = "New Task";
      const dueDateTitle = document.createElement("label");
      dueDateTitle.classList.toggle("due-date-title");
      dueDateTitle.for = "date";
      dueDateTitle.textContent = "Due Date:";
      const taskTitleInput = document.createElement("div");
      taskTitleInput.classList.toggle("task-title-input");
      const innerTaskTitleInput = document.createElement("input");
      innerTaskTitleInput.type = "text";
      innerTaskTitleInput.placeholder = "Title";
      taskTitleInput.appendChild(innerTaskTitleInput);
      const dueDatePicker = document.createElement("div");
      dueDatePicker.classList.toggle("due-date-picker");
      const innerDueDatePicker = document.createElement("input");
      innerDueDatePicker.type = "date";
      innerDueDatePicker.name = "date";
      innerDueDatePicker.id = "date";
      dueDatePicker.appendChild(innerDueDatePicker);
      const taskDescriptionInput = document.createElement("div");
      taskDescriptionInput.classList.toggle("task-description-input");
      const innerTaskDescriptionInput = document.createElement("textarea");
      innerTaskDescriptionInput.name = "task-description";
      innerTaskDescriptionInput.id = "task-description";
      innerTaskDescriptionInput.cols = "21";
      innerTaskDescriptionInput.rows = "6";
      innerTaskDescriptionInput.placeholder = "Description";
      taskDescriptionInput.appendChild(innerTaskDescriptionInput);
      const priorityPicker = document.createElement("div");
      priorityPicker.classList.toggle("priority-picker");
      const priority = document.createElement("div");
      priority.textContent = "Priority:";
      const low = document.createElement("div");
      low.id = "low";
      low.classList.toggle("low");
      low.classList.toggle("circle");
      low.classList.toggle("active");
      const medium = document.createElement("div");
      medium.id = "medium";
      medium.classList.toggle("medium");
      medium.classList.toggle("circle");
      const high = document.createElement("div");
      high.id = "high";
      high.classList.toggle("high");
      high.classList.toggle("circle");
      priorityPicker.appendChild(priority);
      priorityPicker.appendChild(low);
      priorityPicker.appendChild(medium);
      priorityPicker.appendChild(high);
      const finishButton = document.createElement("div");
      finishButton.classList.toggle("finish-button");
      finishButton.textContent = "Finish";
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
          const circles = document.querySelectorAll(".circle");
          if (e.target.classList.contains("active")) {
            return;
          } else {
            for (let circle of circles) {
              if (circle === e.target) {
                circle.classList.add("active");
              } else circle.classList.remove("active");
            }
          }
        };
        low.addEventListener("mousedown", changer);
        medium.addEventListener("mousedown", changer);
        high.addEventListener("mousedown", changer);
      })();
      //code to include the values from the form into a usable form
      finishButton.addEventListener("mousedown", () => {
        if (!innerTaskTitleInput.value || !innerDueDatePicker.value) {
          alert("Please enter a title and due date");
          return;
        }
        const taskTitle = innerTaskTitleInput.value;
        const dueDate = innerDueDatePicker.value;
        const taskDescription = innerTaskDescriptionInput.value;
        const circles = document.querySelectorAll(".circle");
        for (let circle of circles) {
          if (circle.classList.contains("active")) {
            priorityChosen = circle.id;
          }
        }
        const date = parseISO(dueDate);
        const formattedDate = format(date, "PPP");
        const timeCreated = new Date();
        const input = {
          taskTitle,
          dueDate,
          formattedDate,
          taskDescription,
          priorityChosen,
          position: project.tasks.length,
          taskCompletion: 'Incomplete',
          timeCreated,
        };
        allProjects.forEach(project => {
            if (project.currentlyActive) {
                project.tasks.push(input);
            } else return;
        });
        displayTaskDetails(input);
        popUps.removeChild(taskInputDetails);
      });

      //code that displays the task details
      const displayTaskDetails = (obj) => {
        const incompleteTasks = document.querySelector(".incomplete-tasks");
        const completeTasks = document.querySelector('.complete-tasks');
        const projectDetails = document.createElement("div");
        projectDetails.classList.toggle("project-details");
        const projectMainDetails = document.createElement("div");
        projectMainDetails.classList.toggle("project-main-details");
        const priorityDetail = document.createElement("div");
        priorityDetail.classList.toggle("priority-detail");
        priorityDetail.textContent = "Priority:";
        const actualPriority = document.createElement("div");
        actualPriority.classList.toggle("actual-priority");
        priorityDetail.appendChild(actualPriority);
        const taskTitleDetail = document.createElement("div");
        taskTitleDetail.classList.toggle("task-title-detail");
        const dueDateDetail = document.createElement("div");
        dueDateDetail.classList.toggle("due-date-detail");
        const completionStatus = document.createElement("div");
        completionStatus.classList.toggle("completion-status");
        completionStatus.classList.toggle("incomplete");
        completionStatus.textContent = "Incomplete";
        if (priorityChosen === "low") {
          actualPriority.classList.toggle("low-priority");
        } else if (priorityChosen === "medium") {
          actualPriority.classList.toggle("medium-priority");
        } else {
          actualPriority.classList.toggle("high-priority");
        }
        taskTitleDetail.textContent = obj.taskTitle;
        dueDateDetail.textContent = obj.formattedDate;
        projectMainDetails.appendChild(priorityDetail);
        projectMainDetails.appendChild(taskTitleDetail);
        projectMainDetails.appendChild(dueDateDetail);
        projectMainDetails.appendChild(completionStatus);
        projectDetails.appendChild(projectMainDetails);
        const expandedDetails = document.createElement("div");
        expandedDetails.classList.toggle("expanded-details");
        expandedDetails.classList.toggle("hidden");
        const taskAndButton = document.createElement("div");
        taskAndButton.classList.toggle("task-and-button");
        const expandedTaskTitle = document.createElement("div");
        expandedTaskTitle.classList.toggle("expanded-task-title");
        expandedTaskTitle.textContent = obj.taskTitle;
        const taskButton = document.createElement("div");
        taskButton.classList.toggle("task-button");
        taskButton.innerHTML =
          '<img src="../src/images/dots-vertical-black.svg" class="edit-and-delete" alt="edit task button">';
        const expandedTaskDescription = document.createElement("div");
        expandedTaskDescription.classList.toggle("expanded-task-description");
        expandedTaskDescription.textContent = obj.taskDescription;
        taskAndButton.appendChild(expandedTaskTitle);
        taskAndButton.appendChild(taskButton);
        expandedDetails.appendChild(taskAndButton);
        expandedDetails.appendChild(expandedTaskDescription);
        projectDetails.appendChild(expandedDetails);
        incompleteTasks.appendChild(projectDetails);
        projectMainDetails.addEventListener("mousedown", (e) => {
            if(e.target.classList.contains('completion-status')){
                return;
            };
            expandedDetails.classList.toggle("hidden");
        });
        //code to be added to each task in the object so that it can
        //be removed and deleted from outside scope. This should be
        //refactored as part of the migration to make the project
        //object into it's own module as it should be
        obj.clear = () => {
            completeTasks.removeChild(projectDetails);
          };
        obj.sortDisplay = () => {
            if (obj.taskCompletion === 'Incomplete') {
                incompleteTasks.removeChild(projectDetails);
                incompleteTasks.appendChild(projectDetails);
            } else {
                completeTasks.removeChild(projectDetails);
                completeTasks.appendChild(projectDetails);
            }
        };  
        //code to set for completion button that will set completion status
        completionStatus.addEventListener('mousedown', () => {
            //from incomplete to complete
            if (completionStatus.classList.contains('incomplete')) {
                completionStatus.classList.toggle('incomplete');
                completionStatus.classList.toggle('complete');
                completionStatus.textContent = 'Complete';
                obj.taskCompletion = 'Complete';
                incompleteTasks.removeChild(projectDetails);
                completeTasks.appendChild(projectDetails);
            } else {
                //from complete to incomplete
                completionStatus.classList.toggle('complete');
                completionStatus.classList.toggle('incomplete');
                completionStatus.textContent = 'Incomplete';
                obj.taskCompletion = 'Incomplete';
                completeTasks.removeChild(projectDetails);
                incompleteTasks.appendChild(projectDetails);
            };
        });
        //code to create the edit/delete popup
        taskButton.addEventListener("mousedown", () => {
          const popUpMenu = document.createElement("div");
          popUpMenu.classList.toggle("pop-up-menu");
          const edit = document.createElement("div");
          edit.classList.toggle("edit");
          edit.textContent = "Edit";
          const deleteButton = document.createElement("div");
          deleteButton.classList.toggle("delete-button");
          deleteButton.textContent = "Delete";
          popUpMenu.appendChild(edit);
          popUpMenu.appendChild(deleteButton);
          taskButton.appendChild(popUpMenu);
          //code to remove edit/delete button when clicking away
          //code works but event listener gets multiplied when
          //clicking on the items that don't remove the listener
          const removeMenu = (e) => {
            if (
              e.target.classList.contains("edit-and-delete") ||
              e.target.classList.contains("delete-button")
            ) {
              return;
            } else {
              taskButton.removeChild(popUpMenu);
              document.removeEventListener("mousedown", removeMenu);
            }
          };
          document.addEventListener("mousedown", removeMenu);
          //code to handle editing the task info
          edit.addEventListener("mousedown", () => {
            const popUps = document.querySelector(".pop-ups");
            const taskInputDetails = document.createElement("div");
            taskInputDetails.classList.toggle("task-input-details");
            const transparentBG = document.createElement("div");
            transparentBG.classList.toggle("transparent-background");
            const taskInputForm = document.createElement("div");
            taskInputForm.classList.toggle("task-input-form");
            const taskHeader = document.createElement("div");
            taskHeader.classList.toggle("task-header");
            taskHeader.textContent = "Edit Task";
            const dueDateTitle = document.createElement("label");
            dueDateTitle.classList.toggle("due-date-title");
            dueDateTitle.for = "date";
            dueDateTitle.textContent = "Due Date:";
            const taskTitleInput = document.createElement("div");
            taskTitleInput.classList.toggle("task-title-input");
            const innerTaskTitleInput = document.createElement("input");
            innerTaskTitleInput.type = "text";
            innerTaskTitleInput.value = obj.taskTitle;
            taskTitleInput.appendChild(innerTaskTitleInput);
            const dueDatePicker = document.createElement("div");
            dueDatePicker.classList.toggle("due-date-picker");
            const innerDueDatePicker = document.createElement("input");
            innerDueDatePicker.type = "date";
            innerDueDatePicker.name = "date";
            innerDueDatePicker.id = "date";
            innerDueDatePicker.value = obj.dueDate;
            dueDatePicker.appendChild(innerDueDatePicker);
            const taskDescriptionInput = document.createElement("div");
            taskDescriptionInput.classList.toggle("task-description-input");
            const innerTaskDescriptionInput =
              document.createElement("textarea");
            innerTaskDescriptionInput.name = "task-description";
            innerTaskDescriptionInput.id = "task-description";
            innerTaskDescriptionInput.cols = "21";
            innerTaskDescriptionInput.rows = "6";
            innerTaskDescriptionInput.value = obj.taskDescription;
            taskDescriptionInput.appendChild(innerTaskDescriptionInput);
            const priorityPicker = document.createElement("div");
            priorityPicker.classList.toggle("priority-picker");
            const priority = document.createElement("div");
            priority.textContent = "Priority:";
            const low = document.createElement("div");
            low.id = "low";
            low.classList.toggle("low");
            low.classList.toggle("circle");
            low.classList.toggle("active");
            const medium = document.createElement("div");
            medium.id = "medium";
            medium.classList.toggle("medium");
            medium.classList.toggle("circle");
            const high = document.createElement("div");
            high.id = "high";
            high.classList.toggle("high");
            high.classList.toggle("circle");
            priorityPicker.appendChild(priority);
            priorityPicker.appendChild(low);
            priorityPicker.appendChild(medium);
            priorityPicker.appendChild(high);
            const finishButton = document.createElement("div");
            finishButton.classList.toggle("finish-button");
            finishButton.textContent = "Finish";
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
            const priorityChanger = (() => {
              const changer = (e) => {
                const circles = document.querySelectorAll(".circle");
                if (e.target.classList.contains("active")) {
                  return;
                } else {
                  for (let circle of circles) {
                    if (circle === e.target) {
                      circle.classList.add("active");
                    } else circle.classList.remove("active");
                  }
                }
              };
              low.addEventListener("mousedown", changer);
              medium.addEventListener("mousedown", changer);
              high.addEventListener("mousedown", changer);
            })();
            //code to escape edit form with escape or or clicking away
            document.addEventListener("keydown", (e) => {
                if (e.key === "Escape") {
                  popUps.removeChild(taskInputDetails);
                }
              },
              { once: true }
            );

            transparentBG.addEventListener("mousedown", (e) => {
              if (e.target !== transparentBG) {
                return;
              } else popUps.removeChild(taskInputDetails);
            });
            //enter more edit stuff here
            finishButton.addEventListener("mousedown", () => {
              obj.taskTitle = innerTaskTitleInput.value;
              obj.dueDate = innerDueDatePicker.value;
              obj.taskDescription = innerTaskDescriptionInput.value;
              const circles = document.querySelectorAll(".circle");
              for (let circle of circles) {
                if (circle.classList.contains("active")) {
                  obj.priorityChosen = circle.id;
                }
              }
              const date = parseISO(obj.dueDate);
              const formattedDate = format(date, "PPP");
              obj.formattedDate = formattedDate;
              //these are the live edits to the current task box
              if (obj.priorityChosen === "low") {
                actualPriority.classList.add("low-priority");
                actualPriority.classList.remove("medium-priority");
                actualPriority.classList.remove("high-priority");
              } else if (obj.priorityChosen === "medium") {
                actualPriority.classList.add("medium-priority");
                actualPriority.classList.remove("low-priority");
                actualPriority.classList.remove("high-priority");
              } else {
                actualPriority.classList.add("high-priority");
                actualPriority.classList.remove("medium-priority");
                actualPriority.classList.remove("low-priority");
              }
              taskTitleDetail.textContent = obj.taskTitle;
              dueDateDetail.textContent = obj.formattedDate;
              expandedTaskTitle.textContent = obj.taskTitle;
              expandedTaskDescription.textContent = obj.taskDescription;
              popUps.removeChild(taskInputDetails);
            });
          });
          //code to delete task
          deleteButton.addEventListener('mousedown', () => {
              if (obj.taskCompletion === 'Incomplete') {
                  incompleteTasks.removeChild(projectDetails);
                } else {
                    completeTasks.removeChild(projectDetails);
                }
                allProjects.forEach(project => {
                    if (project.currentlyActive) {
                        project.tasks.splice(obj.position, 1);
                        project.tasks.forEach((task, index) => {
                            task.position = index;
                        });
                    } else return;
                })
          });
        });
      };
      //this needs linting, the above curly bracket is end of display function
      //code to escape form with escape or or clicking away
      document.addEventListener("keydown", (e) => {
          if (e.key === "Escape") {
            popUps.removeChild(taskInputDetails);
          }
        },
        { once: true }
      );

      transparentBG.addEventListener("mousedown", (e) => {
        if (e.target !== transparentBG) {
          return;
        } else popUps.removeChild(taskInputDetails);
      });
    });
  })();
  //the above curly bracket marks end of 'addNewTask' function
  //this code is just for debugging. Be sure to delete before launching
  document.addEventListener('keydown',(e) => {
      if (e.key === '9') {
          console.log(allProjects);
      };
  });
  //code for the 'Clear completed tasks' button
  const clearCompleted = (() =>{
     const clearButton = document.querySelector('.clear-complete');
      clearButton.addEventListener('mousedown', () => {
          allProjects.forEach(project => {
              if (project.currentlyActive) {
                  project.tasks = project.tasks.filter((task) => {
                      if (task.taskCompletion === 'Complete') {
                        task.clear();  
                      } else return task;
                  });
              } else return;
          });
      });
  })();
  //code for the sorting buttons
  //the three query selected buttons are not used, they can be deleted
  const sort = (() => {
    const sortingMethod = document.querySelector('.sorting-method');
    const sortingReverse = document.querySelector('.sorting-reverse');
    const dropDownSort = document.querySelector('.drop-down-sort');
    const dateCreatedSort = document.querySelector('.date-created');
    const prioritySort = document.querySelector('.priority');
    const dueDateSort = document.querySelector('.due-date');
    sortingMethod.addEventListener('mousedown', () => {
        dropDownSort.classList.toggle('transist');
        dropDownSort.classList.remove('invisible');
    });
    dropDownSort.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('date-created')){
            sortingMethod.textContent = 'Date created';
            allProjects.forEach(project => {
                if (project.currentlyActive) {
                    const sortByCreation = project.tasks.sort(function(a,b) {
                        return compareAsc(a.timeCreated,b.timeCreated);
                    });
                    sortByCreation.forEach(task => {
                        task.sortDisplay();
                    });
                } else return;
            })
        } else if (e.target.classList.contains('priority')){
            sortingMethod.textContent = 'Priority';
            allProjects.forEach(project => {
                if (project.currentlyActive) {
                    project.tasks.forEach(task => {
                        if (task.priorityChosen === 'low') {
                            task.priorityGrade = -1;
                        } else if (task.priorityChosen === 'medium') {
                            task.priorityGrade = 0;
                        } else {
                            task.priorityGrade = 1;
                        }
                    });
                    const sortByPriority = project.tasks.sort((a,b) => {
                        return a.priorityGrade - b.priorityGrade;
                    });
                    sortByPriority.forEach(task => {
                        task.sortDisplay();
                    });
                } else return;
            })
        } else {
            sortingMethod.textContent = 'Due date';
            allProjects.forEach(project => {
                if (project.currentlyActive) {
                    const sortByDue = project.tasks.sort(function(a,b){
                        return compareAsc(parseISO(a.dueDate), parseISO(b.dueDate));
                    });
                    sortByDue.forEach(task => {
                        task.sortDisplay();
                    });
                } else return;
            })
        };
        dropDownSort.classList.toggle('transist');
        dropDownSort.classList.add('invisible');
        sortingReverse.classList.remove('reversed');
    });
    sortingReverse.addEventListener('mousedown', () => {
        if (!sortingReverse.classList.contains('reversed')){
        if (sortingMethod.textContent === 'Date created') {
            allProjects.forEach(project => {
                if (project.currentlyActive) {
                    const sortByCreation = project.tasks.sort(function(a,b) {
                        return compareDesc(a.timeCreated,b.timeCreated);
                    });
                    sortByCreation.forEach(task => {
                        task.sortDisplay();
                    });
                } else return;
            })
        } else if (sortingMethod.textContent === 'Priority') {
            allProjects.forEach(project => {
                if (project.currentlyActive) {
                    project.tasks.forEach(task => {
                        if (task.priorityChosen === 'low') {
                            task.priorityGrade = 1;
                        } else if (task.priorityChosen === 'medium') {
                            task.priorityGrade = 0;
                        } else {
                            task.priorityGrade = -1;
                        }
                    });
                    const sortByPriority = project.tasks.sort((a,b) => {
                        return a.priorityGrade - b.priorityGrade;
                    });
                    sortByPriority.forEach(task => {
                        task.sortDisplay();
                    });
                } else return;
            })
        } else {
            allProjects.forEach(project => {
                if (project.currentlyActive){
                    const sortByDue = project.tasks.sort(function(a,b){
                        return compareDesc(parseISO(a.dueDate), parseISO(b.dueDate));
                    });
                    sortByDue.forEach(task => {
                        task.sortDisplay();
                    })
                } else return;
            })
        }
        sortingReverse.classList.toggle('reversed');
    } else {
        if (sortingMethod.textContent === 'Date created') {
            allProjects.forEach(project => {
                if (project.currentlyActive) {
                    const sortByCreation = project.tasks.sort(function(a,b) {
                        return compareAsc(a.timeCreated,b.timeCreated);
                    });
                    sortByCreation.forEach(task => {
                        task.sortDisplay();
                    });
                } else return;
            })
        } else if (sortingMethod.textContent === 'Priority') {
            allProjects.forEach(project => {
                if(project.currentlyActive) {
                    project.tasks.forEach(task => {
                        if (task.priorityChosen === 'low') {
                            task.priorityGrade = -1;
                        } else if (task.priorityChosen === 'medium') {
                            task.priorityGrade = 0;
                        } else {
                            task.priorityGrade = 1;
                        }
                    });
                    const sortByPriority = project.tasks.sort((a,b) => {
                        return a.priorityGrade - b.priorityGrade;
                    });
                    sortByPriority.forEach(task => {
                        task.sortDisplay();
                    });
                } else return;
            })
        } else {
            allProjects.forEach(project => {
                if (project.currentlyActive) {
                    const sortByDue = project.tasks.sort(function(a,b){
                        return compareAsc(parseISO(a.dueDate), parseISO(b.dueDate));
                    });
                    sortByDue.forEach(task => {
                        task.sortDisplay();
                    });
                } else return;
            })
        }
        sortingReverse.classList.toggle('reversed');
    }
})
  })();
})();

export { domManip };
export { project };