// conditionNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const ConditionNode = (props) => {
  const handles = [
    {
      id: "value",
      type: "target",
      position: Position.Left,
    },
    {
      id: "true",
      type: "source",
      position: Position.Right,
    },
    {
      id: "false",
      type: "source",
      position: Position.Right,
    },
  ];

  const labels = [
    {
      id: "condition",
      type: "text",
      label: "Condition",
    },
  ];

  return (
    <BaseNode
      {...props}
      nodeType="Condition"
      handles={handles}
      labels={labels}
    />
  );
};
