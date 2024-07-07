// textNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import { BaseNode } from "./baseNode";
import "./nodes.css";

export const TextNode = (props) => {
  const handles = [
    {
      id: "output",
      type: "source",
      position: Position.Right,
    },
  ];

  const labels = [
    {
      id: "text",
      type: "textarea",
      label: "Text",
    },
  ];

  return (
    <BaseNode {...props} nodeType="Text" handles={handles} labels={labels} />
  );
};
