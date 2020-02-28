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
    updateClicks();
}

/** Removes spells before displaying them */
function removeSpells(){
    var currentDiv = document.querySelectorAll(".spellDiv");
    for(i = 0; i < currentDiv.length; i++){
        document.getElementById("SpellContainer").removeChild(currentDiv[i]);
    }

}


function loadSpells(array){
    for(i = 0; i < array.length; i++){
        var element = document.createElement("button");
        var tbl = document.createElement("table");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");
        var td5 = document.createElement("td");
        td1.appendChild(document.createTextNode(array[i].name))
        td2.appendChild(document.createTextNode(array[i].casting_time))
        td3.appendChild(document.createTextNode(array[i].range))
        td4.appendChild(document.createTextNode(array[i].duration))
        td5.appendChild(document.createTextNode(array[i].level))
        tbl.appendChild(td1);
        tbl.appendChild(td2);
        tbl.appendChild(td3);
        tbl.appendChild(td4);
        tbl.appendChild(td5);
        element.appendChild(tbl);
        element.setAttribute("class", "spellDiv")
        var desc = document.createElement("p");
        desc.appendChild(document.createTextNode(array[i].desc+"\n Concentration: "+array[i].concentration+"\n Ritual:"+array[i].ritual+"\n Materials: "+array[i].material+"\n Components: "+array[i].components))
        element.appendChild(desc);
        document.getElementById("SpellContainer").appendChild(element);
    }
}

function updateClicks() {
    var coll = document.querySelectorAll(".spellDiv");
    var i = 0;

    for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function() {
                var content = this.getElementsByTagName("p");
                if (content[0].firstChild.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
            });
        }
}