
const todos = document.querySelectorAll('.todo');
const todo_create = document.querySelectorAll('#todo');
const all_status = document.querySelectorAll('.status');
const add_todo_button = document.querySelector('#add-button-id');
const new_todo = document.querySelector('#todo-input-id');
let create_delete_button = document.createElement('button');
const todo_array = [];

const status_1 = document.querySelector('#status1');
//const status_2 = document.querySelector('.status2');
//const status_3 = document.querySelector('.status3');
//const status_4 = document.querySelector('.status4');

console.log(todos);
function buttonClicked()
{
    if(new_todo.value != ''){
        todo_array.push(new_todo.value);
        console.log('recieved');

        const todo_div_create = document.createElement('div');
        todo_div_create.className= 'todo';
        todo_div_create.setAttribute('draggable', 'true');
        console.log(todo_div_create);

        for(let i = 0; i < todo_array.length; i++){
            todo_div_create.innerHTML = new_todo.value;
            status_1.appendChild(todo_div_create);
            const create_delete_button = document.createElement('button');
            create_delete_button.className = 'close-button';
            create_delete_button.innerHTML= '&times;';
            todo_div_create.appendChild(create_delete_button);
            
        }
        
    } 
}

function deleteButtonClicked(){

    console.log('delete clicked');

}


console.log(create_delete_button);


add_todo_button.addEventListener('click', buttonClicked);
create_delete_button.addEventListener('click', deleteButtonClicked);



let draggableTodo = document.getElementsByClassName('todo');

todos.forEach(function(todoElements){
    
    todoElements.addEventListener('dragstart', callWhenDragStarted);
    todoElements.addEventListener('dragend', callWhenDragEnd);
});


function callWhenDragEnd(){
    draggableTodo = null;
    console.log('Drag Ended');
    console.log(draggableTodo);
}



function callWhenDragStarted(){
    draggableTodo = this;
    console.log('Drag Started');
    console.log(draggableTodo);
}

//For DragOvers Seperate Elements
/*
status_1.addEventListener('dragover', callWhenDragOverStatus1);
status_2.addEventListener('dragover', callWhenDragOverStatus2);
status_3.addEventListener('dragover', callWhenDragOverStatus3);
status_4.addEventListener('dragover', callWhenDragOverStatus4);

// For DragOver function calling
function callWhenDragOverStatus1(){
    console.log('Drag Overed Status 1');
}

function callWhenDragOverStatus2(){
    console.log('Drag Overed Status 2');
}
function callWhenDragOverStatus3(){
    console.log('Drag Overed Status 3');
}

function callWhenDragOverStatus4(){
    console.log('Drag Overed Status 4');
}
*/

// For DragOver all Elements using forEach Iteration method

all_status.forEach(function(statusElements){
    statusElements.addEventListener('dragover', callWhenDragOver);
    statusElements.addEventListener('dragenter', callWhenDragEnter);
    statusElements.addEventListener('dragleave', callWhenDragLeave);
    statusElements.addEventListener('drop', callWhenDragIsDrop);
})

function callWhenDragOver(e){
    e.preventDefault();
  //  console.log('Drag Over');
}
function callWhenDragEnter(){
    console.log('Drag Enter');
    this.style.transform = 'scale(1.02)';
    this.style.transition = '.5s';
}
function callWhenDragLeave(){
    this.style.transform = 'scale(1)';
    console.log('Drag Leave');
}

function callWhenDragIsDrop(){

    this.style.transform = 'scale(1)';
    this.appendChild(draggableTodo);
    console.log('Drag Dropped');
}





