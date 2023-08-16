import React from "react";
import classes from "./TagChildren.module.css";
import TagView from "../tagView/TagView";

function TagChildren({ children, onUpdate }) {
  return (
    <div className={classes.childrenContainer}>
      {children.map((child, index) => (
        <TagView key={index} tagData={child} onUpdate={onUpdate} />
      ))}
    </div>
  );
}

export default TagChildren;
