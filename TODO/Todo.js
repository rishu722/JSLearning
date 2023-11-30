// function addData() {
//   let li = document.createElement("li");
//   let inputValue = document.getElementById("input-box").value;
//   let t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === "") {
//     alert("You must write something!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("input-box").value = "";

//   let span = document.createElement("SPAN");
//   let txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

// }
function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  var newTask = document.createElement("li");
  newTask.innerHTML = `
        <span>${taskInput.value}</span>
        <button onclick="removeTask(this)">Remove</button>
    `;

  taskList.appendChild(newTask);

  taskInput.value = "";
}

function removeTask(button) {
  let taskToRemove = button.parentNode;
  let taskList = taskToRemove.parentNode;
  taskList.removeChild(taskToRemove);
}
