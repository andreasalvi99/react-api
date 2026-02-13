import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [actresses, setActresses] = useState([]);

  useState(() => {
    axios
      .get("https://lanciweb.github.io/demo/api/actresses/")
      .then((response) => {
        setActresses([response.data]);
      });
  }, []);

  return (
    <>
      <section>
        <div className="container text-center">
          <h1>CIAOOOO</h1>
        </div>

        <div className="container">
          <div className="row row-cols-4">
            <div className="col">
              <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Katharine_Hepburn_publicity_photograph.jpg/800px-Katharine_Hepburn_publicity_photograph.jpg"
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title mb-0">Card title</h5>
                      <p class="card-text mb-0">This is a wider</p>
                      <p class="card-text mb-0">This is a wider</p>
                      <p class="card-text mb-0">This is a wider</p>
                      <p class="card-text mb-0">This is a wider</p>
                      <p class="card-text mb-0">This is a wider</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
