let bmr = getSavedBmr()
let tdee = getSavedTdee()
const sex = document.getElementById('sex')
const measurements = document.getElementById('measurements')
const age = document.getElementById('age')
const weight = document.getElementById('weight')
const height = document.getElementById('height')
const activity = document.getElementById('activity')


document.querySelector('#units').addEventListener('change', function (e) {
    statDropdown()
})

document.querySelector('#bmr').addEventListener('submit', function (e) {
    e.preventDefault()
    bmrForm()
})

document.querySelector('#tdee').addEventListener('submit', function (e) {
    e.preventDefault()
    tdeeForm()
})

