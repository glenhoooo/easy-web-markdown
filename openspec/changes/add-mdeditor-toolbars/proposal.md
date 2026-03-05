# Add MDEditor Toolbars

## Goal

Add a simple markdown toolbar to the `MDEditor` component, providing common formatting actions (e.g., Bold, Italic, Heading, Link, Lists) similar to `github/markdown-toolbar-element`.

## Context

The project currently uses CodeMirror for the editor pane, but lacks a graphical toolbar for common markdown operations, requiring users to manually type markdown syntax or rely on keyboard shortcuts. Adding a toolbar improves usability, especially for users less familiar with markdown syntax or when typing on mobile devices.

## Proposed Solution

Introduce a new simple `Toolbar` element inside the `MDEditor` component that sits above the CodeMirror instance. The toolbar will contain buttons for common formatting actions. These buttons will interact with the CodeMirror editor instance to insert formatting syntax around the current selection or at the cursor position.
