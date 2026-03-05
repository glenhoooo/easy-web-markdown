## ADDED Requirements

### Requirement: Customizable Preview CSS

The library SHALL NOT bundle or auto-import any specific markdown preview CSS.
The library SHALL provide a built-in lightweight CSS file at `styles/preview.css` that consumers MAY import.
Consumers SHALL be able to use any CSS theme for the `.markdown-body` wrapper by importing their own stylesheet.

#### Scenario: Consumer uses built-in CSS

- **WHEN** consumer imports `easy-web-markdown/styles/preview.css`
- **THEN** the preview pane renders with a simple, readable default style

#### Scenario: Consumer uses github-markdown-css

- **WHEN** consumer imports `github-markdown-css/github-markdown.css` in their application
- **THEN** the preview pane renders with GitHub-flavored styling

#### Scenario: Consumer uses no CSS

- **WHEN** consumer does not import any preview CSS
- **THEN** the preview pane renders with browser defaults (unstyled `.markdown-body`)

### Requirement: Built-in CSS Export

The library SHALL export the built-in CSS file via `package.json` exports so it is accessible as `easy-web-markdown/styles/preview.css`.

#### Scenario: Import path resolves

- **WHEN** consumer references `easy-web-markdown/styles/preview.css`
- **THEN** the bundler resolves the file from the `dist/styles/` directory
