// getNodeIcon.js

import React from "react";
import InputRoundedIcon from "@mui/icons-material/InputRounded";
import OutputRoundedIcon from "@mui/icons-material/OutputRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import TextSnippetRoundedIcon from "@mui/icons-material/TextSnippetRounded";
import HttpRoundedIcon from "@mui/icons-material/HttpRounded";
import DataObjectRoundedIcon from "@mui/icons-material/DataObjectRounded";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";
import BugReportRoundedIcon from "@mui/icons-material/BugReportRounded";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";

const nodeIcons = {
  input: <InputRoundedIcon />,
  custominput: <InputRoundedIcon />,
  output: <OutputRoundedIcon />,
  customoutput: <OutputRoundedIcon />,
  llm: <AutoAwesomeRoundedIcon />,
  text: <TextSnippetRoundedIcon />,
  api: <HttpRoundedIcon />,
  condition: <DataObjectRoundedIcon />,
  filter: <FilterAltRoundedIcon />,
  log: <BugReportRoundedIcon />,
  note: <EditNoteRoundedIcon />,
};

function getNodeIcon(nodeType, fontSize) {
  const key = nodeType.toLowerCase();
  const icon = nodeIcons[key] || null;
  return icon ? React.cloneElement(icon, { fontSize }) : null;
}

export { getNodeIcon };
