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

takeoff.addEventListener("click", function(){
    let response = window.confirm("Confirm that the shuttle is ready for takeoff.") 
    if(response){
        flightStatus.innerHTML = "Shuttle in flight."
        shuttleBackground.style.background = "blue"
        spaceShuttleHeight.innerHTML = 10000
    }   
})

landing.addEventListener("click", function(){
    window.alert("The shuttle is landing. Landing gear engaged.")
    flightStatus.innerHTML = "The shuttle has landed."
    shuttleBackground.style.background = ""
    spaceShuttleHeight.innerHTML = 0
})

missionAbort.addEventListener("click", function(){
    let response = window.confirm("Confirm that you want to abort the mission")

    if(response){
        flightStatus.innerHTML("Mission Aborted")
        shuttleBackground.style.background = "green"
        spaceShuttleHeight.innerHTML = 0
    }

})

up.addEventListener("click", function(){
    let position = parseInt(rocket.style["margin-top"])
    position -= 50
    rocket.style["margin-top"] = `${position}px`
})








})