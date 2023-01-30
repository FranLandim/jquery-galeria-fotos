$(document).ready(function() {

  $('form').on('submit', function(e){
    e.preventDefault();

    const listaDeTarefas = $('#lista-tarefas').val();
    const novaTarefa = $('<li></li>');
    
    $(novaTarefa).text(listaDeTarefas);
    $(novaTarefa).appendTo('ul');
    
    $('ul').on('click', 'li', function() {
      $(this).toggleClass("strike-through");
    });
    
    $('#lista-tarefas').val("");

  });
  
});
