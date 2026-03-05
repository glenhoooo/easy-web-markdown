import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // 将 Vite 的根目录指向 playground
  // 这样运行 `npm run dev` 时，Vite 会自动去寻找 playground/index.html
  root: "./playground",

  server: {
    port: 3000,
    open: true, // 启动时自动在浏览器中打开
  },

  // 可选：如果你想在 playground 中使用绝对路径引入 src，可以配置 alias
  // 例如：import Markdown from '@/'
  resolve: {
    alias: {
      "@": "/../src",
    },
  },
});
