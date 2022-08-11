import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { GET_PROJECTS } from "../queries/projectQueries";
import { useMutation } from "@apollo/client";
import { DELETE_PROJECT } from "../mutations/projectMutations";

function DeleteProjectButton({ projectId }) {
  const navigate = useNavigate();

  const [ deleteProject ] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    onCompleted: () => navigate("/"),
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  

  return (
   
      <button
        className="btn btn-danger"
        onClick={deleteProject}
      >
        <FaTrash className="ms-2" /> Delete Project
      </button>
    
  );
}

export default DeleteProjectButton;
