var table = document.getElementById("table");
var count = 1;
var tbody = document.createElement("tbody");
for (i = 0; i < 12; i++){
    var tr = document.createElement("tr");
    for (j = 0; j < 20; j++){
        var td = document.createElement('td');
        tr.appendChild(td)
        td.setAttribute("id", count)
        count++
    }
    tbody.appendChild(tr);
    table.appendChild(tbody);
}

var table = document.getElementById("table"),
    rIndex, cIndex;

// Change color on input
var table = document.getElementsByTagName('table')[0];

var dungeon = ["tex/Dungeon/floor.png", "tex/Dungeon/wall.png", "tex/Dungeon/cliff.png", "tex/Dungeon/pillar.png", "tex/Dungeon/lit.png", "tex/Dungeon/wood.png", "tex/Dungeon/altar.png", "tex/black.png"];
var forest = ["tex/Forest/grass.png", "tex/Forest/cliff.png", "tex/Forest/tree.png", "tex/Forest/water.png", "tex/Forest/stone.png", "tex/Forest/wood.png", "tex/black.png"];
var cave = ["tex/Cave/stone.png", "tex/Cave/wall.png", "tex/Cave/cliff.png", "tex/Cave/gravel.png", "tex/Cave/andesite.png", "tex/Cave/water.png", "tex/Cave/lava.png", "tex/black.png"];
var coast = ["tex/Coast/sand.png", "tex/Coast/water.png", "tex/Coast/cliff.png", "tex/Coast/stone.png", "tex/Coast/gravel.png", "tex/Coast/wood.png", "tex/black.png"];
var desert = ["tex/Desert/sand.png", "tex/Desert/sandstone.png", "tex/Desert/sandbrick.png", "tex/Desert/cliff.png", "tex/Desert/stone.png", "tex/Desert/cactus.png", "tex/Desert/lava.png", "tex/Desert/water.png", "tex/Desert/chest.png", "tex/black.png"]
var mountain = ["tex/Mountain/stone.png", "tex/Mountain/snow.png", "tex/Mountain/cliff.png", "tex/Mountain/dirt.png", "tex/Mountain/water.png", "tex/Mountain/tree.png", "tex/Mountain/andesite.png", "tex/black.png"];
var swamp = ["tex/Swamp/water.png", "tex/Swamp/dirt.png", "tex/Swamp/grass.png", "tex/Swamp/tree.png", "tex/Swamp/wood.png", "tex/black.png", ];
var city = ["tex/City/grass.png", "tex/City/tree.png", "tex/City/stonebrick.png", "tex/City/brick.png", "tex/City/cobble.png", "tex/City/cliff.png", "tex/City/stone.png", "tex/City/water.png", "tex/black.png", ];
var def = city;
var currents = {};

getNextIndex = function(index) {
    return index === undefined || index >= def.length - 1 ? 0 : index + 1
}

table.onclick = function(e) {
    var target = (e || window.event).target;

    if (target.tagName in { TD: 1, TH: 1 }) {
        var new_bg_index = getNextIndex(currents[target.id])
        currents[target.id] = new_bg_index
        target.setAttribute('style', 'background-image:' + "url(" + def[new_bg_index] + ")");
    }
};

function chooseTerrain() {
    var showValue = document.getElementById("choice").value;
    if(showValue == "default") {
        console.log(showValue)
        return
    }
    if(showValue == "dungeon") {
        def = dungeon
        document.getElementById("question").style.display = "none";
        document.getElementById("table").style.display = "block"
    }
    if(showValue == "forest") {
        def = forest
        document.getElementById("question").style.display = "none";
        document.getElementById("table").style.display = "block"
    }
    if(showValue == "cave") {
        def = cave
        document.getElementById("question").style.display = "none";
        document.getElementById("table").style.display = "block"
    }
    if(showValue == "coast") {
        def = coast
        document.getElementById("question").style.display = "none";
        document.getElementById("table").style.display = "block"
    }
    if(showValue == "desert") {
        def = desert
        document.getElementById("question").style.display = "none";
        document.getElementById("table").style.display = "block"
    }
    if(showValue == "mountain") {
        def = mountain
        document.getElementById("question").style.display = "none";
        document.getElementById("table").style.display = "block"
    }
    if(showValue == "swamp") {
        def = swamp
        document.getElementById("question").style.display = "none";
        document.getElementById("table").style.display = "block"
    }
    if(showValue == "city") {
        def = city
        document.getElementById("question").style.display = "none";
        document.getElementById("table").style.display = "block"
    }
}