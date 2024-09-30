/**
 * interface to define a Scientist
 */
export interface ScientistProps {
  name: string;
  imageId: string;
  profession: string;
  numAwards: number
  awards: string;
  discovery: string;
}

/**
 * interface to define a Gallery
 */
export interface GalleryProps{
  scientist: ScientistProps;
  size?: number;
}

/**
 * Returns a list of a Scientist profession, awards, and discoveries
 * @param {ScientistProps} param0 ScientistProps object
 * @returns an unordered list
 */
function ListItems({profession, numAwards, awards, discovery}: ScientistProps){
  return(
    <ul>
      <li> 
      <b>Profession: </b>
      {profession}
      </li>

      <li> 
      <b>Awards: {numAwards} </b>
      {awards}
      </li>

      <li> 
      <b>Discovered: </b>
      {discovery}
      </li>

    </ul>
    
  );
}

/**
 * creates the Scientist section with a header and image. 
 * Calls the ListItem function for biography details.
 * @param param0 GalleryProps object
 * @returns a Scientist object
 */
function Scientist({scientist, size}: GalleryProps){
return(
  <section className= "profile">
    <h2>{scientist.name}</h2>
  <img
      className="scientist"
      src={'https://i.imgur.com/' + scientist.imageId + '.jpg'}
      alt={scientist.name}
      width={size}
      height={size}
    />
    {ListItems(scientist)}
    </section>
)
}

/**
 * function to create a gallery of scientists
 * @returns a gallery
 */
export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Scientist 
        scientist={{
          name: "Maria Skłodowska-Curie",
          imageId: "szV5sdGs",
          profession: "physicist and chemist",
          numAwards: 2,
          awards: "(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
          discovery: "polonium (element)"
        }}
        size={70}/>
      <Scientist 
        scientist={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2s",
          profession: "geochemist",
          numAwards: 4,
          awards: "(Miyake Prize for geochemistry, Tanaka Prize)",
          discovery: "a method for measuring carbon dioxide in seawater"
        }}
        size={70}/>
    </div>
  );
}
