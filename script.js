let todoItemsContainer = document.getElementById("todoItemsContainer");
let addBtnElement = document.getElementById("addTodoButton");

let todosCount = 0;

function getTextDecor(checkboxId, labelId) {
    let checkboxElement = document.getElementById(checkboxId);
    let labelElement = document.getElementById(labelId);

    labelElement.classList.toggle("checked");
}

function deleteTask(todoId){
    let todoElement=document.getElementById(todoId);
    todoItemsContainer.removeChild(todoElement);
}

function createAndAppendTodo(todo) {
    let checkboxId = "checkbox" + todo.unique_no;
    let labelId = "label" + todo.unique_no;
    let todoId = "todo" + todo.unique_no;

    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container");
    todoElement.id = todoId;
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    inputElement.classList.add("checkbox-input");
    inputElement.onclick = function() {
        getTextDecor(checkboxId, labelId);
    };
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxId);
    labelElement.id = labelId;
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

    let deleteContainer=document.createElement("div");
    deleteContainer.classList.add("delete-container")
    labelContainer.appendChild(deleteContainer);


    let deleteElement=document.createElement("span");
    deleteElement.textContent="🥡";
    deleteElement.classList.add("delete-element")
    deleteContainer.appendChild(deleteElement);
    deleteElement.onclick = function(){
        deleteTask(todoId);
    }


}


function addTask() {
    let todoUserInputEl = document.getElementById("todoUserInput");
    let todoUserInputvalue = todoUserInputEl.value;

    if (todoUserInputvalue === "") {
        alert("Enter Valid text");
        return;
    }
    todosCount = todosCount + 1;

    let newtodo = {
        text: todoUserInputvalue,
        unique_no: todosCount,
    };
    createAndAppendTodo(newtodo);
    todoUserInputEl.value = "";
}

addBtnElement.addEventListener("click",addTask);