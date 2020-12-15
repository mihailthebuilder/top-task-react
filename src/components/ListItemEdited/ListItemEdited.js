const ListItemEdited = (props) => {
  return (
    <form>
      <input
        value={props.editInputValue}
        onChange={props.onEditInputChange}
      ></input>
      <button type="submit">Submit Change</button>
    </form>
  );
};

export default ListItemEdited;
