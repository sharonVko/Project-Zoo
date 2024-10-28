console.log("test");
import Animal from "./classes/Animal";
import Enclosure from "./classes/Enclosure";
import EnclosureId from "./classes/EnclosureId";
import AnimalTypes from './classes/AnimalTypes';

const selectedAnimalType = document.querySelector('#selectedAnimalType')as HTMLSelectElement;
const animalNameInput = document.querySelector('#animalNameInput') as HTMLInputElement;
const birthYearInput = document.querySelector('#birthYearInput') as HTMLInputElement;
const selectedContinent = document.querySelector('#selectedContinent')as HTMLSelectElement;
const specialNeedsInput = document.querySelector('#specialNeedsInput') as HTMLInputElement;
const selectedEnclosureId = document.querySelector('#selectedEnclosureId')as HTMLSelectElement;
const createAnimalBtn = document.querySelector('#createAnimalBtn') as HTMLButtonElement;

console.log(selectedAnimalType,animalNameInput,birthYearInput,selectedContinent,specialNeedsInput,selectedEnclosureId,createAnimalBtn);

//empty strings for inputs/selections
const allAnimals: Animal[] = []; 
const allContinents: string[] = ["Africa","Antarctica","Asia","Australia","Europe","North America","South America"];
const allEnclosures: Enclosure[] = [];
console.log(allContinents);

// Enclosure Objects
const enclosureSavannah = new Enclosure(EnclosureId.SavannahHabitat, "Savannah Habitat", 1999);
const enclosureJungle = new Enclosure(EnclosureId.JungleHabitat, "Jungle Habitat", 2010);
const enclosureAqua = new Enclosure(EnclosureId.AquaticHabitat, "Aquatic Habitat", 2012);
const enclosureReptile = new Enclosure(EnclosureId.ReptileHouse, "Reptile House", 2000);

//add to enclosure list
allEnclosures.push(enclosureSavannah,enclosureJungle,enclosureAqua,enclosureReptile);
console.log(allEnclosures);

// 14 animal objects 

const animal1 = new Animal(AnimalTypes.Lion, "Simba", 2012, "Africa", "None", EnclosureId.SavannahHabitat);
const animal2 = new Animal(AnimalTypes.Elephant, "Dumbo", 2010, "Asia", "Arthritis", EnclosureId.SavannahHabitat);
const animal3 = new Animal(AnimalTypes.Bear, "Baloo", 2015, "North America", "None", EnclosureId.JungleHabitat);
const animal4 = new Animal(AnimalTypes.Monkey, "George", 2018, "South America", "None", EnclosureId.JungleHabitat);
const animal5 = new Animal(AnimalTypes.Dolphin, "Flipper", 2016, "Pacific", "Extra Space", EnclosureId.AquaticHabitat);
const animal6 = new Animal(AnimalTypes.Shark, "Bruce", 2013, "Atlantic", "None", EnclosureId.AquaticHabitat);
const animal7 = new Animal(AnimalTypes.Snake, "Kaa", 2011, "Asia", "Heat Lamp", EnclosureId.ReptileHouse);
const animal8 = new Animal(AnimalTypes.Turtle, "Leonardo", 2009, "Atlantic", "Special Food", EnclosureId.ReptileHouse);
const animal9 = new Animal(AnimalTypes.Eagle, "Freedom", 2014, "North America", "Flight Area", EnclosureId.JungleHabitat);
const animal10 = new Animal(AnimalTypes.Tiger, "Shere Khan", 2012, "Asia", "None", EnclosureId.SavannahHabitat);
const animal11 = new Animal(AnimalTypes.Panda, "Bao Bao", 2016, "Asia", "Bamboo", EnclosureId.JungleHabitat);
const animal12 = new Animal(AnimalTypes.Crocodile, "Snap", 2008, "Africa", "None", EnclosureId.ReptileHouse);
const animal13 = new Animal(AnimalTypes.Flamingo, "Pinkie", 2017, "Africa", "None", EnclosureId.AquaticHabitat);
const animal14 = new Animal(AnimalTypes.Camel, "Humphrey", 2011, "Asia", "None", EnclosureId.SavannahHabitat);

// add animals to allAnimals list
allAnimals.push(
    animal1, animal2, animal3, animal4, animal5, animal6, animal7, animal8, 
    animal9, animal10, animal11, animal12, animal13, animal14
);

console.log(allAnimals);

// animal option selection dropdown 

const showAnimalTypeOptions = Object.entries(AnimalTypes) /* generates an array of [key,value] pairs from the Animaltypes object */
showAnimalTypeOptions.forEach(([key,value]) => { /* running through every key value pair  */
    const option = document.createElement("option"); /* creating option elements in html for dropdown */
    option.value =  `AnimalTypes.${key}`;/* giving each key as value for dropdown options */ 
    option.textContent = value; /* to eventually show the key */
    selectedAnimalType.appendChild(option);/* adding 'option'-element to the 'selectedAnimalType' dropdown */
});

// animal name input 

const saveAnimalName = ():string => {
   const animalName = animalNameInput.value;
   console.log(animalName);
   /* inCaseAnOutputIsNeeded.textContent = animalName; */
   return animalName
    
} ;

const saveYearOfBirth = ():number =>{
    const yearOfBirth = birthYearInput.value;
    console.log(yearOfBirth);
    /* inCaseAnOutputIsNeeded.textContent = yearOfBirth; */
    return Number(yearOfBirth);
}
// Event-Listener für den Button hinzufügen
createAnimalBtn.addEventListener('click', saveAnimalName,);

// continent selection dropdown

const showContinentOptions = allContinents.forEach((continent) =>{ /* running through each continent */
    const continentOption = document.createElement("option");
    continentOption.value = continent;
    continentOption.textContent = continent;
    selectedContinent.appendChild(continentOption);
});
console.log(showContinentOptions);

// enclosure ID selection dropdown 