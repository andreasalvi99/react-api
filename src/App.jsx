import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "./assets/css/components/Cards";

export default function App() {
  const [actresses, setActresses] = useState([]);
  const [actors, setActors] = useState([]);

  useEffect(() => {
    axios
      .get("https://lanciweb.github.io/demo/api/actresses/")
      .then((response) => {
        console.log(response);

        setActresses(response.data);
      });
    axios
      .get("https://lanciweb.github.io/demo/api/actors/")
      .then((response) => {
        console.log(response);

        setActors(response.data);
      });
  }, []);

  return (
    <section className="p-5">
      <div className="container">
        <h1 className="text-white">ATTRICI</h1>
        <div className="row row-cols-3 g-4">
          {actresses.map((actress) => {
            return (
              <Cards
                key={actress.id}
                image={actress.image}
                name={actress.name}
                birth_year={actress.birth_year}
                nationality={actress.nationality}
                biography={actress.biography}
                awards={actress.awards}
              />
            );
          })}
        </div>
      </div>
      <div className="container">
        <h2 className="h1 text-white">ATTORI</h2>
        <div className="row row-cols-3 g-4">
          {actors.map((actor) => {
            return (
              <Cards
                key={actor.id}
                image={actor.image}
                name={actor.name}
                birth_year={actor.birth_year}
                nationality={actor.nationality}
                biography={actor.biography}
                awards={actor.awards}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
