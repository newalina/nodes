// toolbar.js

import { DraggableNode } from "./draggableNode";
import "./components.css";

export const PipelineToolbar = ({ collapsed }) => {
  return (
    <div className={`toolbar-container ${collapsed ? "collapsed" : ""}`}>
      <div className="toolbar-items">
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="api" label="API" />
        <DraggableNode type="condition" label="Condition" />
        <DraggableNode type="filter" label="Filter" />
        <DraggableNode type="log" label="Log" />
        <DraggableNode type="note" label="Note" />
      </div>
    </div>
  );
};
