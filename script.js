const input = document.querySelector('input');
const buttonAdd = document.querySelector('.button_add');
const list = document.querySelector('ul');

const listTasks = [];

const addTask = () => {
    const taskText = input.value.trim();
    if (taskText === '') return;
    listTasks.push(task = {text: taskText, complete: false});
    input.value = '';
    updateTaskList();
};

const updateTaskList = () => {
    list.innerHTML = '';
    listTasks.forEach((task, id) => {
        const li = document.createElement('li');
        li.dataset.id = id;
        const divTask = document.createElement('div');
        if (task.complete) {
            divTask.classList.add('complete');
        }
        divTask.classList.add('task');
        divTask.innerText = task.text;
        li.appendChild(divTask);
        const buttonComplete = document.createElement('button');
        buttonComplete.classList.add('button_complete');
        buttonComplete.innerHTML = '<i class="fa-solid fa-check"></i>';
        buttonComplete.addEventListener('click', () => completeTask(id));
        li.appendChild(buttonComplete);
        const buttonDelete = document.createElement('button');
        buttonDelete.classList.add('button_delete');
        buttonDelete.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        buttonDelete.addEventListener('click', () => deleteTask(id));
        li.appendChild(buttonDelete);
        list.prepend(li);
    });
};

const completeTask = (id) => {
    if (listTasks[id].complete) {
        listTasks[id].complete = false;
    } else {
        listTasks[id].complete = true;
    }
    updateTaskList();
};

const deleteTask = (id) => {
    listTasks.splice(id, 1);
    updateTaskList();
};


buttonAdd.addEventListener('click', addTask);