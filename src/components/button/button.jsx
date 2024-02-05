import "./button.scss";

const Button = ({ type, title, onClick, disable }) => {
  return (
    <button
      className={`btn ${
        (type === "add" && "add") ||
        (type === "remove" && "remove") ||
        (type === "checkout" && "checkout")
      } ${disable === true && "disabled"}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
