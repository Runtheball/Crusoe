//use an object Constructor to simplify map tile creation
function mapArea(terrain,resource,invItem,icon){
	this.terrain = terrain;
	this.resource = resource;
	this.invItem = invItem;
	this.icon = icon; //the icon should be a png image, to appear on map and in inventory if collected
}

//create a few map tiles...NOTE: add icon for map images to each var
//May also need to add rarity for each tile, as a % of total # of tiles
//on the island
//This is a good way to monetize the game. Player's purchase 'luck' points which cause 'lucky' events to occur, like an item washes-up on the beach. 
var beach1 = new mapArea("beach", "driftwood", "ship's spar", "../map/b1.png");//this tile should be unique, and placed in starting locale
var beach2 = new mapArea("beach", "fish", "", "../map/b2.png");
var beach3 = new mapArea("beach", "shellfish", "", "../map/b3.png");

var forest1 = new mapArea("forest", "palm", "fresh water", "fresh water spring", "../map/f1.png");
var forest2 = new mapArea("forest", "palm", "mangos", "tree", "../map/f2.png");
var forest3 = new mapArea("forest", "palm", "bamboo", "bamboo", "../map/f3.png");
var forest4 = new mapArea("forest", "hardwood", "fresh water", "fresh water spring", "../map/f4.png");
var forest5 = new mapArea("forest", "hardwood", "animal", "tree", "../map/f5.png");
var forest6 = new mapArea("forest", "palm", "fresh water", "stream", "../map/f6.png");
var forest7 = new mapArea("forest", "hardwood", "vines", "tree", "../map/f7.png");
var forest8 = new mapArea("forest", "palm", "coconut", "tree", "../map/f8.png");

var ocean = new mapArea("ocean", "fish", "", "../map/o1.png");

var mountain1 = new mapArea("mountain", "stone", "fresh water", "fresh water spring", "../map/m1.png");
var mountain2 = new mapArea("mountain", "stone", "", "peak", "../map/m2.png");
var mountain3 = new mapArea("mountain", "stone", "", "cave", "../map/m3.png");
var mountain4 = new mapArea("mountain", "stone", "fresh water", "stream", "../map/m4.png");
var mountain5 = new mapArea("mountain", "impassable", "", "peak", "../map/m5.png");
var mountain6 = new mapArea("mountain", "stone", "sharp edged rocks", "mountain", "../map/m6.png");

var swamp1 = new mapArea("swamp", "animals", "eggs", "../map/s1.png");
var swamp2 = new mapArea("swamp", "animals", "animal", "../map/s2.png");


//TO DO: create a function to arrange map pieces. Include rules to ensure contiguous beaches, mountain chains, streams, etc. 
// http://www.tonypa.pri.ee/tbw/tut02.html  looks like a great primer for creating maps

//example: var items = [[1,2],[3,4],[5,6]];
//example: alert(items[0][0]); 
var map = []
