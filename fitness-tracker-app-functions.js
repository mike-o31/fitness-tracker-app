// Generate BMR DOM summary
const bmrSummary = function () {
    const p = document.createElement('p')
    p.textContent = `BMR = ${Math.round(bmr)} calories`
    document.querySelector('#log').appendChild(p)
}

// Generate TDEE DOM summary
const tdeeSummary = function () {
    const p = document.createElement('p')
    p.textContent = `TDEE = ${Math.round(tdee)} calories`
    document.querySelector('#log').appendChild(p)
}

// Save BMR to local storage
const saveBmr = function (bmr) {
    localStorage.setItem('bmr', JSON.stringify(bmr))
}

// Save TDEE to local storage
const saveTdee = function (tdee) {
    localStorage.setItem('tdee', JSON.stringify(tdee))
}

// Male metric BMR equation
const metricMaleBmr = function () {
    const ageInt = parseInt(document.getElementById('age').value, 10)
    const weightInt = parseInt(document.getElementById('weight').value, 10)
    const heightInt = parseInt(document.getElementById('height').value, 10)
    const hbEquation = 66.5 + (13.75 * weightInt) + (5.003 * heightInt) - (6.755 * ageInt)
    const rzEquation = 88.362 + (13.397 * weightInt) + (4.799 * heightInt) - (5.677 * ageInt)
    bmr = (hbEquation + rzEquation) / 2
    return bmr
}

// Female metric BMR equation
const metricFemaleBmr = function () {
    const ageInt = parseInt(document.getElementById('age').value, 10)
    const weightInt = parseInt(document.getElementById('weight').value, 10)
    const heightInt = parseInt(document.getElementById('height').value, 10)
    const hbEquation = 655 + (9.563 * weightInt) + (1.850 * heightInt) - (4.676 * ageInt)
    const rzEquation = 447.59 + (9.247 * weightInt) + (3.089 * heightInt) - (4.33 * ageInt)
    bmr = (hbEquation + rzEquation) / 2
    return bmr
}

// Male imperial BMR equation
const imperialMaleBmr = function () {
    const ageInt = parseInt(document.getElementById('age').value, 10)
    const weightInt = parseInt(document.getElementById('weight').value, 10)
    const heightInt = parseInt(document.getElementById('height').value, 10)
    const hbEquation = 66 + (6.2 * weightInt) + (12.7 * heightInt) - (6.76 * ageInt)
    bmr = hbEquation
    return bmr
}

// Female imperial BMR equation
const imperialFemaleBmr = function () {
    const ageInt = parseInt(document.getElementById('age').value, 10)
    const weightInt = parseInt(document.getElementById('weight').value, 10)
    const heightInt = parseInt(document.getElementById('height').value, 10)
    const hbEquation = 655 + (4.35 * weightInt) + (4.7 * heightInt) - (4.7 * ageInt)
    bmr = hbEquation
    return bmr
}

// Activity level equations for TDEE
const activityLevelEquations = function () {
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