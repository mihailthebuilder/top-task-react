import React, { Component } from "react";
import Overview from "./components/Overview.js";
import AddTask from "./components/AddTask.js";

class App extends Component {
  constructor(props) {
    super(props);

    //holds the list of tasks
    this.state = {
      tasks: [],
      inputValue: "",
      keyInEditMode: "",
    };

    this.handleTaskSubmit = this.handleTaskSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleTaskSubmit(event) {
    //adds the task
    event.preventDefault();

    let newTaskKey = this.state.tasks.length + 1;
    let newTaskValue = this.state.inputValue;

    this.setState((state) => ({
      tasks: [...state.tasks, { key: newTaskKey, value: newTaskValue }],
      inputValue: "",
    }));
  }

  handleInputChange(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }

  handleDelete(event) {
    this.setState((state) => ({
      tasks: state.tasks.reduce((newArr, currentTask) => {
        let toAdd = [];
        if (
          currentTask.key !== parseInt(event.target.getAttribute("targetkey"))
        ) {
          toAdd = { key: newArr.length + 1, value: currentTask.value };
        }
        return newArr.concat(toAdd);
      }, []),
    }));
  }

  handleEdit(event) {
    this.setState({
      keyInEditMode: event.target.getAttribute("targetkey"),
    });
  }

  render() {
    return (
      <div>
        <AddTask
          onFormSubmit={this.handleTaskSubmit}
          onInputChange={this.handleInputChange}
          inputValue={this.state.inputValue}
        />
        <Overview
          tasks={this.state.tasks}
          onDeleteButtonPress={this.handleDelete}
          onEditButtonPress={this.handleEdit}
          keyInEditMode={this.state.keyInEditMode}
        />
      </div>
    );
  }
}

export default App;
