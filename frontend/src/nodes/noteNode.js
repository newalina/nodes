// noteNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const NoteNode = (props) => {
  const handles = [];

  const labels = [
    {
      id: "text",
      type: "textarea",
      label: "Text",
    },
  ];

  return (
    <BaseNode {...props} nodeType="Note" handles={handles} labels={labels} />
  );
};
