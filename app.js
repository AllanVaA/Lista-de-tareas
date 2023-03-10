//Variables de DOM
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');
const toDoList = document.querySelector('.task');



//Contendor de las tareas
const tasksContainer = document.getElementById('tasksContainer');


//Fechas
const setDate=()=>{
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' });
    dateText.textContent = date.toLocaleString('es', { weekday: 'long' });
    dateMonth.textContent = date.toLocaleString('es', { month: 'short' });
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric' });

};



//Funcion que genera las tareas
const addNewTask= event=>{
    event.preventDefault();
    const {value}=event.target.taskText;
    const prueba = event.target.prueba;
    console.log(value)
    if(!value) return;
    const task = document.createElement('div')



    task.classList.add('task','roundBorder');
    task.addEventListener('click',changeTaskState);
    task.textContent=value;
    tasksContainer.prepend(task);
    event.target.reset();

    //Agrego los botones por aparte
    const btn= document.createElement('div')
    btn.classList.add('btn')


    const deleted = document.createElement('button');
    deleted.innerHTML='<i class="fas fa-trash"></i>';
    deleted.classList.add('delete-btn');
    btn.appendChild(deleted);

    const update = document.createElement('button');
    update.innerHTML='<i class="fas fa-list"></i>';
    update.classList.add('updt-btn');
    btn.appendChild(update);

    task.appendChild(btn);

}


//Funcion que elimina las tareas
const deleteTask=event=>{
event.preventDefault();

const {value}=event.target.btn
console.log(value);
};


//Cambiar el estado de las tareas

const changeTaskState= event=>{
    event.target.classList.toggle('done');
};


//Se ordena la lista
const order = () => {
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach( el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el)
    })
    return [...toDo, ...done];
}

const renderOrderedTasks = () => {
    order().forEach(el => tasksContainer.appendChild(el))
}

setDate();