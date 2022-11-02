class Task {
  constructor(name, completed) {
    this.name = name;
    this.completed = completed; //True or false
  }
}

let pendingTasks = [new Task("Köpa mjölk", false), new Task("Träna", false)];

function writePendingTasks() {
  let listPending = document.getElementById("listPending");
  listPending.innerHTML = "";

  for (let i = 0; i < pendingTasks.length; i++) {
    let item = document.createElement("li");
    item.innerText = pendingTasks[i].name;

    if (pendingTasks[i].completed !== true) {
      item.className = "list__item";
      listPending.appendChild(item);
    } else {
      item.className = "list__item--completed";
      listCompleted.appendChild(item);
    }
  }
}

writePendingTasks();

document.getElementById("btnSubmit").addEventListener("click", addTask);

function addTask() {
  let inputName = document.getElementById("inputTask");

  pendingTasks.push(new Task(inputName.value, false));
  writePendingTasks();
}

// hur skriva ut en lista med object i HTML?

//Tankar:
// Checkbox har boolean värde, använda det för att göra treu or false
// Sen ha olika objekt som flyttas mellan sections via parents?
// Sortera på datum kanske?

/*
Upplägg

1. En användare matar in en task som skapas och hamnar i listan pending.

2. En användare klickar på en task i listan pending som hamnar i listan completed

3. En användare klickar på en task i listan completed som hamnar i listan pending


*/
