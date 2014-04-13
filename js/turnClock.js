//We need to turn clock to limit actions within each day, and measure the health/status of the player
//as the game progresses. If he's doing well, he'll be healthy, if he isn't, he'll die. Game over!
//Divide each day into turns. Each turn is two hours. 12 hours of daylight = 6 turns per day w/o light source. 
//Player awarded one extra turn per day (dusk) if he has a lightsource. To avoid 7 turns/day, lets add an 8th
//for "night". So there are now 14 hours of potential 'light' in which to take actions, and a "nighttime"
//period which will be either 10 or 12 hours...depending on the presence of a lightsource. Note that the hours
//are not necessary, only the time periods. We do not need to track turns available, only record the passage
//of time throughout the day.
//
//Each turn, player can take one action (explore, craft, rest, ...). After that action, we need to advance the
//timeOfDay. 
//
//
//
//TO DO: create afunction here that checks to see what action called this script. Is it a new day or new turn? What if player 
//sleeps during the day? Player should NOT need to click a button to end each turn. 


var timeOfDay = ['dawn', 'morning', 'late morning', 'early afternoon', 'late afternoon', 'sunset', 'night'],
	currentTime = 0;
	
function newDay(){ //start a new day
		currentTime = 0;
	}
	
var messages = Array();
messages[messages.length] = "Please click one of the action buttons now.";
messages[messages.length] = "It is " + timeOfDay[currentTime] + ", but your light source allows you to take one more action.";
messages[messages.length] = "It is now dark. Taking action now, without a light source, would put you at great risk of injury. No matter how desperate you may feel, it\'s time to sleep.";
messages[messages.length] = "It is " + timeOfDay[currentTime] + ".";

		

function newTurn(){ // start a new turn
		
		// get timeOfDay and output to browser
		
			if (currentTime < 6){
				$("#turnClock").html(msg(3));
				$("#output-span").html(msg(0));
				currentTime ++;
			}
			else if (currentTime == 6 && lightSource == 1){
				$("#turnClock").html(msg(3));
				$("#output-span").html(msg(1));
				currentTime ++;
			}
			else {
				$("#turnClock").html(msg(2));			
				currentTime ++
				$("#output-span").html('<button class="sleep" onclick="newDay();" width="160" height="25" alt="click to sleep for the night" />Sleep</button>');
				//$("#output-span").html('If you <em>dare</em> take another action in the dark, go to the action menu below.');
			}
					$("#output-span").html(msg(3));
};

function msg(i){
	return messages[i];
	}

