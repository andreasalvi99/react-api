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
        <div className="container text-center"></div>

        <div className="container mt-5">
          <div className="row row-cols-3 g-3">
            {actresses.map((actress) => {
              return (
                <>
                  <div key={actress.id} className="col">
                    <div className="card mb-2 h-100 p-3">
                      <img
                        src={actress.image}
                        className="card-img-top h-50 object-fit-cover rounded"
                        alt={actress.name}
                      />
                      <div className="card-body mb-2">
                        <h5 className="card-title fw-bolder fs-4 mb-3">
                          {actress.name}
                        </h5>
                        <div className="row row-cols-2">
                          <div className="col-6">
                            <p className="card-text mb-2">
                              <span className="d-block fw-bold">Birth:</span>
                              {actress.birth_year}
                            </p>
                          </div>
                          <div className="col-6">
                            <p className="card-text mb-2">
                              <span className="d-block fw-bold">
                                Nationality:
                              </span>
                              {actress.nationality}
                            </p>
                          </div>
                          <div className="col-12">
                            <p className="card-text mb-2">
                              <span className="d-block fw-bold">
                                Biography:
                              </span>{" "}
                              {actress.biography}
                            </p>
                          </div>
                          <div className="col-12">
                            <p className="card-text">
                              <span className="d-block fw-bold">Awards:</span>{" "}
                              {actress.awards === "None" ? "-" : actress.awards}
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
