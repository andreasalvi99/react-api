export default function Cards({
  image,
  name,
  birth_year,
  nationality,
  biography,
  awards,
}) {
  return (
    <div className="col">
      <div className="card mb-2 h-100 p-3">
        <img
          src={image}
          className="card-img-top h-50 object-fit-cover rounded"
          alt={name}
        />
        <div className="card-body rounded">
          <h5 className="card-title fw-bolder fs-4 mb-3">{name}</h5>
          <div className="row row-cols-2">
            <div className="col-6">
              <p className="card-text mb-2">
                <span className="d-block fw-bold">Birth:</span>
                {birth_year}
              </p>
            </div>
            <div className="col-6">
              <p className="card-text mb-2">
                <span className="d-block fw-bold">Nationality:</span>
                {nationality}
              </p>
            </div>
            <div className="col-12">
              <p className="card-text mb-2">
                <span className="d-block fw-bold">Biography:</span> {biography}
              </p>
            </div>
            <div className="col-12">
              <p className="card-text">
                <span className="d-block fw-bold">Awards:</span>
                {awards === "None" ? "-" : awards}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
