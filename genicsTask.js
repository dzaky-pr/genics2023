// Exercise
// create function that take url as parameter and log the result

const apiURL = 'https://randomuser.me/api/';

const response = fetch(apiURL);
response.then((data) => data.json()).then((data) => console.log(data));
