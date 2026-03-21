const calcBtn = document.getElementById('calculate-btn');
const errorMsg = document.getElementById('error-msg');
const ageValue = document.getElementById('age-value');
const input = document.querySelector('input[type="date"]');
errorMsg.classList.add('error-msg');

function calculateAge(birthDate, today) {
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += lastMonth.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }
  return { years, months, days };
}

calcBtn.addEventListener('click', () => {
  const val = input.value;
  if (!val) {
    errorMsg.textContent = 'Enter a date of birth';
    ageValue.textContent = '';
    return;
  }

  const birthDate = new Date(val);
  if (isNaN(birthDate)) {
    errorMsg.textContent = 'Enter a valid date';
    ageValue.textContent = '';
    return;
  }

  const today = new Date();
  if (birthDate > today) {
    errorMsg.textContent = 'Date cannot be in the future';
    ageValue.textContent = '';
    return;
  }

  
  if (birthDate.getFullYear() < 1900) {
    errorMsg.textContent = 'Year must be ≥ 1900';
    ageValue.textContent = '';
    return;
  }

  const age = calculateAge(birthDate, today);
  ageValue.textContent = `${age.years} years, ${age.months} months, ${age.days} days`;
  errorMsg.textContent = '';
});

input.addEventListener('focus', () => {
  errorMsg.textContent = '';
  ageValue.textContent = '';
});