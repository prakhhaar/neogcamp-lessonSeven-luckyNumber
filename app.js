const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-number");
const output = document.querySelector("#output");

checkNumber.addEventListener("click", checkIfBirthdayIsLucky);

function checkIfBirthdayIsLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);

  if(sum % luckyNumber === 0){
    output.value = "Your birthday is lucky!"
    console.log("Your birthday is lucky!");
  } else {
    output.value = "Sadly, your birthday is not that lucky."
    console.log("Sadly, your birthday is not that lucky.");
  }
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");

  var sum = 0;
  for(var i=0; i<dob.length; i++){
    sum = sum + Number(dob.charAt(i));
  }

  return sum;
}
