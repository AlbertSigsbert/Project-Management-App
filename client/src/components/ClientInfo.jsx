import { FaEnvelope, FaPhone, FaIdBadge } from "react-icons/fa";

function ClientInfo({ client }) {
  return (
    <>
      <div className="col-md-6">
        <div className="h-100 p-5 bg-light border rounded-3">
          <h1 className="text-center ">Client Information</h1>
          <ul className="list-group">
            <li className="list-group-item">
              <FaIdBadge className="me-2" /> {client.name}
            </li>
            <li className="list-group-item">
              <FaEnvelope  className="me-2"/> {client.email}
            </li>
            <li className="list-group-item">
              <FaPhone className="me-2" /> {client.phone}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ClientInfo;
