const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-number");

checkNumber.addEventListener("click", function getValues(){
    console.log(Number(dateOfBirth.value), Number(luckyNumber.value));
});
