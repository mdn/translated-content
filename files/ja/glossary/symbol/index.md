---
title: Symbol(シンボル)
slug: Glossary/Symbol
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Symbol(シンボル)** とは、一意で偽造不可能な識別子を表すデータ型です。これらは _アトム_ と呼ばれることもあります。

Because a symbol is unique and unforgeable, you can only read a property value associated with a symbol if you have a reference to the original identifier.

In JavaScript, `symbol` is one of the {{Glossary("primitive", "primitive types")}} and can be created using the [`Symbol()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) factory method that returns a different symbol each time. They can be used as keys for objects which can never accidentally collide with other properties.

JavaScript also defines two other categories of symbols: well-known symbols and registered symbols. Read the {{jsxref("Symbol")}} reference for more information.

## See also

- [Data types](https://en.wikipedia.org/wiki/Data_type) on Wikipedia
- [Symbol](<https://en.wikipedia.org/wiki/Symbol_(programming)>) on Wikipedia
- The JavaScript global object {{jsxref("Symbol")}}
