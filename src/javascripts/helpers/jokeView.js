import joke from '../components/joke';

const jokeSetupView = () => {
  joke.jokeSetup().then((response) => {
    $('#app').append(`<h2>${response}</h2><button id="punchline">?</button>`);
  });
};

const jokePunchlineView = () => {
  joke.jokePunchline().then((response) => {
    $('#app').append(`<h2>${response}</h2><button id="reload">ANOTHER?</button>`);
  });
};

export default { jokeSetupView, jokePunchlineView };
