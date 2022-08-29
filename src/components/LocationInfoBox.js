const LocationInfoBox = ({ info }) => {
  return (
    <div className="location-info">
      <div style={{ margin: "0 1rem" }}>
        <h3>Event Location Info</h3>
        <ul>
          <li>
            ID: <b>{info.id}</b>
          </li>
          <li>
            TITLE: <b>{info.title}</b>
          </li>
          <li>
            DATE: <b>{info.date}</b>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LocationInfoBox;
