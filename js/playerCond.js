//should there be a 'player' object, with these vars as properties?
var pEnergy = 50;
var pHealth = 250;
var pComfort = 25;
var pThirst = 50;
var pHunger = 50;
var waterSupply = 0;
var waterSupplyMax = 0; //carrying capacity or storage
var foodSupply = 0;
var stoneBlade = 0;
var spear = 0;
var shelter = 0;
var lightSource = 0;
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

var pSleep = function(){
	if (timeOfDay == "night"){
		if(shelter == 1){
			pEnergy += 65;
			pHealth += 30;
			pComfort += 25;
			pThirst -= 2;
			pHunger -= 2;
		}
		else{
			pHealth += 45;
			pEnergy += 25;
			pComfort += 15;
			pThirst -= 2;
			pHunger -= 2;
		}//end sleep
		newDay;
	}else{ //player has chosen to sleep during the day - just a bit better than 'rest'
		if(shelter == 1){
			pEnergy += 15;
			pHealth += 15;
			pComfort += 12;
			pThirst -= 2;
			pHunger -= 2;
		}
		else{
			pHealth += 7;
			pEnergy += 7;
			pComfort += 6;
			pThirst -= 2;
			pHunger -= 2;
		}
		currentTime + 2;
	}
};




//At the end of each turn update player health status
var updateLevels = function(){
	if (timeOfDay == "night"){
		if(activity == "rest"){
			if(shelter == 1){
				pEnergy += 10;
				pHealth += 10;
				pComfort += 10;
				pThirst -= 2;
				pHunger -= 2;
			}
			else{
				pHealth += 5;
				pEnergy += 5;
				pComfort += 5;
				pThirst -= 2;
				pHunger -= 2;
			}
		}//end rest
		
		else if (activity == "sleep"){
			if(shelter == 1){
				pEnergy += 65;
				pHealth += 30;
				pComfort += 25;
				pThirst -= 2;
				pHunger -= 2;
			}
			else{
				pHealth += 45;
				pEnergy += 25;
				pComfort += 15;
				pThirst -= 2;
				pHunger -= 2;
			}
		}//end sleep
		
		else if (activity == "crafting"){
			pEnergy -= 2;
			pHealth -= 2;
			pThirst -= 4;
			pHunger -= 4;
		}
		
	}
	//else it is daytime
	else {
		if(activity == "rest"){
			if(shelter == 1){
				pEnergy += 10;
				pHealth += 10;
				pComfort += 10;
				pThirst -= 3;
				pHunger -= 2;
			}
			else{
				pEnergy += 5;
				pHealth += 8;
				pComfort += 4;
				pThirst -= 6;
				pHunger -= 2;
			}
		}
		else if (activity == "crafting"){
			if(shelter == 1){
				pEnergy -= 4;
				pHealth -= 1;
				pComfort -= 2;
				pThirst -= 5;
				pHunger -= 4;
			}
			else{
				pEnergy -= 6;
				pHealth -= 3;
				pComfort -= 4;
				pThirst -= 8;
				pHunger -= 4;
			}
		}
		else if (activity == "exploring" || activity == "hunting" || activity == "fishing") {
			pEnergy -= 15;
			pHealth -= 5; //should health auto decrease with activity, or only w/o food?
			pThirst -= 8;
			pHunger -= 8;	
		}
		//any other daylight activity
		else {
			pEnergy -= 5;
			pHealth -= 5;//should health auto decrease with activity, or only w/o food?
			pThirst -= 5;
			pHunger -= 5;	
		}
	} // end daytime
  }; // end update levels


var updateStatus = function(){
	//We can't use switch statements here: those only evaluate literals.
	//var updatepEnergy = function(){     The following code blocks do NOT need to be functions
	if (pEnergy >= 85){
		document.getElementById("pEnergy").innerHTML = "energetic"}
	else if (pEnergy >=40 && pEnergy <85){
		document.getElementById("pEnergy").innerHTML = "normal"}
	else if (pEnergy <40 && pEnergy >=15){
		document.getElementById("pEnergy").innerHTML = "tired"}
	else if (pEnergy <15 && pEnergy >=1){
		document.getElementById("pEnergy").innerHTML = "exhausted"}
	else{
		var gameState = "over";}		
	//};

	//var updatepHealth = function(){
	if (pHealth >= 300){
		document.getElementById("pHealth").innerHTML = "strong"}
	else if (pHealth >=100 && pHealth <300){
		document.getElementById("pHealth").innerHTML = "Ok"}
	else if (pHealth <100 && pHealth >=25){
		document.getElementById("pHealth").innerHTML = "weak"}
	else if (pHealth <25 && pHealth >=1){
		document.getElementById("pHealth").innerHTML = "near death"}
	else{
		var gameState = "over";}	
	//};

	//var updatepThirst = function(){	
	if (pThirst >= 85){
		document.getElementById("pThirst").innerHTML = "satisfied"}
	else if (pThirst >=40 && pThirst <85){
		document.getElementById("pThirst").innerHTML = "normal"}
	else if (pThirst <40 && pThirst >=15){
		document.getElementById("pThirst").innerHTML = "thirsty"}
	else if (pThirst <15 && pThirst >=1){
		document.getElementById("pThirst").innerHTML = "dehydrated"}
	else{
		var gameState = "over";}
	//};

	//var updatepHunger = function(){	
	if (pHunger >= 85){
		document.getElementById("pHunger").innerHTML = "stuffed"}
	else if (pHunger >=40 && pHunger <85){
		document.getElementById("pHunger").innerHTML = "normal"}
	else if (pHunger <40 && pHunger >=15){
		document.getElementById("pHunger").innerHTML = "hungry"}
	else if (pHunger <15 && pHunger >=1){
		document.getElementById("pHunger").innerHTML = "starving"}
	else{
		var gameState = "over";
	}
	//};
};//end updateStatus()
