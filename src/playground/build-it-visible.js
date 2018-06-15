class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visiblity Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>
        {this.state.visibility && (
          <div>
            <p>Life is so crazy, how bout a change of view!</p>
          </div>
        )}
      </div>
    );
  }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));




// const app = {
//   title: 'Visiblity Toggle',
//   message: "Life is so crazy, how bout a change of view!"
// };

// let visiblity = false;

// const changeView = () => {
//   visiblity = !visiblity;
//   changeVisibility();
// };


// const appRoot = document.getElementById('app');

// const changeVisibility = () => {
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       <button onClick={changeView}>
//         {visiblity ? 'Hide details' : 'Show details'}
//       </button>
//       {visiblity && (
//         <div>
//           <p>{app.message}</p>
//         </div>
//       )}
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };


// changeVisibility();

