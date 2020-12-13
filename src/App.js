import React, {Component} from "react";
import Overview from './components/Overview.js';
import AddTask from './components/AddTask.js';

class App extends Component {

  constructor(props) {
    super(props);
    
    //holds the list of tasks
    this.state = {
      tasks: ['chicken','beef'],
      inputValue: ''
    };

    this.handleTaskSubmit = this.handleTaskSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleTaskSubmit(event) {
    //adds the task
    event.preventDefault();
  }

  handleInputChange(event) {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    return (
      <div>
        <AddTask
          onFormSubmit={this.handleTaskSubmit}
          onInputChange={this.handleInputChange}
        />
        <Overview tasks={this.state.tasks} />
        <p>{this.state.inputValue}</p>
      </div>
    )
  }
}

export default App;