// draggableNode.js

import { getNodeIcon } from "../utils/getNodeIcon";
import "./components.css";

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const offsetX = event.nativeEvent.offsetX || 0;
    const offsetY = event.nativeEvent.offsetY || 0;
    const appData = { nodeType, offsetX, offsetY };

    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={`draggable-node draggable-node-${type}`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      draggable
    >
      {getNodeIcon(type, "medium")}

      <span>{label}</span>
    </div>
  );
};
