// Exercise 1.3
// ------------
// Creating a Cat class - Part 3

// A) In the previous exercises, we created a Cat class and used it to create a
//    `boots` object.
//    Rewrite that Cat class, but let's also add some functions that will
//    modify the various porperties of a cat.
//    Write methods that will update tiredness, hunger, loneliness, and
//    happiness.

// HINT: You need to write arrow functions here. () => {}
// - Write a sleep method that accept hours and reduces tiredness by 5 times
//   that number. So if the cat has a tiredness of `50`, and sleeps for 10
//   hours, their tiredness will be reduced to 0 (10 * 5).
// - Write an eat method that accept number of kibbles and reduces hunger by 1/5
//   that number.
// - Write an play method that accept minutes and reduces loneliness by 3 times
//   that number.
// - the happiness property should be modified all of the above methods as well.
//
// You decide how much sleep, eat, and play affects your cat's happiness.

// B) call the different methods with appropriate values and then console.log boots to see what happened to the property values.

class Cat {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
        this.species = 'cat';
        this.tiredness = 50;
        this.hunger = 10;
        this.loneliness = 20;
        this.happiness = 100 - (this.tiredness + this.hunger + this.loneliness);
    }

    sleep = (hours) => {
        this.tiredness -= (hours * 5);

        if (this.tiredness < 0) {
            this.tiredness = 0;
        }

        this.happiness = 100 - (this.tiredness + this.hunger + this.loneliness);
    }

    eat = (kibble) => {
        this.hunger -= (kibble * 0.2);

        if (this.hunger < 0) {
            this.hunger = 0;
        }

        this.happiness = 100 - (this.tiredness + this.hunger + this.loneliness);
    }

    play = (minutes) => {
        this.loneliness -= (minutes * 3);

        if (this.loneliness < 0) {
            this.loneliness = 0;
        }

        this.happiness = 100 - (this.tiredness + this.hunger + this.loneliness);
    }
}

felix = new Cat('Felix', 'Simaese');

// felix object after being instantiated
Cat {
    sleep: [Function: sleep],
    eat: [Function: eat],
    play: [Function: play],
    name: 'Felix',
    breed: 'Simaese',
    species: 'cat',
    tiredness: 50,
    hunger: 10,
    loneliness: 20,
    happiness: 20
}

// felix object after calling various methods:
Cat {
    sleep: [Function: sleep],
    eat: [Function: eat],
    play: [Function: play],
    name: 'Felix',
    breed: 'Simaese',
    species: 'cat',
    tiredness: 45,
    hunger: 8,
    loneliness: 0,
    happiness: 47
}
