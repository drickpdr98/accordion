import { useState } from "react";

export default function Item({ item, number }) {
  const [isOpen, setIsOpen] = useState(false);

  const openContextHandler = () => setIsOpen(() => !isOpen);

  return (
    <li className="item" onClick={openContextHandler}>
      <span className={!isOpen ? "number" : "open"}>{number}</span>
      <span className="title">{item.title}</span>
      {isOpen && <p className="context-box">{item.text}</p>}
      <span className="icon">{isOpen ? "-" : "+"}</span>
    </li>
  );
}
