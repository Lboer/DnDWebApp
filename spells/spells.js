document.getElementById("loadSpells").addEventListener("click", filterSpells)

function filterSpells() {
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

function loadSpells(array){
    for(i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}