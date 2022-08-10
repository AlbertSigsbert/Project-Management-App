import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound(props) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <FaExclamationTriangle className="text-danger" size="5em" />

      <h1 className="fs-1 lead">404</h1>
      <p>Sorry, this page does NOT exist</p>

      <Link to="/" className="btn btn-primary">
        Return to Homepage
      </Link>
    </div>
  );
}

export default NotFound;
