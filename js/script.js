'use strict';


  document.querySelector('#next-page').addEventListener("click", function(){
  document.querySelector("#sign-up").style.display = "none";
  document.querySelector("#sign-up-p2").style.display = "block";
});


$(document).ready(function() {
    $('.basic-multiple').select2();
});

/*fetch("json/users.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    appendUsers(json);
  });


  function appendUsers(users) {
    let htmlTemplate = "";
    for (let person of users) {
      htmlTemplate += '<section><h4>' + person.firstName + ' ' + person.lastName + '</p></section>';
    }
    document.querySelector(".users").innerHTML = htmlTemplate;
  };

function createAccount() {
  // get the values from the input fields
  let firstName = document.querySelector('#sign-up input[name=firstName]').value;
  console.log(firstName);
  let lastName = document.querySelector('#sign-up input[name=lastName]').value;
  console.log(lastName);
  let mail = document.querySelector('#sign-up input[name=mail]').value;
  console.log(mail);
  let phone = document.querySelector('#sign-up input[name=phone]').value;
  console.log(phone);


  // create a new object and push to json file
  let newAccount = {
    name: firstName,
    initials: lastName,
    mail: mail,
    phone: phone,
  };
  //users.push(newAccount);
  //appendUsers(users);
}*/
/*function validateEmail(email) {
  var expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
  return expression.test(String(email).toLowerCase())
}*/
