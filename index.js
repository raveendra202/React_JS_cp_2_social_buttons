const Button = (props) => {
  //  Write your code here.
  const { buttonText, className } = props;
  return <button className={`button ${className}`}>{buttonText} </button>;
};

const element = (
  <div className="container">
    <h1 className="heading">Social Buttons</h1>
    <div className="buttons-card">
      <Button buttonText="like" className="like-button" />
      <Button buttonText="comment" className="comment-button" />
      <Button buttonText="share" className="share-button" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
