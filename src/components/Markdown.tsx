import React, { useState, useRef, useEffect } from "react";
import { MDEditor } from "./MDEditor";
import { MDPreview } from "./MDPreview";
import "./markdown.css";

export type MarkdownMode = "edit" | "preview" | "split";

export interface MarkdownProps {
  initialValue?: string;
  onChange?: (value: string) => void;
  mode?: MarkdownMode;
}

export function Markdown({ initialValue = "", onChange, mode = "split" }: MarkdownProps) {
  const [value, setValue] = useState(initialValue);
  const [leftWidth, setLeftWidth] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleEditorChange = (newValue: string) => {
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const startDrag = () => {
    isDragging.current = true;
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
  };

  const stopDrag = () => {
    isDragging.current = false;
    document.body.style.cursor = "";
    document.body.style.userSelect = "";
  };

  useEffect(() => {
    const onDrag = (clientX: number) => {
      if (!isDragging.current || !containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const newLeftWidth = ((clientX - containerRect.left) / containerRect.width) * 100;
      if (newLeftWidth >= 10 && newLeftWidth <= 90) {
        setLeftWidth(newLeftWidth);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging.current) {
        e.preventDefault();
        onDrag(e.clientX);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging.current) {
        onDrag(e.touches[0].clientX);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("mouseup", stopDrag);
    document.addEventListener("touchend", stopDrag);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("mouseup", stopDrag);
      document.removeEventListener("touchend", stopDrag);
      stopDrag();
    };
  }, []);

  const showEditor = mode === "edit" || mode === "split";
  const showPreview = mode === "preview" || mode === "split";

  return (
    <div className="markdown-container" ref={containerRef}>
      {showEditor && (
        <div
          className="markdown-editor-pane"
          style={mode === "split" ? { width: `${leftWidth}%`, flexShrink: 0 } : { flexGrow: 1 }}
        >
          <MDEditor value={value} onChange={handleEditorChange} />
        </div>
      )}

      {mode === "split" && (
        <div className="markdown-separator" onMouseDown={startDrag} onTouchStart={startDrag}>
          &#8942;
        </div>
      )}

      {showPreview && (
        <div className="markdown-preview-pane" style={mode === "split" ? { flexGrow: 1, width: 0 } : { flexGrow: 1 }}>
          <MDPreview value={value} />
        </div>
      )}
    </div>
  );
}
