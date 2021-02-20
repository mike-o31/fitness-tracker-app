let bmr
let tdee
const sex = document.getElementById('sex')
const measurements = document.getElementById('measurements')
const age = document.getElementById('age')
const weight = document.getElementById('weight')
const height = document.getElementById('height')
const activity = document.getElementById('activity')


document.querySelector('#units').addEventListener('change', function (e) {
    if (units.options[units.selectedIndex].value === 'imperial') {
        weight.setAttribute('placeholder', 'Weight(lbs)')
        height.setAttribute('placeholder', 'Height(inches)')
    } else if (units.options[units.selectedIndex].value === 'metric') {
        weight.setAttribute('placeholder', 'Weight(kgs)')
        height.setAttribute('placeholder', 'Height(cm)')
    }
})

document.querySelector('#bmr').addEventListener('submit', function (e) {
    e.preventDefault()
    if (sex.options[sex.selectedIndex].value === 'choices' || units.options[units.selectedIndex].value === 'unitSystem' || age.value === '' || weight.value === '' || height.value === '') {
        alert('Please fill each box')
    } else if (sex.options[sex.selectedIndex].value === 'male') {
        if (units.options[units.selectedIndex].value === 'imperial') {
            imperialMaleBmr()
            bmrSummary()
            saveBmr(bmr)
        } else if (units.options[units.selectedIndex].value === 'metric') {
            metricMaleBmr()
            bmrSummary()
            saveBmr(bmr)
        }
    } else if (sex.options[sex.selectedIndex].value === 'female') {
        if (units.options[units.selectedIndex].value === 'imperial') {
            imperialFemaleBmr()
            bmrSummary()
            saveBmr(bmr)
        } else if (units.options[units.selectedIndex].value === 'metric') {
            metricFemaleBmr()
            bmrSummary()
            saveBmr(bmr)
        }
    }
})

document.querySelector('#tdee').addEventListener('submit', function (e) {
    e.preventDefault()
    if (activity.options[activity.selectedIndex].value === 'activityLevel') {
        alert('Select activity level')
    } else {
        activityLevelEquations()
        tdeeSummary()
        saveTdee(tdee)
    }
})

