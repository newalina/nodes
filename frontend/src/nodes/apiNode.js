// apiNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const APINode = (props) => {
  const handles = [
    {
      id: "request",
      type: "target",
      position: Position.Left,
    },
    {
      id: "response",
      type: "source",
      position: Position.Right,
    },
  ];

  const labels = [
    {
      id: "method",
      type: "select",
      label: "Method",
      options: ["GET", "POST", "PUT", "DELETE"],
    },
    {
      id: "body",
      type: "text",
      label: "Body",
    },
    {
      id: "url",
      type: "text",
      label: "URL",
    },
  ];

  return (
    <BaseNode {...props} nodeType="API" handles={handles} labels={labels} />
  );
};
