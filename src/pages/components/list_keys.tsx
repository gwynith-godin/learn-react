const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

export default function List() {

  // provide a key prop
  // index is not ideal for a key -- this is just an illustration
  const listItems = people.map((person, index) =>
    <li key={index}>{person}</li>
  );
  return <ul>{listItems}</ul>;
}