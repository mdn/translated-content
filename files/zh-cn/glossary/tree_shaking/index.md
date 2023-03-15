---
title: Tree shaking
slug: Glossary/Tree_shaking
---

**Tree shaking** 是一个通常用于描述移除 JavaScript 上下文中的未引用代码 (dead-code) 行为的术语。

它依赖于 ES2015 中的 [import](/zh-CN/docs/Web/JavaScript/Reference/Statements/import) 和 [export](/zh-CN/docs/Web/JavaScript/Reference/Statements/export) 语句，用来检测代码模块是否被导出、导入，且被 JavaScript 文件使用。

在现代 JavaScript 应用程序中，我们使用模块打包 (如[webpack](https://webpack.js.org/)或[Rollup](https://github.com/rollup/rollup)) 将多个 JavaScript 文件打包为单个文件时自动删除未引用的代码。这对于准备预备发布代码的工作非常重要，这样可以使最终文件具有简洁的结构和最小化大小。

## 了解更多

#### 常识

- ["捆绑过程中死代码消除的好处"](https://exploringjs.com/es6/ch_modules.html#_benefit-dead-code-elimination-during-bundling) 在 Axel Rauschmayer 的书中:“探索 JS:模块”

#### 技术参数资料

- [用 webpack 实现 Tree shaking](https://webpack.js.org/guides/tree-shaking/)
