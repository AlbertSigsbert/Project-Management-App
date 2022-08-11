import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { FaEdit } from "react-icons/fa";
import { GET_CLIENTS} from "../queries/clientQueries";
import { GET_PROJECT} from "../queries/projectQueries";
import  {UPDATE_PROJECT} from "../mutations/projectMutations";

function EditProjectModal({project}) {
 
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [status, setStatus] = useState("");
  const [clientId, setClientId] = useState(project.client.id);


  //Get clients for form select
  const { loading, error, data } = useQuery(GET_CLIENTS);

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables:{ id: project.id, name, description, status, clientId },
    refetchQueries: [{ query: GET_PROJECT, variables: {id:project.id }}]
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || description === "" || status === "" || clientId === "") {
      return alert("Please fill in all fields");
    }

     updateProject(name, description, status, clientId);
  };

  if (loading) return null;

  if (error) return <p>Something went wrong!</p>;
  return (
    <>
      {!loading && !error && (
        <>
          <button
            className="btn btn-info text-white"
            data-bs-toggle="modal"
            data-bs-target="#editProjectModal"
          >
            <FaEdit className="ms-2" /> Edit Project
          </button>

          <div
            className="modal fade"
            id="editProjectModal"
            aria-labelledby="editProjectModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="editProjectModalLabel">
                    Edit Project
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Description</label>
                      <textarea
                        className="form-control"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      >
                        {description}
                      </textarea>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Status</label>
                      <select
                        className="form-select"
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <option value="new">Not Started</option>
                        <option value="progress">In Progress</option>
                        <option value="done">Completed</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Client</label>
                      <select
                        className="form-select"
                        id="clientId"
                        value={clientId}
                        onChange={(e) => setClientId(e.target.value)}
                      >
                        
                        {data.clients.map((client) => (
                          <option key={client.id} value={client.id}>
                            {client.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      data-bs-dismiss="modal"
                      className="btn btn-secondary"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default EditProjectModal;
