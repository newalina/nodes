// llmNode.js

import { Handle, Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const LLMNode = (props) => {
  const handles = [
    {
      id: "system",
      type: "target",
      position: Position.Left,
      style: { top: `${100 / 3}%` },
    },
    {
      id: "prompt",
      type: "target",
      position: Position.Left,
      style: { top: `${200 / 3}%` },
    },
    {
      id: "response",
      type: "source",
      position: Position.Right,
    },
  ];

  const labels = [
    {
      id: "description",
      type: "label",
      label: "This is an LLM",
    },
  ];

  return (
    <BaseNode {...props} nodeType="LLM" handles={handles} labels={labels} />
  );
};
