'use strict';

console.log("App.js is running.");

var app = {
  title: 'Indecision App',
  subtitle: 'My First App',
  options: []
};

//let options = 0;
var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    //options++;
    e.target.elements.option.value = '';
    renderOptionCount();
  }
};

var remove = function remove() {
  app.options = [];
  renderOptionCount();
};

var appRoot = document.getElementById('app');

var renderOptionCount = function renderOptionCount() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title.toUpperCase()
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'button',
      { onClick: remove },
      'Remove All'
    ),
    React.createElement(
      'ol',
      null,
      React.createElement(
        'li',
        null,
        'Item One'
      ),
      React.createElement(
        'li',
        null,
        'Item Two'
      )
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

renderOptionCount();
