document.getElementById("loadSpells").addEventListener("click", loadSpells)

function loadSpells() {
    var caster = document.getElementById("caster");
    var level = document.getElementById("level");
    var school = document.getElementById("school");
    if (level.value != "Default") {
        var levelSort = array.filter(function (toSort) {
            return toSort.level == level.value;
        })
    }
    if (school.value != "Default") {
        var schoolSort = levelSort.filter(function (toSort) {
            return toSort.school == school.value;
        })
    }
    if (caster.value != "Default") {
        console.log(schoolSort);
        var totalSorted = [];
        for(i = 0; i < schoolSort.length; i++){
            if(schoolSort[i].class.includes(caster.value)){
                totalSorted.push(schoolSort[i]);
            }
        }
        console.log(totalSorted);
    }
}