console.log("App.js is running.");

const app = {
  title: 'Indecision App',
  subtitle: 'My First App',
  options: ['One', 'Two']
};

//JSX - JavaScript XML
const template = (
  <div>
    <h1>{app.title.toUpperCase()}</h1> 
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options: ' + 
      app.options[0] + ', ' + app.options[1] : 'No options available.'}
    </p>

  </div>
);

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>
  } 
}

const user = {
  name: 'Frankie',
  age: 4,
  location: 'Rhode Island'
};

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 3) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);