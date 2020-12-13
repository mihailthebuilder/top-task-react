const AddTask = (props) => {

  return (

    <form onSubmit={props.onFormSubmit}>

      <input
        type="text" 
        id="taskInput" 
        name="taskInput"
        value={props.inputValue}
        onChange={props.onInputChange}
      />

      <button type="submit">Add Task</button>

    </form>
  )
}

export default AddTask;