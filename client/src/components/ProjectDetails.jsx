import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GET_PROJECT } from "../queries/projectQueries";

//Components
import Spinner from "./Spinner";
import ClientInfo from "./ClientInfo";

function ProjectDetails(props) {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id },
  });

  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong</p>;

  return (
    <>
      {!loading && !error && (
        <>
          <Link to="/" className="btn btn-sm btn-secondary mb-2 px-4 ">
            Back
          </Link>
         
          <div className="row align-items-md-stretch">
            <div className="col-md-6">
              <div className="h-100 p-5 text-bg-dark rounded-3">
                <h1 className="display-5 fw-bold">{data.project.name}</h1>
                <p className="fs-4">{data.project.description}</p>

                <p>
                  <strong>Status:</strong> {data.project.status}
                </p>
              </div>
            </div>
            <ClientInfo client={data.project.client} />
          </div>
        </>
      )}
    </>
  );
}

export default ProjectDetails;
