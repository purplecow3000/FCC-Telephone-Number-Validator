const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const results = document.getElementById('results-div');

const regex = /^1?\s?(\([0-9][0-9][0-9]\)|[0-9][0-9][0-9])[\s-]?([0-9][0-9][0-9])[\s-]?([0-9][0-9][0-9][0-9])$/

const checkNumber = number => {

  if (number === "") {
    alert('Please provide a phone number');
    return;
  }

  if (regex.test(number)) {
    results.textContent = `Valid US number: ${number}`
  } else {
    results.textContent = `Invalid US number: ${number}`
  }
}

checkBtn.addEventListener('click', () => {
  checkNumber(userInput.value);
  userInput.value = ""
  });

clearBtn.addEventListener('click', () => {
  results.textContent = ''
  });
