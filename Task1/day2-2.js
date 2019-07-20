class Animal { 
    constructor(name,breed,colour) {
      this.name = name;
      this.breed=breed;
      this.colour=colour;
    }
    
    property() {
      console.log(`${this.name} ${this.breed} ${this.colour} Has fluffy hair,barks slowly jst 2 months old,likes to play with ball and eats pedigree 3 times a day `);
    }
  }
  
  class Dog extends Animal {
    constructor(name,breed,colour) {
      super(name,breed,colour); // call the super class constructor and pass in the name parameter
    }

    walks() {
        console.log(`${this.name} walks moving its tail side to side with his ${this.colour} shiny body`)
    }
  
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  let d = new Dog('bruny','pug','brown');
  console.log(d.name);
  d.speak();
  d.walks();
  



  