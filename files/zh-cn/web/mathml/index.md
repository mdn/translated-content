---
title: MathML
slug: Web/MathML
l10n:
  sourceCommit: 6e0504e4a750ac4f495086c7aec3bfd293ad6417
---

**数学标记语言**（MathML）是一种基于 [XML](/zh-CN/docs/Web/XML) 的，用于描述数学符号的语言。

[MathML](https://w3c.github.io/mathml/) 最初被设计为用于浏览器、办公套件、[计算机代数系统](https://zh.wikipedia.org/wiki/計算機代數系統)、[EPUB](https://www.w3.org/publishing/epub33/) 阅读器和基于 [LaTeX](https://zh.wikipedia.org/wiki/LaTeX) 的生成器的通用规范。然而，这种方法并不非常适用于 Web：[专注于语义的子集](https://w3c.github.io/mathml/#contm)从未在浏览器中实现，而[专注于数学布局](https://w3c.github.io/mathml/#presm)的子集导致了不完整和不一致的浏览器实现。

[MathML Core](https://w3c.github.io/mathml-core/) 是一个基于 [LaTeX](https://zh.wikipedia.org/wiki/LaTeX) 和[开放字体格式](https://docs.microsoft.com/typography/opentype/spec/math)规则的增加了实现细节的子集。它专门为浏览器量身定制，并设计成与其他 Web 标准（包括 [HTML](/zh-CN/docs/Web/HTML)、[CSS](/zh-CN/docs/Web/CSS)、[DOM](/zh-CN/docs/Web/API/Document_Object_Model)、[JavaScript](/zh-CN/docs/Web/JavaScript)）良好配合。

以下是有关 MathML 文档、示例和工具的链接。MDN 将 [MathML Core](https://w3c.github.io/mathml-core/) 用作参考规范，但由于不稳定的标准化历史，旧版 MathML 特性可能仍会出现在现有的实现和 Web 内容中。

> [!NOTE]
> 强烈建议开发人员和作者切换到 MathML Core，或许依赖其他 Web 技术来满足缺失的用例。Math WG 正在维护一组 [MathML polyfill](https://github.com/mathml-refresh/mathml-polyfills) 以便促进这一过渡。

## MathML 参考文档

- [MathML 元素参考](/zh-CN/docs/Web/MathML/Reference/Element)
  - : MathML 元素的细节和在桌面浏览器与移动设备浏览器上的兼容性情况。
- [MathML 属性参考](/zh-CN/docs/Web/MathML/Reference/Attribute)
  - : 关于 MathML 属性的参考文档。用这些属性可以修改这些元素的显示效果。
- [MathML 例子](/zh-CN/docs/Web/MathML/Guides)
  - : 可以让你理解如何使用 MathML 的例子。
- [编写 MathML](/zh-CN/docs/Web/MathML/Guides/Authoring)
  - : 编写 MathML 的一些建议和提示，包括建议使用的编辑器以及如何将编辑器的输出集成到网页中去。
- [MathML 教程](/zh-CN/docs/Web/MathML)
  - : 对 MathML 的简要介绍。

## 从社区获得帮助

- [W3C Math 主页](https://www.w3.org/Math/)
- [在 GitHub w3c/mathml 代码库中提起议题](https://github.com/w3c/mathml/issues)
- [www-math w3.org 邮件存档](https://lists.w3.org/Archives/Public/www-math/)

## 工具

- [W3C Validator](http://validator.w3.org)
- [W3C 的 wiki 页面](https://www.w3.org/wiki/Math_Tools)

## 相关主题

- [CSS](/zh-CN/docs/Web/CSS)
- [HTML](/zh-CN/docs/Web/HTML)
- [SVG](/zh-CN/docs/Web/SVG)

## 浏览器兼容性

{{Compat}}
