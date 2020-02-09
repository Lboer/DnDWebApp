/** Global NPC vars */
var firstname = "";
var lastname = "";

// NPC code
// global var that keeps the generated NPC until a new one is generated

var globalSave = '';


// als er op de button geklikt wordt, start de functie
document.getElementById("genNPC").addEventListener("click", checkRace)



function checkRace() {

    // check gender
    var optA = document.getElementById("male").checked

    // All others
    var raceTemp = race[Math.floor(Math.random() * race.length)];
    var hairTemp = hair[Math.floor(Math.random() * hair.length)];
    var hairCTemp = hairColour[Math.floor(Math.random() * hairColour.length)];
    var facehairTemp = facialHair[Math.floor(Math.random() * facialHair.length)];
    var scarsTemp = scars[Math.floor(Math.random() * scars.length)];
    var heightTemp = height[Math.floor(Math.random() * height.length)];
    var ageTemp = age[Math.floor(Math.random() * age.length)];
    var wealthTemp = wealth[Math.floor(Math.random() * wealth.length)];
    var eyesTemp = eyes[Math.floor(Math.random() * eyes.length)];
    var faceTemp = face[Math.floor(Math.random() * face.length)];
    var confidenceTemp = confidence[Math.floor(Math.random() * confidence.length)];
    var goalTemp = goal[Math.floor(Math.random() * goal.length)];
    var build = physique[Math.floor(Math.random() * physique.length)];
    var trait1 = pers[Math.floor(Math.random() * pers.length)];
    var trait2 = pers[Math.floor(Math.random() * pers.length)];

    console.log(raceTemp);
    var lastname = "";
    if (raceTemp == "dwarf" && optA == true) {
        firstname = DwarfMale[Math.floor(Math.random() * DwarfMale.length)];
        lastname = DwarfLast[Math.floor(Math.random() * DwarfLast.length)];
    } else if (raceTemp == "dwarf" && optA == false) {
        firstname = DwarfFemale[Math.floor(Math.random() * DwarfFemale.length)];
        lastname = DwarfLast[Math.floor(Math.random() * DwarfLast.length)];
    } else if (raceTemp == "elf" && optA == true) {
        firstname = ElfMale[Math.floor(Math.random() * ElfMale.length)];
        lastname = ElfLast[Math.floor(Math.random() * ElfLast.length)];
    } else if (raceTemp == "elf" && optA == false) {
        firstname = ElfFemale[Math.floor(Math.random() * ElfFemale.length)];
        lastname = ElfLast[Math.floor(Math.random() * ElfLast.length)];
    } else if (raceTemp == "halfling" && optA == true) {
        firstname = HalflingMale[Math.floor(Math.random() * HalflingMale.length)];
        lastname = HalflingLast[Math.floor(Math.random() * HalflingLast.length)];
    } else if (raceTemp == "halfling" && optA == false) {
        firstname = HalflingFemale[Math.floor(Math.random() * HalflingFemale.length)];
        lastname = HalflingLast[Math.floor(Math.random() * HalflingLast.length)];
    } else if (raceTemp == "half-elf" && optA == true) {
        firstname = HalfElfMale[Math.floor(Math.random() * HalfElfMale.length)];
        lastname = HumanLast[Math.floor(Math.random() * HumanLast.length)];
    } else if (raceTemp == "half-elf" && optA == false) {
        firstname = HalfElfFemale[Math.floor(Math.random() * HalfElfFemale.length)];
        lastname = HumanLast[Math.floor(Math.random() * HumanLast.length)];
    } else if (raceTemp == "half-orc" && optA == true) {
        firstname = HalfOrcMale[Math.floor(Math.random() * HalfOrcMale.length)];
    } else if (raceTemp == "half-orc" && optA == false) {
        firstname = HalfOrcFemale[Math.floor(Math.random() * HalfOrcFemale.length)];
    } else if (raceTemp == "dragonborn" && optA == true) {
        firstname = DragonbornMale[Math.floor(Math.random() * DragonbornMale.length)];
        lastname = DragonbornLast[Math.floor(Math.random() * DragonbornLast.length)];
    } else if (raceTemp == "dragonborn" && optA == false) {
        firstname = DragonbornFemale[Math.floor(Math.random() * DragonbornFemale.length)];
        lastname = DragonbornLast[Math.floor(Math.random() * DragonbornLast.length)];
    } else if (raceTemp == "tiefling" && optA == true) {
        firstname = TieflingMale[Math.floor(Math.random() * TieflingMale.length)];
        lastname = TieflingLast[Math.floor(Math.random() * TieflingLast.length)];
    } else if (raceTemp == "tiefling" && optA == false) {
        firstname = TieflingFemale[Math.floor(Math.random() * TieflingFemale.length)];
        lastname = TieflingLast[Math.floor(Math.random() * TieflingLast.length)];
    } else if (raceTemp == "gnome" && optA == true) {
        firstname = GnomeMale[Math.floor(Math.random() * GnomeMale.length)];
    } else if (raceTemp == "gnome" && optA == false) {
        firstname = GnomeFemale[Math.floor(Math.random() * GnomeFemale.length)];
    } else if (raceTemp == "human" && optA == false) {
        firstname = HumanFemale[Math.floor(Math.random() * HumanFemale.length)];
        lastname = HumanLast[Math.floor(Math.random() * HumanLast.length)];
    } else if (raceTemp == "human" && optA == true) {
        firstname = HumanMale[Math.floor(Math.random() * HumanMale.length)];
        lastname = HumanLast[Math.floor(Math.random() * HumanLast.length)];
    }
    console.log(firstname + " " + lastname)
}

// Save NPC code
document.getElementById("saveNPC").addEventListener("click", Save)

function Save() {
    //post to php
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
        const serverResponse = document.getElementById("test");
        serverResponse.innerHTML = this.responseText;
    };

    xhr.open("POST", "NPC/write.php");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("name =" +
        globalSave);
}
// Music code
// als er op de button geklikt wordt, wordt dit geexecute
document.getElementById("playMusic").addEventListener("click", checkAmbiance)

// Defined audio
var audioTown = new Audio('music/Town.mp3');
var audioCity = new Audio('music/City.mp3');
var audioForest = new Audio('music/Forest.mp3');
var audioPlains = new Audio('music/Plains.mp3');
var audioMountains = new Audio('music/Mountains.mp3');
var audioDesert = new Audio('music/Desert.mp3');
var audioTundra = new Audio('music/Tundra.mp3');
var audioDungeon = new Audio('music/Dungeon.mp3');
var audioTravel = new Audio('music/Travel.mp3');
var audioBossfight = new Audio('music/Bossfight.mp3');
var audioCreepy = new Audio('music/Creepy.mp3');
var audioHeavyStorm = new Audio('music/HeavyStorm.mp3');
var audioLightStorm = new Audio('music/LightStorm.mp3');
var audioNight = new Audio('music/Night.mp3');
var audioCampfire = new Audio('music/Campfire.mp3');
var audioTavern = new Audio('music/Tavern.mp3');
var audioCaves = new Audio('music/Caves.mp3');
var audioSea = new Audio('music/Sea.mp3');
var audioCoast = new Audio('music/Coast.mp3');
var audioFight = new Audio('music/Fight.mp3');
var audioRain = new Audio('music/Rain.mp3')

// kijken welke soort muziek geselecteerd is
function checkAmbiance() {
    var opt1 = document.getElementById("town").checked
    var opt2 = document.getElementById("city").checked
    var opt3 = document.getElementById("forest").checked
    var opt4 = document.getElementById("plains").checked
    var opt5 = document.getElementById("mountains").checked
    var opt6 = document.getElementById("desert").checked
    var opt7 = document.getElementById("tundra").checked
    var opt8 = document.getElementById("dungeon").checked
    var opt9 = document.getElementById("travel").checked
    var opt10 = document.getElementById("bossfight").checked
    var opt11 = document.getElementById("creepy").checked
    var opt12 = document.getElementById("heavyStorm").checked
    var opt13 = document.getElementById("lightStorm").checked
    var opt14 = document.getElementById("night").checked
    var opt15 = document.getElementById("campfire").checked
    var opt16 = document.getElementById("tavern").checked
    var opt17 = document.getElementById("caves").checked
    var opt18 = document.getElementById("sea").checked
    var opt19 = document.getElementById("coast").checked
    var opt20 = document.getElementById("fight").checked
    var opt21 = document.getElementById("rain").checked

    // afspelen per lijst
    if (opt1 == true) {
        audioTown.play();
    };
    if (opt2 == true) {
        audioCity.play();
    };
    if (opt3 == true) {
        audioForest.play();
    };
    if (opt4 == true) {
        audioPlains.play();
    };
    if (opt5 == true) {
        audioMountains.play();
    };
    if (opt6 == true) {
        audioDesert.play();
    };
    if (opt7 == true) {
        audioTundra.play();
    };
    if (opt8 == true) {
        audioDungeon.play();
    };
    if (opt9 == true) {
        audioTravel.play();
    };
    if (opt10 == true) {
        audioBossfight.play();
    };
    if (opt11 == true) {
        audioCreepy.play();
    };
    if (opt12 == true) {
        audioHeavyStorm.play();
    };
    if (opt13 == true) {
        audioLightStorm.play();
    };
    if (opt14 == true) {
        audioNight.play();
    };
    if (opt15 == true) {
        audioCampfire.play();
    };
    if (opt16 == true) {
        audioTavern.play();
    };
    if (opt17 == true) {
        audioCaves.play();
    };
    if (opt18 == true) {
        audioSea.play();
    };
    if (opt19 == true) {
        audioCoast.play();
    };
    if (opt20 == true) {
        audioFight.play();
    };
    if (opt21 == true) {
        audioRain.play();
    }
}

// pauzeer de muziek
document.getElementById("pause").addEventListener("click", pauseMusic)

function pauseMusic() {
    audioTown.pause();
    audioCity.pause();
    audioForest.pause();
    audioPlains.pause();
    audioMountains.pause();
    audioDesert.pause();
    audioTundra.pause();
    audioDungeon.pause();
    audioTravel.pause();
    audioBossfight.pause();
    audioCreepy.pause();
    audioHeavyStorm.pause();
    audioLightStorm.pause();
    audioNight.pause();
    audioCampfire.pause();
    audioTavern.pause();
    audioCaves.pause();
    audioSea.pause();
    audioCoast.pause();
    audioFight.pause();
    audioRain.pause();
}

// Initiative code

// Add, Edit & Remove code
// global vars
var rIndex,
    table = document.getElementById("Initiative");

// check if inputs (0 t/m 2) are empty
function checkEmpty() {
    var isEmpty = false,
        name = document.getElementById("InitInput").value,
        Init = document.getElementById("InitInput2").value,
        AC = document.getElementById("InitInput3").value;

    if (name === "") {
        alert("type the name");
        isEmpty = true;
    }
    if (Init === "") {
        alert("type the initiative");
        isEmpty = true;
    }
    if (AC === "") {
        alert("type the AC");
        isEmpty = true;
    }
    return isEmpty;

}


// add row
document.getElementById("addTd").addEventListener("click", addRow)

function addRow() {
    if (!checkEmpty()) {
        var newRow = table.insertRow(table.length),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2),
            cell4 = newRow.insertCell(3),
            name = document.getElementById("InitInput").value,
            Init = document.getElementById("InitInput2").value,
            AC = document.getElementById("InitInput3").value,
            PP = document.getElementById("InitInput4").value;

        cell1.innerHTML = name;
        cell2.innerHTML = Init;
        cell3.innerHTML = AC;
        cell4.innerHTML = PP;

        // add new row to selectables
        selectRow();
    }
}

// select row
var index;

function selectRow() {
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            rIndex = this.rowIndex;
            console.log(rIndex);
            document.getElementById("InitInput").value = this.cells[0].innerHTML;
            document.getElementById("InitInput2").value = this.cells[1].innerHTML;
            document.getElementById("InitInput3").value = this.cells[2].innerHTML;
            document.getElementById("InitInput4").value = this.cells[3].innerHTML;
        };
    }
}
selectRow();

// edit row
document.getElementById("editTd").addEventListener("click", editRow)

function editRow() {
    var name = document.getElementById("InitInput").value,
        Init = document.getElementById("InitInput2").value,
        AC = document.getElementById("InitInput3").value,
        PP = document.getElementById("InitInput4").value;
    if (!checkEmpty()) {
        table.rows[rIndex].cells[0].innerHTML = name;
        table.rows[rIndex].cells[1].innerHTML = Init;
        table.rows[rIndex].cells[2].innerHTML = AC;
        table.rows[rIndex].cells[3].innerHTML = PP;
    }
}

// remove row
document.getElementById("removeTd").addEventListener("click", removeRow)

function removeRow() {
    table.deleteRow(rIndex);
    document.getElementById("InitInput").value = "";
    document.getElementById("InitInput2").value = "";
    document.getElementById("InitInput3").value = "";
    document.getElementById("InitInput4").value = "";
}


// move row
function moveRow(direction) {
    var rows = document.getElementById("Initiative").rows;
    var parent = rows[rIndex].parentNode;
    if (direction === "up") {
        parent.insertBefore(rows[rIndex], rows[rIndex - 1]);
        rIndex--;
    }
    if (direction === "down") {
        parent.insertBefore(rows[rIndex + 1], rows[rIndex]);
        rIndex++;
    }
}

// sort
document.getElementById("sort").addEventListener("click", sortRows)

function sortRows() {
    var rowsOG = document.getElementById("Initiative").rows;
    rows = Array.prototype.slice.call(rowsOG)
    rows.splice(0, 1);
    rows.sort(function (a, b) {
        return b.cells[1].innerHTML - a.cells[1].innerHTML;
    })
    var parent = rowsOG[0].parentNode;
    while (parent.childNodes.length > 1) {
        parent.removeChild(parent.lastChild);
    }
    for (var i = 0; i < rows.length; i++) {
        parent.appendChild(rows[i]);
    }
}
