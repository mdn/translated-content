---
title: 符号
slug: Glossary/Symbol
l10n:
  sourceCommit: 3cfbf63f7a2779fddf992863a96cb8947d407cf2
---

**符号**是表示唯一、不可伪造标识的数据类型。它们有时被称为*原子*。

由于符号是唯一且不可伪造的，因此只有当你拥有原始标识的引用时，才能读取与符号关联的属性值。

在 JavaScript 中，`symbol` 是[原始类型](/zh-CN/docs/Glossary/Primitive)之一，可以使用 [`Symbol()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol) 工厂方法创建。该方法每次返回一个不同的符号，可以用作对象的键，而永远不会与其他属性发生意外冲突。

JavaScript 还定义了两种其他类别的符号：内置通用符号和注册符号。有关更多信息，参见 {{jsxref("Symbol")}} 参考。

## 参见

- 维基百科上的[数据类型](https://zh.wikipedia.org/wiki/資料類型)
- 维基百科上的[符号](<https://en.wikipedia.org/wiki/Symbol_(programming)>)
- JavaScript 全局对象 {{jsxref("Symbol")}}
