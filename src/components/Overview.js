const Overview = (props) => {
  let tasks = props.tasks.map((task,index)=><li key={index}>{task}</li>);
  console.log(tasks);
  return (
    <ul>{tasks}</ul>
  );
}

export default Overview;