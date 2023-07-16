import fetch from 'node-fetch';

async function getSports() {
    const response = await fetch('https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.clubs.json');
    const sports = await response.json();
    return sports;
}
export default getSports;