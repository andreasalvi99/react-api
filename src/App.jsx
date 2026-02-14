import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "./assets/css/components/Cards";

export default function App() {
  const [actresses, setActresses] = useState([]);

  useEffect(() => {
    axios
      .get("https://lanciweb.github.io/demo/api/actresses/")
      .then((response) => {
        console.log(response);

        setActresses(response.data);
      });
  }, []);

  return (
    <>
      <section>
        <div className="container text-center"></div>

        <div className="container mt-5">
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
      </section>
    </>
  );
}
