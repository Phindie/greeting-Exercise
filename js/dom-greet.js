var nameValue = document.querySelector('.greeting');
var greetButton = document.querySelector('.greetBtn');
var count = document.querySelector('.greetCount');
var displayEle = document.querySelector('.displayName');
var lang = document.querySelector('.languageRadio');
var resetButton = document.querySelector('.resetBtn');
var referenceUser = localStorage.getItem('users');


var storedUsers = referenceUser ? JSON.parse(referenceUser): {};

for (var i = 0; i < storedUsers.length; i++) {
  var name = storedUsers[i];
  addName(storedUsers);
}



var greetFactory = PeopleTogreet(storedUsers)

  function displayMsg(){
    var greetingRadio = document.querySelector("input[name='languages']:checked");

    if (greetingRadio) {
    var langNames = greetingRadio.value
  }

   var textValue = nameValue.value;

   greetFactory.greetingFunction(textValue, langNames)

   localStorage.setItem('users', JSON.stringify( greetFactory.enterName()));

   displayEle.innerHTML =  greetFactory.returnGreeting()
   count.innerHTML = greetFactory.greetCounter()

  if (textValue === "") {
    displayEle.innerHTML = 'Enter Name'
  }

  if (!greetingRadio) {
    displayEle.innerHTML = 'Select Language'
  }
}

greetButton.addEventListener('click', function(){
  displayMsg()
  nameValue.value = '';
})
resetButton.addEventListener('click', function(){
greetFactory.reset();
count.innerHTML = 0;
localStorage.clear()
nameValue.value = '';
})
