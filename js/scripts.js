//Back End
function Task (task ) {
  this.task = task;
};

//Front End
$(function(){
  $("#kill").click(function(){
    // if(confirm("Are you sure?")){
    //   $("li").remove();
    // }
    $("li").remove();
  });
  $("form").submit(function(e){
    e.preventDefault();
    var userTask = $("#task").val();

    var newTask = new Task(userTask);
    $("#outputSection").append("<li class='task'>"
    + userTask
    + "<button class='remove btn btn-danger'>Completed</button>"
    + " <hr> </li>" );

    $("#outputSection").sortable({
      revert: true
    });
    $( ".task" ).draggable({
      connectToSortable: "#outputSection",
      revert: "invalid"
    });

    $( "ul, li" ).disableSelection();

    $(".remove").last().click(function(){
      $(this).parent().toggleClass("completed");
      $(this).parent().appendTo("#outputSection");
      $(this).parent().toggle().fadeIn(200);
    });

    $("#task").val("");
  });
});
