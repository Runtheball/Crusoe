/*JavaScript, We Hardly new Ya

By Douglas Crockford
November 13th, 2006
JavaScript is a prototypal language, but it has a new operator that tries to make it look sort of like a classical language. That tends to confuse programmers, leading to some problematic programming patterns.

You never need to use new Object() in JavaScript. Use the object literal {} instead. Similarly, donÕt use new Array(), use the array literal [] instead. Arrays in JavaScript work nothing like the arrays in Java, and use of the Java-like syntax will confuse you.

Do not use new Number, new String, or new Boolean. These forms produce unnecessary object wrappers. Just use simple literals instead.

Do not use new Function to create function values. Use function expressions instead. For example,

frames[0].onfocus = new Function("document.bgColor='antiquewhite'")
is better written as

frames[0].onfocus = function () {document.bgColor = 'antiquewhite';};
The second form allows the compiler to see the function body sooner, so any errors in it will be detected sooner. Sometimes new Function is used by people who do not understand how inner functions work.
.
.
.
So the rule is simple: The only time we should use the new operator is to invoke a pseudoclassical Constructor function. When calling a Constructor function, the use of new is mandatory.
*/


/*  Item System  - each inventory or camp "item" needs to be an object  */

// Potential inventory items
inv.waterCont = 0;  // a container for water. Player may want more than one. How to do it ??
inv.waterSupply = 0;  // if container has been filled
inv.waterSupplyMax = 0; //water carrying capacity or storage ?? not sure this is needed
inv.foodSupply = 0; 
inv.foodSupplyMax = 0; //amount of food that can be carried
inv.stoneBlade = 0;
inv.spear = 0;
inv.shelter = 0;
inv.lightSource = 0;  this should be an array of objects (campFire, torch)
inv.campFire = 0; a non-portable light source (unless crafted into a torch)
inv.torch = 0;  a portable light source
inv.tatters = 1; the only object player starts with
inv.bandages = 0;
inv.kindling = 0; an array of objects (sticks, driftwood, clothes divided into kindling, etc)
inv.flag = 0;  a signal device


// Potential camp items
camp.waterCont = 0;
camp.waterSupply = 0;  //stored water containers
camp.foodSupply = 0; 
camp.foodSupplyMax = 0; //amount of food that can be stored (spoilage occurs if over max)
camp.stoneBlade = 0;
camp.spear = 0;
camp.shelter = 0;
camp.lightSource = 0;


var inv = Array();//player inventory - anything carried  (see also camp inventory)
inv[inv.length] = raggedClothes;

// Inventory Objects   -- make one inventory object, use as a prototype make the methods actions, and the properties are passed as params. Methods are no longer tied to the data itself, the actions will be a callback. Use an event watcher instead. google javascript watch variable. 
//the following function is probably not finished or workable yet
function invObj(shDesc,lDesc,src,alt,purposes,divide) {
   this.shDesc = shDesc;
   this.lDesc = lDesc;
   this.src = src;
   this.alt = alt;
   this.purposes = Array();
   this.divide = function(purpose){
   	// Check whether the purpose parameter is within the purposes array
	if ((purposes.join("")).indexOf(purpose) >= 0){
		$("#output-span").html("You have now divided your " + this.shDesc + " into some " + purpose + ".");
	} else {
	$("#output-span").html("You're unable to divide your " + this.shDesc + " to make " + purpose + ".");
	}
   }
}

//function tatters("ragged clothes", "These are the clothes you were wearing on the ship. You spend a moment thinking of how easy life was back then...before the shipwreck. The clothes are now, much like your life, in a dreadful condition. They're now useless to protect you from the elements, but they may have some other purposes.", "../images/inv/tatters.png", "ragged clothes", Array(bandages, kindling, cloth));

tatters.prototype = new invObj("ragged clothes", "These are the clothes you were wearing on the ship. You spend a moment thinking of how easy life was back then...before the shipwreck. The clothes are now, much like your life, in a dreadful condition. They're now useless to protect you from the elements, but they may have some other purposes.", "../images/inv/tatters.png", "ragged clothes", Array(bandages, kindling, cloth));
tatters.divide = function(purpose){
	// Check whether the purpose parameter is within the purposes array
	if ((purposes.join("")).indexOf(purpose) >= 0){
		$("#output-span").html("You have now divided your " + this.shDesc + " into some " + purpose + ".");
	} else {
	$("#output-span").html("You're unable to divide your " + this.shDesc + " to make " + purpose + ".");
	}
}


waterCont.prototype = new invObj("water container", "A more-or-less water-tight vessel for carrying water. Unlike a food container, this one won't spill (much) water if sealed and carried carefully. You look upon this with pride: after all, YOU MADE THIS, and it's keeping you alive!", "../images/inv/waterCont.png", "a container for water");
waterCont.purpose = Array(waterStorage, drink);
waterCont.fill = function(purpose, item){
	// Check whether the intended purpose is within the purpose array
	if ((purpose.join("")).indexOf(purpose) >= 0){
		// if the intended purpose is ok, and the intended item is present
		if ((#mapLocale.items.join("")).indexOf(item) >= 0){
			$("#output-span").html("You've successfully added some " + item + " to your " + this.shDesc + ". It isn't completely water-tight, so carry it carefully.");
			waterSupply = 1;  // since I'm not using "var =" here, this line changes global variable
		} else {
			$("#output-span").html("You've got a good " + this.shDesc + ". but there is no " + item + " here to use it with.");
		}
	} else {
	$("#output-span").html("You're unable to use your " + this.shDesc + " for that purpose.");
	}
}
waterCont.drink = function(){
	if (waterSupply = 1){
		$("#output-span").html("Ahhh, so satisfying. You tried to drink it slowly but the heat is fierce and you couldn't stop. Your water supply is now empty.");
		waterSupply = 0; 
	} else {
		$("#output-span").html("Your don't have anything to drink! Try filling your water container first. With all the rain on this island, there must be a fresh water source nearby.");
	}
}







var camp =  new Object(); //camp inventory - anything deposited at camp - different from carried inventory
