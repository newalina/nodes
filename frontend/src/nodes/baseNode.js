// baseNode.js

import { useState, useRef, useEffect } from "react";
import { Handle, Position } from "reactflow";
import { useStore } from "../store";
import { getNodeIcon } from "../utils/getNodeIcon";
import "./nodes.css";

export const BaseNode = ({ id, data, nodeType, handles, labels }) => {
  const [nodeData, setNodeData] = useState(data);
  const [textContent, setTextContent] = useState("");
  const [variableHandles, setVariableHandles] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const nodeRef = useRef(null);
  const textAreaRef = useRef(null);

  const { activeNode, setActiveNode } = useStore((state) => ({
    activeNode: state.activeNode,
    setActiveNode: state.setActiveNode,
  }));

  useEffect(() => {
    setIsActive(activeNode === id);
  }, [activeNode]);

  useEffect(() => {
    if (textAreaRef.current && nodeRef.current) {
      textAreaRef.current.style.height = "inherit";
      textAreaRef.current.style.width = "inherit";

      textAreaRef.current.style.height = `${Math.min(
        Math.max(textAreaRef.current.scrollHeight, 32),
        200
      )}px`;
      textAreaRef.current.style.width = `${Math.min(
        textAreaRef.current.scrollHeight + 104,
        228
      )}px`;

      nodeRef.current.style.height = "inherit";
      nodeRef.current.style.width = "inherit";

      nodeRef.current.style.height = `${Math.min(
        Math.max(textAreaRef.current.scrollHeight + 51, 83),
        256
      )}px`;
      nodeRef.current.style.width = `${Math.min(
        nodeRef.current.scrollHeight + 69,
        254
      )}px`;
    }

    const regex = /\{\{\s*(.*?)\s*\}\}/g;
    const matches = textContent.matchAll(regex);
    const newHandles = Array.from(matches, (match) => ({
      id: match[1],
      type: "target",
      position: Position.Left,
      style: { top: `${(100 / (matches.length + 1)) * (handles.length + 1)}%` },
    }));
    setVariableHandles(newHandles);
  }, [textContent]);

  const handleDataChange = (key) => (e) => {
    setNodeData((prevData) => ({ ...prevData, [key]: e.target.value }));
  };

  const handleClick = (event) => {
    event.stopPropagation();
    setActiveNode(id);
  };

  return (
    <div
      className={`node ${isActive ? "active" : ""}`}
      ref={nodeRef}
      onClick={handleClick}
    >
      <div>
        <span className="node-header">
          {getNodeIcon(nodeType, "small")}
          {nodeType}
        </span>
      </div>

      {variableHandles.map((handle) => (
        <Handle
          key={handle.id}
          id={`${id}-${handle.id}`}
          className="handle"
          type={handle.type}
          position={handle.position}
          style={{ ...handle.style }}
        />
      ))}

      {handles.map((handle) => (
        <Handle
          key={handle.id}
          id={`${id}-${handle.id}`}
          className="handle"
          type={handle.type}
          position={handle.position}
          style={handle.style}
        />
      ))}

      {labels.map((label) => (
        <label key={label.id} className="node-body">
          {label.label}
          {label.type === "select" ? (
            <select
              className={`node-label ${label.type}`}
              value={nodeData[label.id] || ""}
              onChange={handleDataChange(label.id)}
            >
              {label.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : label.type === "textarea" ? (
            <textarea
              className={`node-label ${label.type}`}
              ref={textAreaRef}
              value={textContent}
              onChange={(e) => setTextContent(e.target.value)}
            ></textarea>
          ) : label.type === "label" ? (
            <label key={label.id} />
          ) : (
            <input
              className={`node-label ${label.type}`}
              type={label.type}
              value={nodeData[label.id] || ""}
              onChange={handleDataChange(label.id)}
            ></input>
          )}
        </label>
      ))}
    </div>
  );
};
