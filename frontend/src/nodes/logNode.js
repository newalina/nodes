// logNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const LogNode = (props) => {
  const handles = [
    {
      id: "message",
      type: "target",
      position: Position.Left,
    },
  ];

  const labels = [
    {
      id: "description",
      type: "label",
      label: "This is a log",
    },
  ];

  return (
    <BaseNode {...props} nodeType="Log" handles={handles} labels={labels} />
  );
};
