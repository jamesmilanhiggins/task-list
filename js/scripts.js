//Back End
function Place (location, landmarks, timeOfYear, notes ) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
};

//Front End
$(function(){
  $("form").submit(function(e){
    e.preventDefault();
    var userLocation = $("#location").val();
    var userLandmarks = $("#landmarks").val();
    var userTimeOfYear = $("#timeOfYear").val();
    var userNotes = $("#notes").val();

    var newPlace = new Place(userLocation, userLandmarks, userTimeOfYear, userNotes);
    $("#outputSection").append("<li class='place'>" + userLocation + "</li>")

    $(".place").last().click(function(){
      $("#show-place").show();
      $("#show-place h2").text(userLocation);
      $("#show-place .landmarks").text(userLandmarks);
      $("#show-place .timeOfYear").text(userTimeOfYear);
      $("#show-place .notes").text(userNotes);
    });
    $("#location").val("");
    $("#landmarks").val("");
    $("#timeOfYear").val("");
    $("#notes").val("");

  });
});
