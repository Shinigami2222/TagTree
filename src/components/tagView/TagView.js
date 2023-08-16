import React, { useEffect, useState } from "react";
import classes from "./TagView.module.css";
import TagChildren from "../tagChildren/TagChildren";

function TagView({ tagData, onUpdate }) {
  const [collapsed, setCollapsed] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(tagData.name);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleNameChange = (event) => {
    setEditedName(event.target.value);
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      tagData.name = editedName;
      setIsEditing(false);
      onUpdate();
    }
  };

  const handleDataChange = (event) => {
    tagData.data = event.target.value;
    onUpdate();
  };

  const handleAddChild = () => {
    setCollapsed(false);
    if (!tagData.children) {
      tagData.children = [];
    }
    delete tagData.data;
    tagData.children.push({ name: "New Child", data: "Data" });
    onUpdate();
  };

  useEffect(() => {
    if (!tagData.children) {
      setCollapsed(false);
    }
  }, [tagData.children]);

  return (
    <div className={classes.tagView}>
      <div className={classes.titleAndButton}>
        <div className={classes.toggleAndTitle}>
          <button className={classes.toggleButton} onClick={toggleCollapsed}>
            {collapsed ? ">" : "v"}
          </button>
          <div className={classes.title} onClick={() => setIsEditing(true)}>
            {isEditing ? (
              <input
                type="text"
                value={editedName}
                onChange={handleNameChange}
                onBlur={() => setIsEditing(false)}
                onKeyDown={handleEnterKey}
                className={classes.editableNameInput}
                autoFocus
              />
            ) : (
              <p>{tagData.name}</p>
            )}
          </div>
        </div>
        <button className={classes.addButton} onClick={handleAddChild}>
          Add Child
        </button>
      </div>
      {!collapsed && tagData.children && (
        <div className={classes.tagData}>
          <TagChildren children={tagData.children} onUpdate={onUpdate} />
        </div>
      )}
      {!collapsed && !tagData.children && (
        <div className={classes.tagData}>
          <input
            type="text"
            value={tagData.data || ""}
            onChange={handleDataChange}
            placeholder="Data"
          />
        </div>
      )}
    </div>
  );
}

export default TagView;
