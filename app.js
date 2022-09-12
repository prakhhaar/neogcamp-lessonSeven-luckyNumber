const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-number");
const output = document.querySelector("#output");

checkNumber.addEventListener("click", validateEnteries);

// Input check
function validateEnteries() {
  if (luckyNumber.value > 0 && dateOfBirth.value) {
    validateDob();
  } else {
    output.innerText = "Please enter the both details correctly!";
  }
}

// Assembling everthing
function validateDob() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);

  checkIfBirthdayIsLucky(sum, luckyNumber.value);
}

// Calculating the sum of DOB
function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  var sum = 0;
  for (var i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}

// Checking if birthday is lucky 
function checkIfBirthdayIsLucky(sum, luckyNum) {
  if (sum % luckyNum === 0) {
    output.innerText = "Your birthday is lucky!🚀";
  } else {
    output.innerText = "Sadly, your birthday is not so lucky😔";
  }
}
