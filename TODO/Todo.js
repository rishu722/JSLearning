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

  let newTask = document.createElement("li");
  newTask.innerHTML = `
        <span>${taskInput.value}</span>
        <button class="edit">Edit</button>
        <button type="submit" id="end-editing">Done</button>
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
// function editTask(button) {
//   let taskToEdit = button.parentNode;
//   let taskEdit = taskToRemove.parentNode;
//   taskEdit.
// }
const paragraph = document.querySelector("span");
const edit_button = document.querySelector(".edit");
// const end_button = document.getElementById("end-editing");

edit_button.addEventListener("click", function () {
  paragraph.contentEditable = true;
  paragraph.style.backgroundColor = "#dddbdb";
});

end_button.addEventListener("click", function () {
  paragraph.contentEditable = false;
});
