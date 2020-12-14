import uniqid from "uniqid";

const Overview = (props) => {

  let tasks = props.tasks.map((task)=>
    <li key={uniqid()}>
      {task.key}: {task.value}
      <button
        onClick={props.onDeleteButtonPress}
        targetkey={task.key}
      >
        Delete
      </button>
    </li>
  );
  
  return (
    <ul>{tasks}</ul>
  );
}

export default Overview;