describe('The Greeting Widget Function', function(){
    it('should return greeting in English and the name of the person greeted', function(){
    var greetInEngl = PeopleTogreet();

    greetInEngl.greetingFunction("Phindi", 'English')

    assert.equal(greetInEngl.returnGreeting(),'Hello, Phindi')
    });

    it('should return greeting in Afrikaans and the name of the person greeted', function(){
    var greetInAfrikaans = PeopleTogreet();

    greetInAfrikaans.greetingFunction("Amanda", 'Afrikaans')

    assert.equal(greetInAfrikaans.returnGreeting(), 'Goeie Dag, Amanda')
    });

    it('should return greeting in IsiXhosa and the name of the person greeted', function(){
    var greetInXhosa = PeopleTogreet();

    greetInXhosa.greetingFunction("Banele", 'IsiXhosa')

    assert.equal(greetInXhosa.returnGreeting(), 'Molo, Banele')
  });

  it('should be able to count different names of people greeted in the same language', function(){
    var greeting = PeopleTogreet();

    greeting.greetingFunction("Phindi", 'IsiXhosa');
    greeting.greetingFunction("Shaun", 'IsiXhosa');
    greeting.greetingFunction("Banele", 'IsiXhosa');
    greeting.greetingFunction("lwando", 'IsiXhosa');


    assert.equal(greeting.greetCounter(), 4)
  });

  it('should count once for the same name entered despite the language entered', function(){
    var greeting = PeopleTogreet();

    greeting.greetingFunction("Phindi", 'Afrikaans')
    greeting.greetingFunction("Phindi", 'English')
    greeting.greetingFunction("Phindi", 'IsiXhosa')

    assert.equal(greeting.greetCounter(), 1);
  });


  });
