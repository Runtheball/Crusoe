xcoord = 290;
ycoord = 450;

var activity = "exploring";

function moveLeft() {
  xcoord = xcoord - 15;
  $("#playerIcon").css("left", xcoord);
  $("#playerIcon").css("top", ycoord);
  $("#output-span").html("Your coordinates are: <br />" + ycoord + "S, " + xcoord +"W");
  activity = "exploring";
  newTurn();  //this doesn't happen. Not defined. Maybe updateStatus should run here, and that would then call newTurn()?  
}

function moveUp() {
  ycoord = ycoord-15;
  $("#playerIcon").css("left", xcoord);
  $("#playerIcon").css("top", ycoord);
  $("#output-span").html("Your coordinates are: <br />" + ycoord + "S, " + xcoord +"W");
  activity = "exploring";
  updateLevels();
  updateStatus();
}
 
 
function moveRight() {
  xcoord = xcoord+15;
  $("#playerIcon").css("left", xcoord);
  $("#playerIcon").css("top", ycoord);
  $("#output-span").html("Your coordinates are: <br />" + ycoord + "S, " + xcoord +"W");
  activity = "exploring";
  newTurn();
}

function moveDown() {
  ycoord = ycoord+15;
  $("#playerIcon").css("left", xcoord);
  $("#playerIcon").css("top", ycoord);
  $("#output-span").html("Your coordinates are: <br />" + ycoord + "S, " + xcoord +"W");
  activity = "exploring";
  newTurn();
}




$(document).ready(function() {
  $(document).bind("keyup", function(evt) {
    $("#output-span").html("Your coordinates are: <br />" + evt.pageY + "S, " + evt.pageX +"W");
  });
  
  $("#tgt-div").bind("mouseup", function(evt) {
    $("#output-span").append("You clicked the tgt div.");
    evt.preventDefault();
    evt.stopPropagation();
  });
});

//from signup task
/*
$(document).keydown(function (e) {
	var key_map = { 
		37: 'left',
		38: 'up',
		39: 'right',
		40: 'down',
		8:	'backspace',
		20:	'caps lock',
		17: 'control',
		46:	'delete',
		18: 'alt',
		13:	'enter',
		27:	'escape',
		35: 'end',
		9:	'tab'
	};
	var key = event.which;
	var key_name = key_map[key];
	if ( key_name )
		alert('You pressed the ' + key_name + ' key.');
		
alert("The key pressed = " + String.fromCharCode(e.charCode) + "\n"
	 + "The key code for what you pressed is " + e.which + "\n"
	 + "...and the charCode is: " + e.charCode);
});
*/


