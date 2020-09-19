let addToDoButton = document.getElementById('addToDo');
let Container = document.getElementById(toDoContainer);
let inputField = document.getElementById('inputField')

//addevent listeners
addToDoButton.addEventListener('click', function(){
  var paragraph = document.createElement('p');
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph);
})
