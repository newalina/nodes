// filterNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const FilterNode = (props) => {
  const handles = [
    {
      id: "input",
      type: "target",
      position: Position.Left,
    },
    {
      id: "output",
      type: "source",
      position: Position.Right,
    },
  ];

  const labels = [
    {
      id: "condition",
      type: "text",
      label: "If",
    },
    {
      id: "condition",
      type: "text",
      label: "Then",
    },
    {
      id: "condition",
      type: "text",
      label: "Else",
    },
  ];

  return (
    <BaseNode {...props} nodeType="Filter" handles={handles} labels={labels} />
  );
};
