var xcoord = 290;
var ycoord = 450;
var activity = "exploring";
var step = 15;
var timeOfDay = ['dawn', 'morning', 'late morning', 'early afternoon', 'late afternoon', 'sunset', 'dusk', 'night'];
var	currentTime = 0;
	
	
// message system
var messages = Array();
messages[messages.length] = "Please click one of the action buttons now.";
messages[messages.length] = "It is timeOfDay.";
messages[messages.length] = "It is timeOfDay. Taking action now, without a light source, would put you at great risk of injury. No matter how desperate you may feel, it\'s time to sleep."
messages[messages.length] = "It is timeOfDay, but your light source allows you to take one more action.";
messages[messages.length] = "It is now dark. You lay down to sleep.";
messages[messages.length] = "Your coordinates are: <br /> ycoord S , xcoord W";


// movement system
function move(direction){
  switch (direction){
  	case 1: ycoord -= step;
  	break;
  	
  	case 2: xcoord += step;
  	break;

  	case 3: ycoord += step;
  	break;

  	case 4: xcoord -= step;
  	break;
  }
  
  $("#playerIcon").css({"left": xcoord, "top": ycoord});
  $("#mapLocale").html(msg(5).replace("ycoord", ycoord).replace("xcoord", xcoord));
  activity = "exploring"; //any movement is an exploration activity
  p.updateLevels();
  p.updateStatus();
  newTurn();
}


function newDay(){ //start a new day
	var currentTime = 0;
	$("#timeOfDay").html(msg(1).replace("timeOfDay", timeOfDay[currentTime]));
	$("#output-span").html(msg(0));
	}
	
function newTurn(){ // start a new turn after each move or action
					// get timeOfDay and output to browser
	console.log(currentTime);
	console.log(timeOfDay[currentTime]);
	if (currentTime < 6){ //if currentTime is earlier than 'dusk'
		$("#timeOfDay").html(msg(1).replace("timeOfDay", timeOfDay[currentTime]));
		$("#output-span").html(msg(0));
		currentTime ++;
	}else if (currentTime == 6 && inv.lightSource == 0){
		$("#timeOfDay").html(msg(2).replace("timeOfDay", timeOfDay[currentTime]));
		$("#output-span").html(msg(0));
		currentTime ++;
	}else if (currentTime == 6 && inv.lightSource == 1){
		$("#timeOfDay").html(msg(3).replace("timeOfDay", timeOfDay[currentTime]));
		$("#output-span").html(msg(0));
		currentTime ++;
	}else {
		currentTime = 7;
		$("#mask").toggleClass("fading",3000, "easeInOutQuad");
		$("#mask").toggleClass("fading",3000, "easeInOutQuad", newDay());
  	}		
};

function msg(i){
	return messages[i];
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




