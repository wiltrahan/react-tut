console.log("App.js is running.");

const app = {
  title: 'Indecision App',
  subtitle: 'My First App',
  options: []
};

//let options = 0;
const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if(option) {
    app.options.push(option);
    //options++;
    e.target.elements.option.value = '';
    renderOptionCount();
   
  }
};

const remove = () => {
  app.options = [];
  renderOptionCount();
};

const appRoot = document.getElementById('app');

const renderOptionCount = () => {
  const template = (
    <div>
      <h1>{app.title.toUpperCase()}</h1> 
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>
      <button onClick={remove}>Remove All</button>
      <ol>
        {
          app.options.map((option) => {
            return <li key={option}>Option: {option}</li>;
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderOptionCount();


