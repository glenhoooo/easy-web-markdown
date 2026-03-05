## 1. Implementation

- [x] 1.1 Remove `import "github-markdown-css/github-markdown.css"` from `src/components/MDPreview.tsx`
- [x] 1.2 Create `src/styles/preview.css` with a simple default `.markdown-body` style
- [x] 1.3 Update `src/components/markdown.css` to remove `.markdown-body`-specific overrides that assume github-markdown-css
- [x] 1.4 Move `github-markdown-css` from `dependencies` to `devDependencies` in `package.json`
- [x] 1.5 Add `exports` entry for `./styles/preview.css` in `package.json`
- [x] 1.6 Update `tsup.config.ts` to copy `src/styles/` into `dist/styles/`
- [x] 1.7 Update `playground/App.tsx` to import `github-markdown-css/github-markdown.css` (demonstrating external CSS usage)

## 2. Verification

- [x] 2.1 Run `pnpm typecheck` — no errors
- [x] 2.2 Run `pnpm build` — CSS file present in `dist/styles/`
- [x] 2.3 Run `pnpm dev` and visually confirm the playground preview pane renders correctly
