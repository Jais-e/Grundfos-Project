'use strict';
// jQuery - assign Select2 library to a class
$(document).ready(function() {
  $('.basic-multiple').select2();
});
let progresCounter = 0;
// Javasript

function progress(){
  let element1 = document.querySelector('#first-name').value;
  let element2 = document.querySelector('#last-name').value;
  let element3 = document.querySelector('#password').value;
  let element4 = document.querySelector('#mail').value;
    if (element1 != "" || element2 != ""){
      progresCounter ++;
      console.log(progresCounter);
    }

};
progress()
document.querySelector('#sign-up').oninput = function(){
  let req1 = document.querySelector('#first-name').value;
  let req2 = document.querySelector('#last-name').value;
  let req3 = document.querySelector('#password').value;
  let req4 = document.querySelector('#mail').value;
  if (req1 === "" || req2 === "" || req3 === "" || req4 === "") {
    document.querySelector("#next-page").style.background = "grey";
  } else {
    document.querySelector("#next-page").style.background = "#0068B4";

  }
};
// Form buttons //
document.querySelector('#next-page').addEventListener("click", function() {
  let req1 = document.querySelector('#first-name').value;
  let req2 = document.querySelector('#last-name').value;
  let req3 = document.querySelector('#password').value;
  let req4 = document.querySelector('#mail').value;


  if (req1 === "" || req2 === "" || req3 === "" || req4 === "") {
    alert('Please fill in all requried fields');
  } else {
    document.querySelector("#sign-up").style.display = "none";
    document.querySelector("#sign-up-p2").style.display = "block";

  }
});
document.querySelector('#back').addEventListener("click", function() {
  document.querySelector("#sign-up").style.display = "block";
  document.querySelector("#sign-up-p2").style.display = "none";
});

function loadUrl(location) {
  window.location = location;
}

// Show/hide passwoord icon //
document.querySelector('#eye').addEventListener('click', function() {
  var obj = document.getElementById('password');
  this.style.display = 'none';
  document.querySelector('#eye2').style.display = 'block';
  obj.type = "text";
});
document.querySelector('#eye2').addEventListener('click', function() {
  var obj = document.getElementById('password');
  this.style.display = 'none';
  document.querySelector('#eye').style.display = 'block';
  obj.type = "Password";
});


// Creat new user account //
let users = [];
function createAccount() {

  let consent = document.getElementById("consent").checked;
  // If checbox is checked
  if (consent == true){
  // get the values from the input fields
  let firstName = document.querySelector('#sign-up input[name=firstName]').value;
  console.log(firstName);
  let lastName = document.querySelector('#sign-up input[name=lastName]').value;
  console.log(lastName);
  let mail = document.querySelector('#sign-up input[name=mail]').value;
  console.log(mail);
  let countrySelect = document.querySelector('.country-select');
  let country = countrySelect.options[countrySelect.selectedIndex].text;
  console.log(country);

  // Web storage !! UNFINISHED !!
  localStorage.setItem("firstName", firstName);
  localStorage.setItem("lastName", lastName);
  localStorage.setItem("email", mail);

  // create a new object and push to array
  let newAccount = {
    name: firstName,
    initials: lastName,
    mail: mail,
    country: country,
  };
  users.push(newAccount);
  console.log(users);
}
  // If checbox is unchecked
  else{
  alert('Please give your consent to legal conditions');
}

}



/*function validateEmail(email) {
  var expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
  return expression.test(String(email).toLowerCase())
}*/
