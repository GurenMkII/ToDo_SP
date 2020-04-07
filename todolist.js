$('#todoinput').keyup(function(){
      if (event.keyCode === 13) {
        event.preventDefault();
        $("#todobutton").click();
      }
    });

$('button#todobutton').click(function(){
  $('#list').append('<li>' + $('#todoinput').val() + '</li>');
  $('#todoinput').val("");    
})

$('#list').click(function(event){
  var target = $(event.target);
  if (target.is('li')){
  target.css({color:'red'});
  target.wrap('<strike>');
    setTimeout(function(){
        target.remove();
    }, 1000); 
  } 
})