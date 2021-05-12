//Example of Imperative
console.log("Imperative");

const people = ['Amanda', 'Farrin', 'Geoof', 'Karen', 'Richard', 'Tyler'];
const excitedPeople = [];

for(let i = 0; i < people.length; i++){
    excitedPeople[i] = people[i] + '!';
}

console.log(excitedPeople)

//Declarative Code
console.log("Declarative");

const excitedPeopleDeclarative = people.map(name => name + '!');

console.log(excitedPeopleDeclarative);

const longNames = people.filter(name => name.length > 6);

console.log(longNames);

