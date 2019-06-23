const todos = [];

let input = prompt("What do you want to do?");
while (input !== "quit") {

    switch (input) {
        case "new":
            addToDo();
            break;

        case "list":
            listToDo();
            break;

        case "delete":
            deleteToDo();
            break;
    }
    input = prompt("What do you want to do?");
}

function addToDo() {
    const newToDo = prompt("Add a new to do");
    todos.push(newToDo);
}

function deleteToDo() {
    const index = prompt("Enter the index of the item you want to delete");
    todos.splice(index, 1);
}

function listToDo() {
    console.log("****************");
    todos.forEach((todo, i) => {
        console.log(i +" "+ todo);
    });
    console.log("****************");
}