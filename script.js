// NPC code
// global var that keeps the generated NPC until a new one is generated

var globalSave = '';


// als er op de button geklikt wordt, start de functie
document.getElementById("genNPC").addEventListener("click", checkRace)

function checkRace() {

    // check gender
    var optA = document.getElementById("male").checked
    var optB = document.getElementById("female").checked

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

}