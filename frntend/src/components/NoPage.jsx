
import { Link } from "react-router-dom";
import "./css/NotFound.css";

function NotPage() {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="home-link">
        Go Back to Home
      </Link>
    </div>
  );
}

export default NotPage;
