import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
    name: 'Ranjani Shettar',
    artwork: {
      title: 'Aureole',
      city: 'Bangalore',
      image: 'https://i.imgur.com/okTpbHhm.jpg',
    }
  });

  function handleCityChange(e: { target: { value: string; }; }) {

    // this is the correct way to update an object -- using spread syntax (...)
    // which is a shallow copy
    // ... means to copy what was in the last object, 
    // except for the city property in this case
    const nextArtwork = { ...person.artwork, city: e.target.value };
    
    // ... means to copy what was in the last object, 
    // except for the artwork property in this case
    const nextPerson = { ...person, artwork: nextArtwork };
    setPerson(nextPerson);
  }


  return (
    <>
      <img src={person.artwork.image}/>
      <label>
        City:
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <p>
        {person.name}{' '}
        {person.artwork.title}{' '}
        ({person.artwork.city})
      </p>
    </>
  );
}
