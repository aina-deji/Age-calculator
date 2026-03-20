let calcBtn = document.getElementById('calculate-btn');
     let errorMsg = document.getElementById('error-msg')
     errorMsg.classList.add('error-msg');
let ageValue = document.getElementById('age-value');
let inputField = document.getElementById('input-field');

calcBtn.addEventListener('click', ()=>{
  const val = inputField.value
   if (val === '') {
     errorMsg.textContent = 'Enter a date of birth'
     return;
   }
     
 const birthYear = Number(val)
const currentYear = new Date().getFullYear()
     if (isNaN(birthYear) || (birthYear > currentYear || birthYear < 1900)) {
       errorMsg.textContent = 'Enter a valid date'
       } else {
 const age = currentYear - birthYear;
ageValue.textContent = age;
errorMsg.textContent = '';
     }
  });

inputField.addEventListener('focus', ()=>{
  errorMsg.textContent =''
  ageValue.textContent =''
});