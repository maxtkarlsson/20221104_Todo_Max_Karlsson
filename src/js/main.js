class Task {
  constructor(header, desc) {
    this.header = header;
    this.desc = desc;
  }
}
document.getElementById("btnSubmit").addEventListener("click", submit);

let taskList = [];

function submit() {
  let inputTask = document.getElementById("inputTask");
  let inputDesc = document.getElementById("inputDesc");

  taskList.push(new Task(inputTask.value, inputDesc.value));

  console.log(taskList);

  for (let i = 0; i < taskList.length; i++) {
    document.getElementById("todoList");
  }
}

// Checkbox har boolean värde, använda det kanske?
// Sen ha olika objekt som flyttas mellan sections via parents?
// Sorera på datum kanske?
