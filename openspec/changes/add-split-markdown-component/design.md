# Design: Split-Pane Markdown Component

## Architecture

The parent `Markdown` component will serve as the layout container, managing the flex or grid structure to hold the `MDEditor` and `MDPreview` components.
It will also render a draggable separator element (`div`) between them.

## State Management

- **Content State**: `markdown` (string) representing the current contents of the editor.
- **Layout State**: `leftPaneWidth` (percentage or pixels) representing the width of the editor pane. This state will update dynamically during `mousemove` or `touchmove` events when interacting with the separator.

## Third-Party Integration

- **CodeMirror**: Used in `MDEditor` for syntax highlighting and a robust text editing experience.
- **React-Markdown**: Used in `MDPreview` for rendering the markdown safely and efficiently.

## Styling and Layout

- The layout will prioritize **native CSS** using Flexbox (`display: flex`).
- The separator will use `cursor: col-resize`.
- For mobile compatibility (**Important Constraint**), the layout must handle touch events (`touchstart`, `touchmove`, `touchend`) to drag the separator smoothly.
