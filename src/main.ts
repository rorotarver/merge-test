import './style.css'

interface Task {
    text: string;
    completed: boolean;
    archived?: boolean;
}
    

let tasks: Task [] = [];

const storedTasks = localStorage.getItem('tasks');

if (storedTasks) {
    tasks = JSON.parse(storedTasks) as Task[];
}


const addTodoText = document.getElementById('skrivTxt') as HTMLInputElement;

const addTodoBtn = document.getElementById('addTodobtn') as HTMLButtonElement;

const todo = document.getElementById('todo') as HTMLUListElement;

function addTask() {
    const text = addTodoText.value.trim(); 

    if (text === "") return; 

    const newTask: Task = {
        text: text,
        completed: false
    };

    tasks.push(newTask); 
    localStorage.setItem('tasks', JSON.stringify(tasks)); 
    renderTasks();
    addTodoText.value = ""; 
}

addTodoBtn.addEventListener('click', addTask);

function renderTasks() {
    todo.innerHTML = ""; 

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.text;
        if (task.completed) {
            li.style.textDecoration = 'line-through';
        }

        
        const doneBtn = document.createElement('button');
        doneBtn.textContent = '✔';
        doneBtn.addEventListener('click', () => {
            tasks[index].completed = !tasks[index].completed;
            localStorage.setItem('tasks', JSON.stringify(tasks));
            renderTasks();
        });

        li.appendChild(doneBtn);
        todo.appendChild(li);
    });
}

