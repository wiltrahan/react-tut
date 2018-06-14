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

let count = 0;
const addOne = () => {
  console.log("addOne")
};
const minusOne = () => {
  console.log("minusOne")
};
const reset = () => {
  console.log("reset");
}

const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
  </div>
);



const appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);