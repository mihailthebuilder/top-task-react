const ListItemEdited = (props) => {
  return (
    <form>
      <input
        value={props.task.value}
        onChange={props.onEditInputChange}
      ></input>
      <button type="submit">Submit Change</button>
    </form>
  );
};

export default ListItemEdited;