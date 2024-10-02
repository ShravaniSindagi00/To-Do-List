const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
  if(inputBox.value === ''){
    alert("you must write something");
  }
  else{
    // create a new list item
    let li= document.createElement("li");
    // It takes whatever text the user has entered in the inputBox and sets it as the content of the newly created list
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    // u00d7 - x
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click" , function(e){
  if(e.target.tagName === "LI"){
  e.target.classList.toggle("checked");
  saveData();
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
},false);


// This function saves the current state of the list into the browers localstorage
function saveData(){  
  localStorage.setItem("data", listContainer.innerHTML);
}


// This function retrieves the saved task list from localStorage and displays it on the page.
function showList(){
  listContainer.innerHTML = localStorage.getItem("data");
}
showList();