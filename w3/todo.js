function addTask(){
    const taskInput=document.getElementById('taskInput').value;
    const dueDateInput=document.getElementById('dueDateInput').value;

    if(taskInput === "" || dueDateInput === ""){
        alert("Please fill in both task and due date!");
        return;
    }

    let formattedDate=new Date(dueDateInput).toLocaleDateString();
    let li=document.createElement("li");
    li.innerHTML=`<span> ${taskInput} - Due: ${formattedDate}</span>`;
    const ul=document.getElementById('todoList')
    ul.appendChild(li);

    let compeleteButton=document.createElement("button");
compeleteButton.innerHTML="Complete";
compeleteButton.className="Complete-btn";
compeleteButton.onclick=function(){
    li.classList.toggle("completed");
};
li.appendChild(compeleteButton);


let deletButton=document.createElement("button");
deletButton.innerHTML="Delete";
deletButton.className="delete-btn";
deletButton.onclick=function(){
    li.remove();
};
li.appendChild(deletButton);

document.getElementById("todoList").appendChild(li);

document.getElementById("taskInput").value = "";
document.getElementById("dueDateInput").value = "";
}