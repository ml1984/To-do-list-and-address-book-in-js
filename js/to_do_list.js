$(document).ready(function() {
  $("form#items_to_do").submit(function(event) {
    event.preventDefault();
      var inputtedNewTask = $("input#new-task").val();

      $("ul#tasks").append("<li><span class = 'addTask'>" + inputtedNewTask + "<div class='check-box-group'><label for='first-check-box'>Completed</label><input type='checkbox' value='completed'></div></span></li>");

      $("input#new-task").val("");

    });
});
