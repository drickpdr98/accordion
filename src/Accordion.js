import Item from "./Item";

export default function Accordion({ items }) {
  return (
    <ul className="accordion">
      {items.map((item, index) => (
        <Item item={item} key={index + 1} number={index + 1} />
      ))}
    </ul>
  );
}
