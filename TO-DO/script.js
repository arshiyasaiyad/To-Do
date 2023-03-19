function addTask() {
    var newTask = document.getElementById("newTask").value;
    if (newTask === '') {
        alert("You must write something!");
        return false;
    }
    var listItem = document.createElement("li");
    var deleteButton = document.createElement("span");
    deleteButton.classList.add("delete");
    deleteButton.innerText = "\u00D7";
    deleteButton.addEventListener("click", deleteTask);
    var label = document.createElement("label");
    label.innerText = newTask;
    listItem.appendChild(deleteButton);
    listItem.appendChild(label);
    document.getElementById("myList").appendChild(listItem);
    document.getElementById("newTask").value = "";
}

function deleteTask() {
    this.parentElement.remove();
}
