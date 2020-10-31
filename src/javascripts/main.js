import view from './helpers/viewHelper';
import '../styles/main.scss';

const init = () => {
  $('#app').html('<h1>Joke Generator</h1><button id="setup">CLICK</button>');
  view.viewListener();
};

init();
