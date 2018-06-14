'use strict';

var app = {
  title: 'Visiblity Toggle',
  message: "Life is so crazy, how bout a change of view!"
};

var visiblity = false;

var changeView = function changeView() {
  visiblity = !visiblity;
  changeVisibility();
};

var appRoot = document.getElementById('app');

var changeVisibility = function changeVisibility() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    React.createElement(
      'button',
      { onClick: changeView },
      visiblity ? 'Hide details' : 'Show details'
    ),
    visiblity && React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        app.message
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

changeVisibility();
