const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-number");

checkNumber.addEventListener("click", checkIfBirthdayIsLucky);

function checkIfBirthdayIsLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);

  console.log(sum);
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");

  var sum = 0;
  for(var i=0; i<dob.length; i++){
    sum = sum + Number(dob.charAt(i));
  }

  return sum;
}
