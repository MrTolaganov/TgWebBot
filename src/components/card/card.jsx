import { useState } from "react";
import Button from "../button/button";
import "./card.scss";

const Card = ({ course, onAddItem, onRemoveItem }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
    onAddItem(course);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
    onRemoveItem(course);
  };

  return (
    <div className="card">
      <span className={`${count > 0 ? "card__badge" : "card__badge-hidden"}`}>
        {count > 0 && count}
      </span>

      <div className="image__container">
        <img
          src={course.Image}
          alt={course.title}
          width={"100%"}
          height={"230px"}
        />
      </div>

      <div className="card__body">
        <h2 className="card__title">{course.title}</h2>
        <div className="card__price">
          {course.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </div>
      </div>

      <div className="hr"></div>

      <div className="btn__container">
        <Button type="add" title="+" onClick={handleIncrement} />
        {count !== 0 && (
          <Button type="remove" title="-" onClick={handleDecrement} />
        )}
      </div>
    </div>
  );
};

export default Card;
