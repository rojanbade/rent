function Card(props) {
  return (
    <div className="card-container">
      <img src={props.image} alt="" width={200} height={200} />
      <h2>{props.title}</h2>
      <p>{props.channelName}</p>
      <p>
        {props.views}views <span>{props.time}</span>
      </p>
    </div>
  );
}
export default Card;
