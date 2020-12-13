import React, {Component} from "react";
import Overview from './components/Overview.js';

class App extends Component {

  constructor(props) {
    super(props);
    
    //holds the list of tasks
    this.state = {
      tasks: ['chicken','beef']
    };

    this.addTask = this.addTask.bind(this);
  }

  addTask() {
    //adds the task
    console.log(this);
  }

  render() {
    return (
      <Overview tasks={this.state.tasks}/>
    )
  }
}

export default App;