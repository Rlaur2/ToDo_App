import './style.css';
import { domManip } from './domManip';
import { project } from './domManip';


const Projects = () => {
    const newProject = (projectName) => {
        return {
            projectName,
            tasks: [],
            currentlyActive: true
        };
    };
    const toDos = (taskTitle,dueDate,formattedDate,taskDescription,priorityChosen,timeCreated) => {
        return {
          taskTitle,
          dueDate,
          formattedDate,
          taskDescription,
          priorityChosen,
          timeCreated,
          position: project.tasks.length,
          taskCompletion: 'Incomplete',
        };
    };
};
