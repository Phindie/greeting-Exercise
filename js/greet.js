
function PeopleTogreet(storedUser){

  var kids = '';
  var greetCount = 0;
  var nameAnLanguage = '';
  var peopleNames = {};

  function greetingFunction(name, langNames){

    if(name != ''){
      kids = name
    }
    if (storedUser) {
        peopleNames = storedUser
    }
    if(kids !== ""){

    if(peopleNames[kids] === undefined){

     peopleNames[kids] = 0;
      }
    }
    if (langNames === 'English') {
      nameAnLanguage = 'Hello, ' + name;
    }
    if(langNames === 'Afrikaans'){
      nameAnLanguage = 'Goeie Dag, ' + name;
    }
    if (langNames === 'IsiXhosa') {
      nameAnLanguage = 'Molo, ' + name;
    }
  }

  function returnGreeting(){
    return nameAnLanguage
  }

  function greetCounter(){
    return Object.keys(peopleNames).length;
  }

  function enterName(){
    return peopleNames
  }

  function reset(){
    return peopleNames = {}
  }

  return {
    greetingFunction,
    returnGreeting,
    greetCounter,
    enterName,
    reset
  }
}
