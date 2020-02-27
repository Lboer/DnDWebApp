document.getElementById("loadSpells").addEventListener("click", filterSpells)

function filterSpells() {
    removeSpells();
    var caster = document.getElementById("caster");
    var level = document.getElementById("level");
    var school = document.getElementById("school");
    if (level.value != "Default") {
        var levelSort = array.filter(function (toSort) {
            return toSort.level == level.value;
        })
    }
    if (level.value == "Default"){
        var levelSort = array;
    }
    if (school.value != "Default") {
        var schoolSort = levelSort.filter(function (toSort) {
            return toSort.school == school.value;
        })
    }
    if (school.value == "Default"){
        var schoolSort = levelSort;
    }
    if (caster.value != "Default") {
        var totalSorted = [];
        for(i = 0; i < schoolSort.length; i++){
            if(schoolSort[i].class.includes(caster.value)){
                totalSorted.push(schoolSort[i]);
            }
        }
    }
    if (caster.value == "Default"){
        var totalSorted = schoolSort;
    }
    loadSpells(totalSorted);
}

/** TO DO: MAKE THIS WORK */
function removeSpells(){
    var currentDiv = document.getElementsByClassName("spellDiv")
    for(i = 0; i < currentDiv.length; i++){
        document.getElementById("SpellContainer").removeChild(currentDiv[0]);
    }
}


function loadSpells(array){
    for(i = 0; i < array.length; i++){
        var element = document.createElement("div");
        element.setAttribute("class", "spellDiv")
        element.appendChild(document.createTextNode(array[i].name+"\t\t"+array[i].casting_time+"\t\t"+array[i].range+"\t\t"+array[i].duration+"\t\t"+array[i].level));
        var desc = document.createElement("p");
        desc.appendChild(document.createTextNode(array[i].desc+"\n Concentration: "+array[i].concentration+"\n Ritual:"+array[i].ritual+"\n Materials: "+array[i].material+"\n Components: "+array[i].components))
        element.appendChild(desc);
        document.getElementById("SpellContainer").appendChild(element);
    }
}