import { ItemProps } from "@/types/item";

/**
 * Helper function to apply strikethrough to a given string
 * @param {string} name - The name to be striked through
 * @returns The text wrapped in a <del> tag
 */
function Strikethrough(name: string) {
  return <del>{name}</del>;
}


/**
 * Helper funciton to determine whether an item is completed or not
 * @param {ItemProps} param0 itemProps object
 * @returns item strikedthrough or not
 */
function Item({ name, isPacked } : ItemProps) {
  return (
    <li className="item">
      {isPacked ? Strikethrough(name) : name}
    </li>
  );
}

/**
 * Function creates a packing list
 * @returns a packing list
 */
export default function PackingList() {
  return (
    <section>
      <h1>My Packing List</h1>
      <ul>
        <Item
          isPacked={true}
          name="Laptop"
        />
        <Item
          isPacked={true}
          name="Chargers"
        />
        <Item
          isPacked={false}
          name="Socks"
        />
      </ul>
    </section>
  );
}
