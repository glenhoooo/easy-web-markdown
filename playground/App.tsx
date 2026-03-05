import React, { useState, useEffect } from "react";
import { Markdown } from "../src";
import "../src/styles/preview.css";
// import "github-markdown-css/github-markdown.css";

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(() => window.matchMedia(`(max-width: ${breakpoint}px)`).matches);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [breakpoint]);

  return isMobile;
}

export default function App() {
  const isMobile = useIsMobile();
  const content = `# Hello World

This is **easy-web-markdown**.`;
  return (
    <div style={{ padding: "0 20px" }}>
      <h1>Playground</h1>
      <div style={{ height: "800px" }}>
        <Markdown initialValue={content} mode={isMobile ? "edit" : "split"} />
      </div>
    </div>
  );
}
