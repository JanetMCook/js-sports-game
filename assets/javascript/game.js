let resetButton = document.querySelector('#reset-button')
let resetCounterElement = document.querySelector('#num-resets')
let teamoneShootButton = document.querySelector('#teamone-shoot-button')
let teamtwoShootButton = document.querySelector('#teamtwo-shoot-button')
let teamoneNumshotsElement = document.querySelector('#teamone-numshots')
let teamtwoNumshotsElement = document.querySelector('#teamtwo-numshots')
let teamoneGoalsElement = document.querySelector('#teamone-numgoals')
let teamtwoGoalsElement = document.querySelector('#teamtwo-numgoals')

resetButton.addEventListener('click', function () {
    console.log('reset clicked')
    let numResets = Number(resetCounterElement.innerHTML) + 1
    resetCounterElement.innerHTML = numResets

    teamoneNumshotsElement.innerHTML = 0
    teamtwoNumshotsElement.innerHTML = 0
    teamoneGoalsElement.innerHTML = 0
    teamtwoGoalsElement.innerHTML = 0

})

teamoneShootButton.addEventListener('click', function () {
    console.log('Team 1 button')

    let teamoneNumshots = parseInt(teamoneNumshotsElement.innerHTML) + 1
    teamoneNumshotsElement.innerHTML = teamoneNumshots
    
    let randNumber = Math.floor(Math.random() * 3) + 1
    if (Math.random() > .5) {
        let teamoneNumGoals = parseInt(teamoneGoalsElement.innerHTML) + 1
        teamoneGoalsElement.innerHTML = teamoneNumGoals
        console.log("Swish!")
    } else {
        (Math.random() < .5)
        console.log("Airhorn!")
    }
})

teamtwoShootButton.addEventListener('click', function () {
    console.log('Team 2 button')

    let teamtwoNumshots = parseInt(teamtwoNumshotsElement.innerHTML) + 1
    teamtwoNumshotsElement.innerHTML = teamtwoNumshots

    
    let randNumber = Math.floor(Math.random() * 3) + 1
    if (Math.random() > .5) {
        let teamtwoGoals = parseInt(teamtwoGoalsElement.innerHTML) + 1
        teamtwoGoalsElement.innerHTML = teamtwoGoals
        console.log("Swish!")
    } else {
        (Math.random() < .5)
        console.log("Airhorn!")
    }
})