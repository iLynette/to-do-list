let addToDoButton = document.getElementById('addToDo');
let Container = document.getElementById(toDoContainer);
let inputField = document.getElementById('inputField')

//addevent listeners
addToDoButton.addEventListener('click', function(){
  var paragraph = document.createElement('p');
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph);
  inputField.value = ''
  paragraph.addEventListener('click', function(){
    paragraph.style.textDecoration = 'line-through';
  paragraph.addEventListener('dblclick', function(){
    toDoContainer.removeChild(paragraph);
    })
  })
})
