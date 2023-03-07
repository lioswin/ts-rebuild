import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <Link to="about">About us</Link>
        </li>
        <li>
          <Link to="work">Our works</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;

// make this component use Link and routes  instead of a tags