import axios from "axios";
import { useEffect, useState } from "react";

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
        <div className="container text-center">
          <h1>CIAOOOO</h1>
        </div>

        <div className="container">
          <div className="row row-cols-2 g-3">
            {actresses.map((actress) => {
              return (
                <>
                  <div key={actress.id} className="col">
                    <div className="card mb-3">
                      <img
                        src={actress.image}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">{actress.name}</h5>
                        <div className="row row-cols-2">
                          <div className="col-6">
                            <p className="card-text">
                              Anno di nascita: {actress.birth_year}
                            </p>
                          </div>
                          <div className="col-6">
                            <p className="card-text">
                              Nazionalità: {actress.nationality}
                            </p>
                          </div>
                          <div className="col-6">
                            <p className="card-text">
                              Biografia: {actress.biography}
                            </p>
                          </div>
                          <div className="col-6">
                            <p className="card-text">
                              Awards:{" "}
                              {actress.awards === "None"
                                ? "Nessun premio"
                                : actress.awards}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
