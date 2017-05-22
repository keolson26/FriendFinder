$("#survey-questions").on("submit", function(e) {

    e.preventDefault();

    var newFriend = {};

    newFriend.name = $("#name").val().trim();
    newFriend.url = $("#photoURL").val().trim();
    newFriend.scores = [];

    $.ajax({
        type: 'POST',
        data: JSON.stringify(newFriend),
        contentType: 'application/json',
        url: 'http://localhost:3000/api/friends',
        success: function(data) {
            console.log('success');
            console.log(JSON.stringify(data));
        }
    });

});


$("#enter-survey").on("click", function(){
	$.ajax({
      method: 'GET',
      url: 'http://localhost:3000/survey',
      success: function(data) {
        console.log(data);
        res.send(data);
      }
    });
});

$("#home-btn").on("click", function(){
	$.ajax({
      method: 'GET',
      url: 'http://localhost:8080/',
      success: function(data) {
        console.log(data);
        res.send(data);
      }
    });
});