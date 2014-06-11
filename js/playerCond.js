var p = new Object();        //New player object
p.energy = 50;
p.health = 250;
p.comfort = 25;
p.thirst = 50;
p.hunger = 50;
p.sleep = function(){
	if (timeOfDay == "night"){
		if(shelter == 1){
			p.energy += 65;
			p.health += 30;
			p.comfort += 25;
			p.thirst -= 2;
			p.hunger -= 2;
		}
		else{
			p.health += 45;
			p.energy += 25;
			p.comfort += 15;
			p.thirst -= 2;
			p.hunger -= 2;
		}//end sleep
		newDay();
	}else{ //player has chosen to sleep during the day - just a bit better than 'rest'
		if(shelter == 1){
			p.energy += 15;
			p.health += 15;
			p.comfort += 12;
			p.thirst -= 2;
			p.hunger -= 2;
		}
		else{
			p.health += 7;
			p.energy += 7;
			p.comfort += 6;
			p.thirst -= 2;
			p.hunger -= 2;
		}
		currentTime += 2;
	}
};
p.rest = function(){  //resting not as restorative as sleeping
	if(shelter == 1){
			p.energy += 8;
			p.health += 5;
			p.comfort += 10;
			p.thirst -= 1;
			p.hunger -= 1;
		}
		else{
			p.health += 7;
			p.energy += 7;
			p.comfort += 5;
			p.thirst -= 2;
			p.hunger -= 2;
		}
		currentTime += 2;
};

p.updateLevels = function(){//At the end of each turn update player health status
	if (timeOfDay == "night"){
		if(activity == "rest"){
			if(shelter == 1){
				p.energy += 10;
				p.health += 10;
				p.comfort += 10;
				p.thirst -= 2;
				p.hunger -= 2;
			}
			else{
				p.health += 5;
				p.energy += 5;
				p.comfort += 5;
				p.thirst -= 2;
				p.hunger -= 2;
			}
		}//end rest
		
		else if (activity == "sleep"){
			if(shelter == 1){
				p.energy += 65;
				p.health += 30;
				p.comfort += 25;
				p.thirst -= 2;
				p.hunger -= 2;
			}
			else{
				p.health += 45;
				p.energy += 25;
				p.comfort += 15;
				p.thirst -= 2;
				p.hunger -= 2;
			}
		}//end sleep
		
		else if (activity == "crafting"){
			p.energy -= 2;
			p.health -= 2;
			p.thirst -= 4;
			p.hunger -= 4;
		}		
	}
	//else it is daytime
	else {
		if(activity == "rest"){
			if(shelter == 1){
				p.energy += 10;
				p.health += 10;
				p.comfort += 10;
				p.thirst -= 3;
				p.hunger -= 2;
			}
			else{
				p.energy += 5;
				p.health += 8;
				p.comfort += 4;
				p.thirst -= 6;
				p.hunger -= 2;
			}
		}
		else if (activity == "crafting"){
			if(shelter == 1){
				p.energy -= 4;
				p.health -= 1;
				p.comfort -= 2;
				p.thirst -= 5;
				p.hunger -= 4;
			}
			else{
				p.energy -= 6;
				p.health -= 3;
				p.comfort -= 4;
				p.thirst -= 8;
				p.hunger -= 4;
			}
		}
		else if (activity == "exploring" || activity == "hunting" || activity == "fishing") {
			p.energy -= 15;
			p.health -= 5; //should health auto decrease with activity, or only w/o food?
			p.thirst -= 8;
			p.hunger -= 3;	
		}
		//any other daylight activity
		else {
			p.energy -= 5;
			p.health -= 5;//should health auto decrease with activity, or only w/o food?
			p.thirst -= 5;
			p.hunger -= 2;	
		}
	} 
}; // end update levels

p.updateStatus = function(){
	//We can't use switch statements here: those only evaluate literals.
	//var updatepEnergy = function(){     The following code blocks do NOT need to be functions
	if (p.energy >= 85){
		document.getElementById("pEnergy").innerHTML = "energetic"}
	else if (p.energy >=40 && p.energy <85){
		document.getElementById("pEnergy").innerHTML = "normal"}
	else if (p.energy <40 && p.energy >=15){
		document.getElementById("pEnergy").innerHTML = "tired"}
	else if (p.energy <15 && p.energy >=1){
		document.getElementById("pEnergy").innerHTML = "exhausted"}
	else{
		var gameState = "over";}		
	//};

	//var updatepHealth = function(){
	if (p.health >= 300){
		document.getElementById("pHealth").innerHTML = "strong"}
	else if (p.health >=100 && p.health <300){
		document.getElementById("pHealth").innerHTML = "Ok"}
	else if (p.health <100 && p.health >=25){
		document.getElementById("pHealth").innerHTML = "weak"}
	else if (p.health <25 && p.health >=1){
		document.getElementById("pHealth").innerHTML = "near death"}
	else{
		var gameState = "over";}	
	//};

	//var updatepThirst = function(){	
	if (p.thirst >= 85){
		document.getElementById("pThirst").innerHTML = "satisfied"}
	else if (p.thirst >=40 && p.thirst <85){
		document.getElementById("pThirst").innerHTML = "normal"}
	else if (p.thirst <40 && p.thirst >=15){
		document.getElementById("pThirst").innerHTML = "thirsty"}
	else if (p.thirst <15 && p.thirst >=1){
		document.getElementById("pThirst").innerHTML = "dehydrated"}
	else{
		var gameState = "over";}
	//};

	//var updatepHunger = function(){	
	if (p.hunger >= 85){
		document.getElementById("pHunger").innerHTML = "stuffed"}
	else if (p.hunger >=40 && p.hunger <85){
		document.getElementById("pHunger").innerHTML = "normal"}
	else if (p.hunger <40 && p.hunger >=15){
		document.getElementById("pHunger").innerHTML = "hungry"}
	else if (p.hunger <15 && p.hunger >=1){
		document.getElementById("pHunger").innerHTML = "starving"}
	else{
		var gameState = "over";
	}
	//};
};//end updateStatus()


var gameState = "on";
var timeOfDay;


/* character begins at energy 50 due to shipwreck and floating ashore
Each turn is 2 hours. 12 turns per day, but without fire only 6 turns per day can have actions. DONE
Each action costs energy, unless resting or sleeping. Sleeping comfortably restores 10 energy per turn, Sleeping uncomfortably and/or resting restores 5 energy/turn.
If energy drops below 10, player may not move. If energy drops to 0 player must stop all activity and rest/sleep (health is also reduced by 25 if energy drops to 0). 

Health begins at 250.
For each turn without food, lose 1 health. (-12 health per day)
For each turn without a supply of liquids, lose 10 health (unless resting or sleeping).
Water is gathered/used in quarts. For any turn with activity, use 2 quarts of water, or lose 10 health.
For any turn of daylight without shelter (even without activity) use 1 quart of water, or lose 10 health. 
Each portion of vegetable matter restores 1 health; each portion of protein restores 2 health.
Essentially, after 21 days without food player has lost all health and is dead.*/








