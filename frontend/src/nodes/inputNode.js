// inputNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import { BaseNode } from "./baseNode";
import "./nodes.css";

export const InputNode = (props) => {
  const handles = [
    {
      id: "value",
      type: "source",
      position: Position.Right,
    },
  ];

  const labels = [
    {
      id: "inputName",
      type: "text",
      label: "Name",
    },
    {
      id: "inputType",
      type: "select",
      label: "Type",
      options: ["Text", "File"],
    },
  ];

  return (
    <BaseNode {...props} nodeType="Input" handles={handles} labels={labels} />
  );
};
