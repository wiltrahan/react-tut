const app = {
  title: 'Visiblity Toggle',
  message: "Life is so crazy, how bout a change of view!"
};

let visiblity = false;

const changeView = () => {
  visiblity = !visiblity;
  changeVisibility();
};


const appRoot = document.getElementById('app');

const changeVisibility = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={changeView}>
        {visiblity ? 'Hide details' : 'Show details'}
      </button>
      {visiblity && (
        <div>
          <p>{app.message}</p>
        </div>
      )}
    </div>
  );
  ReactDOM.render(template, appRoot);
};


changeVisibility();

