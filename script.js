const nozCalcSubmitBtn = document.querySelector('.noznum-submit')
const nozCalcGPMInput = document.querySelector('.noznum-gpm-input')
const nozCalcPSIInput = document.querySelector('.noznum-psi-input')
const nozCalcAnswer = document.querySelector('.noznum-answer')

const gpmCalcSubmitBtn = document.querySelector('.gpmcalc-submit')
const gpmCalcGPMInput = document.querySelector('.gpmcalc-noznum-input')
const gpmCalcPSIInput = document.querySelector('.gpmcalc-psi-input')
const gpmCalcAnswer = document.querySelector('.gpmcalc-answer')

const psiCalcSubmitBtn = document.querySelector('.psiCalc-submit')
const psiCalcNozInput = document.querySelector('.psiCalc-noznum-input')
const psiCalcGPMInput = document.querySelector('.psiCalc-gpm-input')
const psiCalcAnswer = document.querySelector('.psiCalc-answer')

const psiArray = [500, 750, 1000, 1250, 1500, 1750, 2000, 2250, 2500, 2750, 3000, 3250, 3500, 3750, 4000, 4500, 5000]

function getNozzleNumber(gpm, psi){
  const result = Math.round(gpm * Math.sqrt(4000/psi))
  nozCalcAnswer.innerHTML = `<p>Nozzle #${result}</p>`
  return result
}

function getGPM(nozNum, psi){
  const result = nozNum * Math.sqrt(psi/4000)
  gpmCalcAnswer.innerHTML = `<p>${result.toFixed(2)}</p><p>Gallons Per Minute</p>`
  return result
}

function getPSI(gpm, nozNum){
  const result = Math.round(Math.pow((gpm / nozNum), 2) * 4000)
  var closest = psiArray.reduce(function(prev, curr) {  //uses the psiArr to find the nearest psi to result from maths
    return (Math.abs(curr - result) < Math.abs(prev - result) ? curr : prev);
  });

  psiCalcAnswer.innerHTML = `<p>${closest} PSI</p>`
  return closest
}


nozCalcSubmitBtn.addEventListener('click', function(){
  getNozzleNumber(nozCalcGPMInput.value, nozCalcPSIInput.value)
})
gpmCalcSubmitBtn.addEventListener('click', function(){
  getGPM(gpmCalcGPMInput.value, gpmCalcPSIInput.value)
})
psiCalcSubmitBtn.addEventListener('click', function(){
  getPSI(psiCalcGPMInput.value, psiCalcNozInput.value)
})