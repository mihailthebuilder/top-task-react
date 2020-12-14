import uniqid from "uniqid";
import "./Overview.css";

const Overview = (props) => {
  let tasks = props.tasks.map((task) => (
    <li key={uniqid()}>
      {task.key}
      <span>: </span>

      {parseInt(props.keyInEditMode) !== task.key ? (
        <div>
          <span>{task.value}</span>
          <button onClick={props.onDeleteButtonPress} targetkey={task.key}>
            Delete
          </button>
          <button onClick={props.onEditButtonPress} targetkey={task.key}>
            Edit
          </button>
        </div>
      ) : (
        <div>
          <button>Submit Change</button>
        </div>
      )}
    </li>
  ));

  return <ul>{tasks}</ul>;
};

export default Overview;
