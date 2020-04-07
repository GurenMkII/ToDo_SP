var todoInput = document.querySelector('input[type="text"]');
var todoBtn = document.querySelector('#todobutton');


// Press Enter instead of button click
todoInput.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("todobutton").click();
    }
  });

todoBtn.addEventListener('click', function(){
    let li = document.createElement('li');
    li.innerHTML = todoInput.value;
    list.appendChild(li);
    todoInput.value = '';

})
list.addEventListener('click', function(event){
    event.target.style.color = 'red';
    event.target.style.textDecoration = 'line-through';
    setTimeout(function(){
        event.target.remove();
    }, 1000)
    
})



