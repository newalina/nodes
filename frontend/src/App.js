import { useState } from "react";
import { PipelineAppBar } from "./components/appBar";
import { PipelineToolbar } from "./components/toolbar";
import { PipelineUI } from "./components/ui";
import { SubmitButton } from "./components/submit";

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleToolbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <PipelineAppBar toggleToolbar={toggleToolbar} />
      <PipelineToolbar collapsed={collapsed} />
      <PipelineUI />
    </div>
  );
}

export default App;
