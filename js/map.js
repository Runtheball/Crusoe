//use an object Constructor to simplify map tile creation
function mapArea(terrain,resource,item,icon){
	this.terrain = terrain;
	this.resource = resource;
	this.item = item;
	this.icon = icon;
}

//create a few map tiles...NOTE: add icon for map images to each var
//May also need to add rarity for each tile, as a % of total # of tiles
//on the island
var beach1 = new mapArea("beach", "driftwood", "ship's spar");//this tile should be unique
var beach2 = new mapArea("beach", "fish", "");
var beach3 = new mapArea("beach", "shellfish", "");

var forest1 = new mapArea("forest", "coconut", "fresh water spring");
var forest2 = new mapArea("forest", "coconut", "mangos");
var forest3 = new mapArea("forest", "coconut", "bamboo");
var forest4 = new mapArea("forest", "hardwood", "fresh water spring");
var forest5 = new mapArea("forest", "hardwood", "animals");
var forest6 = new mapArea("forest", "coconut", "fresh water stream");
var forest7 = new mapArea("forest", "hardwood", "vines");

var ocean = new mapArea("ocean", "fish", "");

var mountain1 = new mapArea("mountain", "stone", "fresh water spring");
var mountain2 = new mapArea("mountain", "stone", "peak");
var mountain3 = new mapArea("mountain", "stone", "cave");
var mountain4 = new mapArea("mountain", "stone", "fresh water stream");
var mountain5 = new mapArea("mountain", "impassable", "");
var mountain6 = new mapArea("mountain", "stone", "sharp edged rocks");


//TO DO: create a function to arrange map pieces. Include rules to ensure contiguous beaches, mountain chains, streams, etc.