import uniqid from "uniqid";

const Overview = (props) => {

  let tasks = props.tasks.map(
    (task)=><li key={uniqid()}>{task}</li>
  );
  
  return (
    <ul>{tasks}</ul>
  );
}

export default Overview;