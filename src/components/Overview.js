import uniqid from "uniqid";
import "./Overview.css";

import { ListItem } from "../components/ListItem/ListItem.js";

const Overview = (props) => {
  let tasks = props.tasks.map((task) => (
    <li key={uniqid()}>
      {task.key}
      <span>: </span>

      {parseInt(props.keyInEditMode) !== task.key ? (
        <ListItem
          task={task}
          onDeleteButtonPress={props.onDeleteButtonPress}
          onEditButtonPress={props.onEditButtonPress}
        />
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
