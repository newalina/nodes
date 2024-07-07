// toolbar.js

import { SubmitButton } from "./submit";
import { IconButton } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import "./components.css";
import { useState } from "react";

export const PipelineAppBar = ({ toggleToolbar }) => {
  const [name, setName] = useState("Pipeline X");

  return (
    <div className="app-bar-container">
      <div className="app-bar">
        <div className="app-left">
          <IconButton onClick={toggleToolbar} sx={{ color: "white" }}>
            <MenuRoundedIcon />
          </IconButton>
          <img
            className="logo"
            alt="Logo"
            src="https://ci3.googleusercontent.com/meips/ADKq_Nb67z_m1zHPz4fUpYZqro-ZIbbAJPbvq-qvEAj8KbHgxw7SUOZPl3RdeoqKAs4F86nvAadaM4wjWc-f5suVNna9XdTLqtpaX9XbViW4YO7nokfmvqYqpYV81JEAW5JNm7x3_rBNjkdTSuChjOPJ-gkNmdMNua8ElmjW76I_eZpZ=s0-d-e1-ft#https://sawa-dev-2-storage-bucket.storage.googleapis.com/profiles/8513b84d-8891-413d-becc-b5917767b076.png"
          />
        </div>
        <div
          className="pipeline-name"
          contenteditable="true"
          onInput={(e) => setName(e.target.innerText)}
        >
          Pipeline X
        </div>
        <SubmitButton />
      </div>
    </div>
  );
};
