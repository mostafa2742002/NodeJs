import fetch from 'node-fetch';

async function getAnimals() {
    const response = await fetch('https://cat-fact.herokuapp.com/facts');
    const animals = await response.json();
    return animals;
}
export default getAnimals;