# Implementation Tasks

1. [x] Create `markdown.css` with a flex container, responsive pane classes, and styling for the draggable separator (`col-resize` handle).
2. [x] Update `Markdown.tsx` to include `leftPaneWidth` state and event listeners for mouse (`mousedown`, `mousemove`, `mouseup`) and touch (`touchstart`, `touchmove`, `touchend`).
3. [x] Render `MDEditor` and `MDPreview` within `Markdown.tsx`, passing the width constraints.
4. [x] Implement `MDEditor.tsx` using `codemirror` to handle text input and trigger `onChange` callbacks.
5. [x] Implement `MDPreview.tsx` using `react-markdown` to render the parsed markdown.
6. [x] Verify the component locally via (`npm run build`) and manual test mobile responsiveness.
