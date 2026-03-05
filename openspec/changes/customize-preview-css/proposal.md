# Change: Customize Preview CSS

## Why

Currently `MDPreview.tsx` hard-imports `github-markdown-css/github-markdown.css`, forcing all consumers to use the GitHub Markdown style. Users should be able to bring their own CSS for the preview pane.

## What Changes

- Remove the `github-markdown-css` import from `src/components/MDPreview.tsx`
- Create a lightweight built-in CSS file at `src/styles/preview.css` that provides a simple, minimal default style for the `.markdown-body` class
- Move `github-markdown-css` from `dependencies` to `devDependencies` (used only in the playground)
- Update `playground/App.tsx` to demonstrate both CSS options: the built-in `src/styles/preview.css` and `github-markdown-css/github-markdown.css`
- Export the built-in CSS via `package.json` exports so consumers can import it as `easy-web-markdown/styles/preview.css`
- Update the `tsup.config.ts` to copy the CSS file into the `dist/` output

## Impact

- Affected specs: `preview-styling` (new)
- Affected code: `src/components/MDPreview.tsx`, `src/styles/preview.css` (new), `src/components/markdown.css`, `playground/App.tsx`, `package.json`, `tsup.config.ts`
- **BREAKING**: Consumers who relied on `github-markdown-css` being auto-imported will need to explicitly import a CSS file
