import { useStore } from "../store";
import { shallow } from "zustand/shallow";
import { useAlert } from "./alert";
import { IconButton } from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import "./components.css";

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);
  const { setAlert } = useAlert();

  const handleSubmit = async () => {
    try {
      console.log("Submitting pipeline data:", { nodes, edges });

      const response = await fetch("http://localhost:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nodes: nodes,
          edges: edges,
        }),
      });

      if (!response.ok) {
        setAlert({
          severity: "error",
          message: "Failed to submit pipeline data",
        });
      }

      const data = await response.json();

      console.log("Pipeline data parsed: ", data);

      setAlert({
        severity: "success",
        message: `You created ${data.num_nodes} nodes and ${
          data.num_edges
        } edges.
        Your pipeline is${data.is_dag ? "" : " not"} a directed acyclic graph.
        `,
      });
    } catch (error) {
      console.error("Error submitting pipeline data:", error);

      setAlert({
        severity: "error",
        message: `Error submitting pipeline data: ${error.message}`,
      });
    }
  };
  return (
    <IconButton onClick={handleSubmit} sx={{ color: "white" }}>
      <SendRoundedIcon />
    </IconButton>
  );
};
