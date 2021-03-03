// Generate BMR DOM summary
const bmrSummary = () => {
    const p = document.createElement('p')
    p.textContent = `BMR = ${Math.round(bmr)} calories`
    document.querySelector('#log').appendChild(p)
}

// Generate TDEE DOM summary
const tdeeSummary = () => {
    const p = document.createElement('p')
    p.textContent = `TDEE = ${Math.round(tdee)} calories`
    document.querySelector('#log').appendChild(p)
}

// Save BMR to local storage
const saveBmr = (bmr) => {
    localStorage.setItem('bmr', JSON.stringify(bmr))
}

// Save TDEE to local storage
const saveTdee = (tdee) => {
    localStorage.setItem('tdee', JSON.stringify(tdee))
}

const getSavedBmr = () => {
    const bmrJSON = localStorage.getItem('bmr')
    bmrJSON !== null ? JSON.parse(bmrJSON) : []
}

const getSavedTdee = () => {
    const tdeeJSON = localStorage.getItem('tdee')
    tdeeJSON !== null ? JSON.parse(tdeeJSON) : []
}

// Male metric BMR equation
const metricMaleBmr = () => {
    const ageInt = parseInt(document.getElementById('age').value, 10)
    const weightInt = parseInt(document.getElementById('weight').value, 10)
    const heightInt = parseInt(document.getElementById('height').value, 10)
    const hbEquation = 66.5 + (13.75 * weightInt) + (5.003 * heightInt) - (6.755 * ageInt)
    const rzEquation = 88.362 + (13.397 * weightInt) + (4.799 * heightInt) - (5.677 * ageInt)
    bmr = (hbEquation + rzEquation) / 2
    return bmr
}

// Female metric BMR equation
const metricFemaleBmr = () => {
    const ageInt = parseInt(document.getElementById('age').value, 10)
    const weightInt = parseInt(document.getElementById('weight').value, 10)
    const heightInt = parseInt(document.getElementById('height').value, 10)
    const hbEquation = 655 + (9.563 * weightInt) + (1.850 * heightInt) - (4.676 * ageInt)
    const rzEquation = 447.59 + (9.247 * weightInt) + (3.089 * heightInt) - (4.33 * ageInt)
    bmr = (hbEquation + rzEquation) / 2
    return bmr
}

// Male imperial BMR equation
const imperialMaleBmr = () => {
    const ageInt = parseInt(document.getElementById('age').value, 10)
    const weightInt = parseInt(document.getElementById('weight').value, 10)
    const heightInt = parseInt(document.getElementById('height').value, 10)
    const hbEquation = 66 + (6.2 * weightInt) + (12.7 * heightInt) - (6.76 * ageInt)
    bmr = hbEquation
    return bmr
}

// Female imperial BMR equation
const imperialFemaleBmr = () => {
    const ageInt = parseInt(document.getElementById('age').value, 10)
    const weightInt = parseInt(document.getElementById('weight').value, 10)
    const heightInt = parseInt(document.getElementById('height').value, 10)
    const hbEquation = 655 + (4.35 * weightInt) + (4.7 * heightInt) - (4.7 * ageInt)
    bmr = hbEquation
    return bmr
}

// Activity level equations for TDEE
const activityLevelEquations = () => {
    if (activity.options[activity.selectedIndex].value === 'sedentary') {
        tdee = bmr * 1.2
        return tdee
    } else if (activity.options[activity.selectedIndex].value === 'lightlyActive') {
        tdee = bmr * 1.375
        return tdee
    } else if (activity.options[activity.selectedIndex].value === 'moderatelyActive') {
        tdee = bmr * 1.55
        return tdee
    } else if (activity.options[activity.selectedIndex].value === 'veryActive') {
        tdee = bmr * 1.725
        return tdee
    } else if (activity.options[activity.selectedIndex].value === 'extremelyActive') {
        tdee = bmr * 1.9
        return tdee
    }
}

const statDropdown = () => {
    if (units.options[units.selectedIndex].value === 'imperial') {
        weight.setAttribute('placeholder', 'Weight(lbs)')
        height.setAttribute('placeholder', 'Height(inches)')
    } else if (units.options[units.selectedIndex].value === 'metric') {
        weight.setAttribute('placeholder', 'Weight(kgs)')
        height.setAttribute('placeholder', 'Height(cm)')
    }
}

const bmrForm = () => {
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
}

const tdeeForm = () => {
    if (activity.options[activity.selectedIndex].value === 'activityLevel') {
        alert('Select activity level')
    } else {
        activityLevelEquations()
        tdeeSummary()
        saveTdee(tdee)
    }
}