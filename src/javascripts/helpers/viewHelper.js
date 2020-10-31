import jokeViews from './jokeView';

const viewHelper = (id) => {
  $('app').html('<h1>JOKE GENERATOR</h1><button id="setup">CLICK</button');
  switch (id) {
    case 'setup':
      return jokeViews.jokeSetupView();
    case 'punchline':
      return jokeViews.jokePunchlineView();
    case 'reload':
      return window.location.reload();
    default:
      return console.warn('nope');
  }
};

const viewListener = (view) => {
  viewHelper(view);
  $('body').on('click', 'button#setup', (e) => {
    console.warn('button click');
    viewHelper(e.currentTarget.id);
  });
  $('body').on('click', 'button#punchline', (e) => {
    viewHelper(e.currentTarget.id);
  });
  $('body').on('click', 'button#reload', (e) => {
    viewHelper(e.currentTarget.id);
  });
};

export default { viewListener };
