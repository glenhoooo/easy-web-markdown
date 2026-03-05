# Project Context

## Purpose

A lightweight ESM React Markdown component that supports a dual-pane layout (Editing and Preview). It must be fully compatible with mobile browsers to provide a seamless editing experience across devices.

## Tech Stack

- React
- TypeScript
- Vite (for development) & tsup (for building)
- CodeMirror (for the Editor pane)
- react-markdown (for the Preview pane)

## Project Conventions

### Code Style

- Strict adherence to ESLint and Prettier for code formatting.
- Styling is implemented using native CSS to keep the package as lightweight as possible without introducing complex styling frameworks.
- Follow standard React component naming conventions (PascalCase for files and components).

### Architecture Patterns

- **Decoupled Components**: The `Editor` and `Preview` panes are completely decoupled as distinct sub-components. The parent component orchestrates state management by passing down the raw markdown string and handling update callbacks, ensuring clean separation of concerns.
- **Third-Party Prioritization**: Prefer using established third-party libraries (like CodeMirror and react-markdown) to ensure stability while minimizing custom footprint.

### Testing Strategy

- Currently, automated testing is not a hard requirement. The primary verification metric is that the project successfully compiles and passes `npm run build` locally. Test files are optional until specifically required later.

### Git Workflow

- Standard feature-branch workflow. (Can be customized via further specification)

## Domain Context

This library is designed for contexts where rapid markdown ingestion and immediate visual feedback are necessary on varying screen sizes, specifically emphasizing fluid mobile interactions.

## Important Constraints

- Project dependencies must be strictly limited to keep the final bundle extremely lightweight.
- The component _must_ render and interact smoothly on mobile web browsers without UI layout breakpoints failing.

## External Dependencies

- `react-markdown` (Markdown rendering)
- `codemirror` (Code editing)
