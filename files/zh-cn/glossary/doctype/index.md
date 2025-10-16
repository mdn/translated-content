---
title: 文档类型声明
slug: Glossary/Doctype
l10n:
  sourceCommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

在 {{Glossary("HTML")}} 中，**文档类型声明**是必要的。在所有文档的头部，你都将会看到“`<!DOCTYPE html>`”序言。这个声明的目的是防止浏览器在渲染文档时，切换到我们称为[“怪异模式”](/zh-CN/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)的渲染模式。“`<!DOCTYPE html>`”确保浏览器按照最佳的相关规范进行渲染，而不是使用一个不符合规范的渲染模式。

## 参见

- [HTML 规范中的 DOCTYPE 定义](https://html.spec.whatwg.org/multipage/syntax.html#the-doctype)
- [怪异模式与标准模式](/zh-CN/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)
- [Document.doctype](/zh-CN/docs/Web/API/Document/doctype)，返回文档类型声明的 JavaScript 方法
