import { Task } from "./models/task";

let tasks = [new Task("Köpa mjölk", false), new Task("Träna", false)];

// En funktion som kollar värdet på en viss tasks "completed" egenskap, true/false, för att sedan ändra till motsatsen:
function toggleComplete(task) {
  if (task.completed == false) {
    task.completed = true;
  } else {
    task.completed = false;
  }

  // Ser till att skriva ut listan igen för att uppdatera listorna i HTML.
  writeTasks();
}

// En funktion som skriver ut vår lista i html
function writeTasks() {
  //Ser till att vi kan arbeta med de två ul elementen i funktionen:
  let listPending = document.getElementById("listPending");
  let listCompleted = document.getElementById("listCompleted");

  //Ser till att rensa tidigare innehåll i dessa:
  listPending.innerHTML = "";
  listCompleted.innerHTML = "";

  // Loopar igenom vår lista med tasks.
  for (let i = 0; i < tasks.length; i++) {
    //Lägger till objektens namn i <li> element och ser till att det lyssnar efter klick för att kunna markera som klar/ ej klar.
    let task = document.createElement("li");
    task.innerText = tasks[i].name;
    task.addEventListener("click", () => {
      toggleComplete(tasks[i]);
    });

    /*
    If satsen kontrollerar i vilket av de två list-elementen ett <li> element ska läggas i beroende på om tasken är pending eller completed.
    Lägger även till klassnamn för stylingens skull.
    */
    if (tasks[i].completed !== true) {
      task.className = "list__item";
      listPending.appendChild(task);
    } else {
      task.className = "list__item--completed";
      listCompleted.appendChild(task);
    }
  }
}

/*
En funktion som lägger till en task utifrån vår klass och användarens värde i textrutan. Completed är false då uppgiften är pending.
Listan skrivs ut igen och textrutan rensas.
If satsen säkerställer att man inte kan lägga till en tom task.
*/
function addTask() {
  if (document.getElementById("inputTask").value != "") {
    tasks.push(new Task(document.getElementById("inputTask").value, false));
    writeTasks();
    document.getElementById("inputTask").value = "";
  }
}

// Ser till att knappen lyssnar efter klick och vid klick akriverar vår addTask funktion
document.getElementById("btnSubmit").addEventListener("click", addTask);

//Skriver ut den befintliga listan när JS filen laddas för första gången.
writeTasks();
