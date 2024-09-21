const resultInput = document.getElementById("result");
const lengthRange = document.getElementById("length");
const lengthNum = document.getElementById("length-num");
const uppercaseLettersCheckbox = document.getElementById("letters");
const lowercaseLettersCheckbox = document.getElementById("letters-small");
const numbersCheckbox = document.getElementById("numbers");
const specialCharsCheckbox = document.getElementById("special-chars");

function getPasswordCharList(){
     return `${uppercaseLettersCheckbox.checked ? "abcdefghijklmnopqrstuvwxyz" : ""}${lowercaseLettersCheckbox.checked ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ":""}${numbersCheckbox.checked ? "0123456789" : ""}${specialCharsCheckbox.checked ? "!@#$%^&*_+?:;.-" : ""}`.trim()
}

function generatePassword(){
     const chars = getPasswordCharList();
     if(chars===""){
          alert("You Should Choose At least One Checkbox to Generate Password")
     } else {
          const passwordLength = +lengthNum.innerHTML;
          let result = "";
          for(let i=0;i<passwordLength;i++){
               const index = Math.floor(Math.random()*chars.length);
               result += chars[index];
          }
          resultInput.value = result;
     }
}

function copyPassword(){
     navigator.clipboard.writeText(resultInput.value);
     alert("Password Copied")
}

lengthRange.addEventListener("change",(e)=>{
     lengthNum.innerHTML = e.target.value
})