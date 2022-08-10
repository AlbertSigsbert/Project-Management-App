import { useQuery } from "@apollo/client";
import {GET_CLIENTS} from '../queries/clientQueries'
//components
import ClientRow from "./ClientRow";
import Spinner from "./Spinner";


function Clients(props) {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <Spinner/>
  if (error) return <p>Something went wrong</p>;

  return (
    <>
      {!loading && !error && (
        <table className="table table-striped table-hover table-sm mt-3">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Clients;
