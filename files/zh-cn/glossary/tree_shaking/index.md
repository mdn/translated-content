---
title: 摇树优化
slug: Glossary/Tree_shaking
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**摇树优化**是指描述 JavaScript 上下文中移除未引用代码（dead code）行为的术语。

它依赖于 [import](/zh-CN/docs/Web/JavaScript/Reference/Statements/import) 和 [export](/zh-CN/docs/Web/JavaScript/Reference/Statements/export) 语句，用来检测代码模块是否被导出、导入，且被 JavaScript 文件使用。

在现代 JavaScript 应用程序中，我们将多个 JavaScript 文件打包为单个文件时，会使用模块打包器（如 [webpack](https://webpack.js.org/) 或 [Rollup](https://github.com/rollup/rollup)）自动删除未引用的代码。这对于准备预发布代码的工作非常重要，这样可以使最终文件具有简洁的结构和最小化大小。

## 参见

- Axel Rauschmayer 的“探索 JS：模块”一书中的[“打包过程中去除死代码的好处”](https://exploringjs.com/es6/ch_modules.html#_benefit-dead-code-elimination-during-bundling)
- [用 webpack 实现摇树优化](https://webpack.js.org/guides/tree-shaking/)
