import React, { useState } from "react";

import TagView from "./components/tagView/TagView";
import "./App.css";

const initialTree = {
  name: "Root",
  data: "",
  // children: [
  //   {
  //     name: "Child",
  //     data: "",
  //   },
  // ],
};

function App() {
  const [tree, setTree] = useState(initialTree);

  const updateTree = () => {
    setTree({ ...tree });
  };

  return (
    <div className="App">
      <a
        href={`data:text/json;charset=utf-8,${encodeURIComponent(
          JSON.stringify(tree, null, 2)
        )}`}
        download="tree.json"
        className="export-button"
      >
        Export
      </a>
      <TagView tagData={tree} onUpdate={updateTree} />
    </div>
  );
}

export default App;
