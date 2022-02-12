import star from "../images/Star.png";

export default function Card(props) {
  return (
    <div className="card">
      <img src={require(`../images/${props.cardImage}`)} alt="pottery" className="card--image"></img>
      <div className="card--stats">
        <img src={star} alt="star" className="card--star"></img>
        <p>{props.rating}</p>
        <p className="gray">({props.totalReviews}) - </p>
        <p className="gray">{props.location}</p>
      </div>
      <p className="card--title">{props.title}</p>
      <p>
        <span className="bold">
          From {props.currency}
          {props.amount}{" "}
        </span>
        / person
      </p>
    </div>
  );
}
