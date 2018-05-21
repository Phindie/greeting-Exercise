function PeopleTogreet(storedUser) {

  // var name = '';
  var greetCount = 0;
  var nameAnLanguage = '';
  var peopleNames = {};




  function greetingFunction(name, langNames) {

    if (storedUser) {
      peopleNames = storedUser
    }

    if (name !== "" && langNames ) {
      if (peopleNames[name] === undefined) {
        peopleNames[name] = 0;
      }
    }

    if (langNames === 'English') {
      nameAnLanguage = 'Hello, ' + name;
    }
    if (langNames === 'Afrikaans') {
      nameAnLanguage = 'Goeie Dag, ' + name;
    }
    if (langNames === 'IsiXhosa') {
      nameAnLanguage = 'Molo, ' + name;
    }

  }

  function returnGreeting() {
    return nameAnLanguage
  }

  function greetCounter() {
    return Object.keys(peopleNames).length;
  }

  function enterName(storedUser) {
    return peopleNames
  }

  function reset() {
    peopleNames = {}
  }

  return {
    greetingFunction,
    returnGreeting,
    greetCounter,
    enterName,
    reset,

  }
}
