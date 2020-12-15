import "./Overview.css";

import ListItem from "../components/ListItem/ListItem.js";
import ListItemEdited from "../components/ListItemEdited/ListItemEdited.js";

const Overview = (props) => {
  let tasks = props.tasks.map((task) => (
    <li key={task.key}>
      {task.key}
      <span>: </span>

      {props.keyInEditMode !== task.key ? (
        <ListItem
          task={task}
          onDeleteButtonPress={props.onDeleteButtonPress}
          onEditButtonPress={props.onEditButtonPress}
        />
      ) : (
        <ListItemEdited
          keyInEditMode={props.keyInEditMode}
          editInputValue={props.editInputValue}
          onEditSubmission={props.onEditSubmission}
          onEditInputChange={props.onEditInputChange}
        />
      )}
    </li>
  ));

  return <ul>{tasks}</ul>;
};

export default Overview;
