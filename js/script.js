$(document).ready(function() {
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



});
