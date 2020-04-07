$('#todoinput').keyup(function(){ //executes function when key is released.
      if (event.keyCode === 13) { //keyCode 13 is "Enter".
        $("#todobutton").click(); 
      }
    });

$('#todobutton').click(function(){ //function is executed when #todobutton is clicked.
  $('#list').append('<li>' + $('#todoinput').val() + '</li>'); //creates and populate a new <li> element.
  $('#todoinput').val("");    //clears the form input when #todobutton is clicked.
})

$('#list').click(function(event){
  var target = $(event.target);
  if (target.is('li')){ //.is is checking if target = 'li'.
  target.css({color:'red'}); //applies css styles.
  target.wrap('<strike>'); //wrap element in <strike>.
    setTimeout(function(){ //delayed activation function.
        target.remove(); //delete the target...
    }, 1000); 
  } 
})