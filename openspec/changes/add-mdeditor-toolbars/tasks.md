# Tasks: Add MDEditor Toolbars

- [x] **Create Toolbar Actions Logic:**
  - Define a set of actions representing standard markdown formatting (Heading, Bold, Italic, Quote, Code, Link, Unordered List, Ordered List, Task List).
  - Implement functions that calculate text insertion/manipulation based on the action and current selection in CodeMirror.
- [x] **Implement Toolbar UI:**
  - Create the `Toolbar` structure with buttons for each action within `MDEditor.tsx` or as a small decoupled sub-component.
  - Add minimal native CSS to `src/components/markdown.css` to style the toolbar, ensuring it is mobile-friendly (e.g., horizontal scrolling or wrapping if needed).
- [x] **Integrate with CodeMirror:**
  - Obtain the CodeMirror `EditorView` instance when it mounts.
  - Wire the toolbar buttons to dispatch transactions to the CodeMirror `EditorView` to update the editor state based on the formatting actions.
- [x] **Validation:**
  - Run local build to ensure TypeScript compilation passes.
  - Manually test each formatting action (with and without text selection) to verify correct syntax insertion.
  - Verify mobile responsiveness of the toolbar UI.
