window.addEventListener("load", function(){
const flightStatus = document.getElementById('flightStatus');
const takeoff = document.getElementById('takeoff');
const shuttleBackground = document.getElementById('shuttleBackground')
const spaceShuttleHeight = document.getElementById('spaceShuttleHeight')
const landing = document.getElementById('landing')
const missionAbort = document.getElementById('missionAbort')
const up = document.getElementById('up')
const down = document.getElementById('down')
const left = document.getElementById('left')
const right = document.getElementById('right')
const rocket = document.getElementById('rocket') 

let rocketPosX = 0;
let rocketPosY = 0;
let altitude = 0;

takeoff.addEventListener("click", function(){
    let response = window.confirm("Confirm that the shuttle is ready for takeoff.") 
    if(response){
        flightStatus.innerHTML = "Shuttle in flight."
        shuttleBackground.style.background = "blue"
        spaceShuttleHeight.innerHTML = 10000
        rocketPosY = 10;
        rocket.style.marginBottom = rocketPosY + 'px';
    }   
})

landing.addEventListener("click", function(){
    window.alert("The shuttle is landing. Landing gear engaged.")
    flightStatus.innerHTML = "The shuttle has landed."
    shuttleBackground.style.background = "";
    spaceShuttleHeight.innerHTML = 0;
    resetRocket();
})

missionAbort.addEventListener("click", function(){
    let response = window.confirm("Confirm that you want to abort the mission")

    if(response){
        flightStatus.innerHTML("Mission Aborted")
        shuttleBackground.style.background = "green"
        spaceShuttleHeight.innerHTML = 0
        resetRocket();
    }

})

document.addEventListener('click', function(event) {
    let bkgWidth = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue('width'));

    if (event.target.id === 'left' && rocketPosX > -(bkgWidth / 2 - 40)) {
      rocketPosX -= 10;
      rocket.style.marginLeft = rocketPosX + 'px';
    }
    if (event.target.id === 'right' && rocketPosX < (bkgWidth / 2 - 40)) {
      rocketPosX += 10;
      rocket.style.marginLeft = rocketPosX + 'px';
    }
    if (event.target.id === 'up' && altitude < 250000) {
      rocketPosY += 10;
      rocket.style.marginBottom = rocketPosY + 'px';
      altitude += 10000;
      spaceShuttleHeight.innerHTML = altitude;
    }
    if (event.target.id === 'down' && altitude > 0) {
      rocketPosY -= 10;
      rocket.style.marginBottom = rocketPosY + 'px';
      altitude -= 10000;
      spaceShuttleHeight.innerHTML = altitude;
    }
})

function resetRocket() {
    rocketPosX = 0;
    rocketPosY = 0;
    rocket.style.marginLeft = rocketPosX + 'px';
    rocket.style.marginBottom = rocketPosY + 'px';
  }

})