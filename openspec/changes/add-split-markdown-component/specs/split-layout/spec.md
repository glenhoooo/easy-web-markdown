# Capability: Split-Pane Markdown Layout

## ADDED Requirements

### Requirement: Dual-Pane Layout

The Markdown component MUST render a dual-pane layout consisting of an editor pane on the left and a preview pane on the right.

#### Scenario: Basic Rendering

- Given a user renders the Markdown component
- Then the component displays the MDEditor and MDPreview side-by-side.

### Requirement: Draggable Separator

The layout MUST include a draggable separator between the two panes that allows users to adjust their relative widths.

#### Scenario: Adjusting Width via Mouse

- Given a dual-pane layout is visible on a desktop
- When the user clicks and drags the separator horizontally
- Then the width ratio of the editor and preview panes updates dynamically.

### Requirement: Mobile Touch Support

The draggable separator MUST support touch events to function correctly on mobile web browsers.

#### Scenario: Adjusting Width via Touch

- Given a user views the component on a mobile device
- When they touch and drag the separator
- Then the pane widths update smoothly without UI breakage.
