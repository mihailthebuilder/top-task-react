import React, {Component} from "react";
import Overview from './components/Overview.js';
import AddTask from './components/AddTask.js';

class App extends Component {

  constructor(props) {
    super(props);
    
    //holds the list of tasks
    this.state = {
      tasks: [],
      inputValue: ''
    };

    this.handleTaskSubmit = this.handleTaskSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleTaskSubmit(event) {
    //adds the task
    event.preventDefault();

    this.setState((state)=>({
      tasks: [...state.tasks,this.state.inputValue],
      inputValue: ''
    }))
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
          inputValue={this.state.inputValue}
        />
        <Overview tasks={this.state.tasks} />
      </div>
    )
  }
}

export default App;