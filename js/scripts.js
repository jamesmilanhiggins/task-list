//Back End
function Task (task ) {
  this.task = task;
};

//Front End
$(function(){
  $("form").submit(function(e){
    e.preventDefault();
    var userTask = $("#task").val();


    var newTask = new Task(userTask);
    $("#outputSection").append("<li class='task'>"
    + userTask
    + "<button class='remove btn btn-danger'>Completed</button>" 
    + "<hr> </li>" )

    // $(".task").last().click(function(){
    //   $("#show-place").show();
    //   $("#show-place h2").text(userLocation);
    //   $("#show-place .landmarks").text(userLandmarks);
    //   $("#show-place .timeOfYear").text(userTimeOfYear);
    //   $("#show-place .notes").text(userNotes);
    //
    // });

    $(".remove").last().click(function(){
        $(this).parent().toggleClass("completed");
    });

    $("#task").val("");

  });
});
