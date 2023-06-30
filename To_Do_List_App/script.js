const Search_box = document.getElementById("Search_box")
const Task_List = document.getElementById("Task_List")

function AddTask() {
  if(Search_box.value === ''){
    alert("Insert Input");
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = Search_box.value;
    Task_List.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  Search_box.value = '';  
  saveData();
}
Task_List.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData(){
  localStorage.setItem("data", Task_List.innerHTML);
}

function showTask(){
  Task_List.innerHTML = localStorage.getItem("data");
}
showTask();