import { defineConfig } from "tsup";

export default defineConfig({
  // 打包入口文件
  entry: ["src/index.ts"],

  // 输出格式：cjs (CommonJS, 供传统 Node/Webpack 使用) 和 esm (ES Modules, 供现代打包工具使用)
  format: ["cjs", "esm"],

  // 是否生成 TypeScript 声明文件 (.d.ts)
  dts: true,

  // 是否生成 sourcemap，方便使用者在调试时看到你的源码
  sourcemap: true,

  // 每次打包前清空 dist 目录
  clean: true,

  // 外部依赖：不将这些库打包进产物中，而是让使用者自己提供
  external: ["react", "react-dom"],

  // 压缩代码 (如果是发布正式版，可以设为 true；为了调试，这里先保持 false 或者按环境判断)
  minify: false,

  // 将样式文件复制到 dist 目录
  onSuccess: "cp -r src/styles dist/styles",
});
