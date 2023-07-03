import React, {useCallback } from "react";
import "quill/dist/quill.snow.css";
import Quill from "quill";
import "./TextEditor.css";

export default function TextEditor() {
  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return;
    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    new Quill(editor,{
      theme: "snow",
      modules: {
        toolbar: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ indent: "-1" }, { indent: "+1" }],
          [{ align: [] }],
          ["link", "image"],
          ["code-block"],
          [{ color: [] }, { background: [] }],
        ],
      },
    });
  }, []);

  return <div className="container" ref={wrapperRef}></div>;
}
