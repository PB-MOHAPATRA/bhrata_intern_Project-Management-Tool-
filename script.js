function addTask() {
    event.preventDefault();

   
    
    var Name = document.getElementById("name").value;
    var taskName = document.getElementById("tname").value;
    var taskDescription = document.getElementById("tdesc").value;

    
    var taskElement = document.createElement("table");
    taskElement.className = "task";

    
    var taskContent = 
    `
    <tr>
    <th>User Name </th>
     <th>Task Name </th>
     <th>Task description</th>
     
     
     </tr>
        <tr>
        <td>${Name} </td>
        <td>${taskName}  </td>
        <td>${taskDescription}</td>
        
        <td><button class="delete-task">Done</button></td>
        </tr>
    `;

    taskElement.innerHTML = taskContent;


    var taskList = document.getElementById("task-list");
    taskList.appendChild(taskElement);


    document.getElementById("form").reset();

 
    var deleteButton = taskElement.getElementsByClassName("delete-task")[0];
    deleteButton.addEventListener("click", function() {
        taskList.removeChild(taskElement);
    });
}


document.getElementById("form").addEventListener("submit", addTask);

function randomColor() {
    var color = '#';
    var colorCode = ['ffaf40','2A9BFB','ff5967','7870cc','33ccbf']; 
    var className = document.getElementsByClassName("change"); 
    var i;
    color += colorCode[Math.floor(Math.random() * colorCode.length)];
  for (var i = 0; i < className.length; i ++) {
      className[i].style.backgroundColor = color; }
}