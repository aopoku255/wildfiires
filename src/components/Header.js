import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";
import fire from "../assets/fireicon.png";

const Header = () => {
  return (
    <header className="header">
      <img src={fire} alt="" width={30} />
      <h6 style={{ marginLeft: "10px" }}>Wildfire Tracker Mini Project</h6>
    </header>
  );
};

export default Header;
