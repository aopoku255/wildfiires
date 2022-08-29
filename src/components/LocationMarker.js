import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";
import fire from "../assets/fireicon.png";

const LocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <img src={fire} alt="" width={20} icon={locationIcon} />
    </div>
  );
};

export default LocationMarker;
