$(document).ready(function() {
  getTodos();

  $('#button-add').click(function() {
    var addElement = $('#input-add').val();
    createTodo();

  });
  $(document).on('click', '#delete-button', function() {
    var buttonDelete = $(this);
    var idTodo = buttonDelete.parent().attr('data-id');
    console.log(idTodo);
    deleteTodo(idTodo);

  });
});

// Functions----------------
//READ_CRUD
function getTodos() {
  $.ajax(
    {
      url : 'http://157.230.17.132:3014/todos' ,
      method : 'GET',
      success: function (data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
          var element = data[i];
          console.log(element);
          var source = $('#list-template').html();
          var template = Handlebars.compile(source);
          var context = {
            id : element.id,
            text : element.text
           }
          var html = template(context);
          $('.list').append(html);
        }
      },
      error : function (request, state, errors) {
        console.log('Errore ' + errors);
      }
  });

}

//CREATE_CRUD
function createTodo() {
  $.ajax(
    {
      url : 'http://157.230.17.132:3014/todos' ,
      method : 'POST',
      data : {
        text : addElement
      },
      success: function (data) {
        $('.list').html('');
        getTodos();

      },
      error : function (request, state, errors) {
        console.log('Errore ' + errors);
      }
  });

}

//DELETE_CRUD
function deleteTodo(id) {
  $.ajax(
    {
      url : 'http://157.230.17.132:3014/todos/' + id ,
      method : 'DELETE',
      success: function (data) {
        $('.list').html('');
        getTodos();

      },
      error : function (request, state, errors) {
        console.log('Errore ' + errors);
      }
  });


}
