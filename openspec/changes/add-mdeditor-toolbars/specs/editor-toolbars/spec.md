# Editor Toolbars

## ADDED Requirements

### Requirement: Display Toolbar

The MDEditor MUST display a toolbar containing buttons or icons for common markdown formatting actions above the text area.

#### Scenario: View Toolbar

The user renders the layout component and sees a row of formatting buttons (e.g., Bold, Italic, Heading, Link, Quote, Code, Lists).

### Requirement: Apply Formatting to Selection

Clicking a toolbar button MUST apply the corresponding markdown syntax to the current selection in the editor.

#### Scenario: Bold Selected Text

The user selects "text", clicks the "Bold" button, and the editor content updates to "**text**" with the selection maintained or wrapped.

### Requirement: Insert Formatting without Selection

Clicking a toolbar button without a selection MUST insert the corresponding markdown syntax at the cursor position.

#### Scenario: Insert Heading

The user places the cursor in an empty line, clicks the "Heading" button, and the editor inserts "### " (or similar heading syntax) and places the cursor right after it.

### Requirement: Mobile Friendly Styling

The toolbar MUST be styled minimally using native CSS, adhering to project conventions and ensuring fluid mobile interaction.

#### Scenario: View on Mobile

The user views the editor on a mobile device and the toolbar buttons accommodate the smaller screen size smoothly without breaking the layout.
