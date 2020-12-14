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
      taskInEdit: {},
    };

    this.handleTaskSubmit = this.handleTaskSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEditSubmission = this.handleEditSubmission.bind(this);
    this.handleEditInputChange = this.handleEditInputChange.bind(this);
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
    this.setState((state) => {
      let taskTargetKey = parseInt(event.target.getAttribute("targetkey"));
      return {
        taskInEdit: {
          key: taskTargetKey,
          value: state.tasks[taskTargetKey - 1].value,
        },
      };
    });
  }

  handleEditInputChange(event) {
    this.setState((state) => ({
      taskInEdit: {
        key: state.taskInEdit.key,
        value: event.target.value,
      },
    }));
  }

  handleEditSubmission(event) {
    event.preventDefault();
    console.log("handled edit submission!");
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
          taskInEdit={this.state.taskInEdit}
          onEditSubmission={this.handleEditSubmission}
          onEditInputChange={this.handleEditInputChange}
        />
      </div>
    );
  }
}

export default App;
