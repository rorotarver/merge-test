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