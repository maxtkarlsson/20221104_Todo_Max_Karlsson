class Task {
  constructor(name, completed) {
    this.name = name;
    this.completed = completed; //True or false
  }
}

let tasks = [new Task("Köpa mjölk", false), new Task("Träna", true)];

function toggleComplete(task) {
  if (task.completed == false) {
    task.completed = true;
  } else {
    task.completed = false;
  }

  writeTasks();
}
/*
Ovan funktion fast på "modernare" sätt:

const toggleComplete = (task) => {
  if (task.completed == false) {
    task.completed = true;
  } else {
    task.completed = false;
  }
  writeTasks();
};
*/

function writeTasks() {
  let listPending = document.getElementById("listPending");
  let listCompleted = document.getElementById("listCompleted");
  listPending.innerHTML = "";
  listCompleted.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    let task = document.createElement("li");
    task.innerText = tasks[i].name;
    //task.id = tasks[i].name;
    task.addEventListener("click", () => {
      toggleComplete(tasks[i]);
    });
    /*
    item.addEventListener("click", () => {
      toggleComplete(tasks[i]);
    });
*/
    if (tasks[i].completed !== true) {
      task.className = "list__item";
      listPending.appendChild(task);
    } else {
      task.className = "list__item--completed";
      listCompleted.appendChild(task);
    }
  }
  console.log(tasks);
}

function addTask() {
  tasks.push(new Task(document.getElementById("inputTask").value, false));
  writeTasks();
}

writeTasks();

document.getElementById("btnSubmit").addEventListener("click", addTask);

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
