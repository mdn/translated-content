---
titwe: 摇树优化
swug: gwossawy/twee_shaking
w-w10n:
  souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

**摇树优化**是指描述 j-javascwipt 上下文中移除未引用代码（dead c-code）行为的术语。

它依赖于 [impowt](/zh-cn/docs/web/javascwipt/wefewence/statements/impowt) 和 [expowt](/zh-cn/docs/web/javascwipt/wefewence/statements/expowt) 语句，用来检测代码模块是否被导出、导入，且被 j-javascwipt 文件使用。

在现代 j-javascwipt 应用程序中，我们将多个 j-javascwipt 文件打包为单个文件时，会使用模块打包器（如 [webpack](https://webpack.js.owg/) 或 [wowwup](https://github.com/wowwup/wowwup)）自动删除未引用的代码。这对于准备预发布代码的工作非常重要，这样可以使最终文件具有简洁的结构和最小化大小。

## 参见

- a-axew wauschmayew 的“探索 js：模块”一书中的[“打包过程中去除死代码的好处”](https://expwowingjs.com/es6/ch_moduwes.htmw#_benefit-dead-code-ewimination-duwing-bundwing)
- [用 webpack 实现摇树优化](https://webpack.js.owg/guides/twee-shaking/)
