const e = React.createElement;

const LikeButton = (props) => {
  return e("button", { onClick: () => this.settState({ like: true }) }, "like");
};
ReactDOM.render(LikeButton, document.querySelector("#root"));
console.log("hello world");
