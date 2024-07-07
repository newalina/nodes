// outputNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import { BaseNode } from "./baseNode";
import "./nodes.css";

export const OutputNode = (props) => {
  const handles = [
    {
      id: "value",
      type: "target",
      position: Position.Left,
    },
  ];

  const labels = [
    {
      id: "outputName",
      type: "text",
      label: "Name",
    },
    {
      id: "outputType",
      type: "select",
      label: "Type",
      options: ["Text", "File"],
    },
  ];

  return (
    <BaseNode {...props} nodeType="Output" handles={handles} labels={labels} />
  );
};
