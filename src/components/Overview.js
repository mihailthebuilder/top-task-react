import uniqid from "uniqid";
import "./Overview.css";

import ListItem from "../components/ListItem/ListItem.js";
import ListItemEdited from "../components/ListItemEdited/ListItemEdited.js";

const Overview = (props) => {
  let tasks = props.tasks.map((task) => (
    <li key={uniqid()}>
      {task.key}
      <span>: </span>

      {props.taskInEdit.key !== task.key ? (
        <ListItem
          task={task}
          onDeleteButtonPress={props.onDeleteButtonPress}
          onEditButtonPress={props.onEditButtonPress}
        />
      ) : (
        <ListItemEdited
          taskInEdit={props.taskInEdit}
          onEditSubmission={props.onEditSubmission}
          onEditInputChange={props.onEditInputChange}
        />
      )}
    </li>
  ));

  return <ul>{tasks}</ul>;
};

export default Overview;
