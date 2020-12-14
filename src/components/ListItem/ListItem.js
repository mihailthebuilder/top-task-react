const ListItem = (props) => {
  return (
    <div>
      <span>{props.task.value}</span>
      <button onClick={props.onDeleteButtonPress} targetkey={props.task.key}>
        Delete
      </button>
      <button onClick={props.onEditButtonPress} targetkey={props.task.key}>
        Edit
      </button>
    </div>
  );
};

export default ListItem;
