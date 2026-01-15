---
title: "Null"
slug: Glossary/Null
l10n:
  sourceCommit: 8a3cafa914478bb274d649a95325c4b2dacd07cc
---

在计算机科学中，**`null`** 值表示一个不存在或无效的{{glossary("object", "对象")}}或者地址引用（通常是有意为之）。空引用的含义因语言实现而异。

在 {{Glossary("JavaScript")}}，`null` 是{{Glossary("Primitive", "原始值")}}之一，因其行为类似于一个原始值。但是，当你使用 [`typeof`](/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof) 运算符时，会返回 `"object"`。

```js
console.log(typeof null); // "object"
```

这被认为是[一个 bug](/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null)，但是无法修复，因为这会破坏太多脚本。

## 参见

- [JavaScript 数据类型](/zh-CN/docs/Web/JavaScript/Guide/Data_structures)
- JavaScript 全局对象：[`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null)
- 维基百科上的[空指针](https://zh.wikipedia.org/wiki/空指针)
- **[MDN 术语表](/zh-CN/docs/Glossary)**
  - {{Glossary("JavaScript")}}
  - {{Glossary("string")}}
  - {{Glossary("number")}}
  - {{Glossary("bigint")}}
  - {{Glossary("boolean")}}
  - {{Glossary("null")}}
  - {{Glossary("undefined")}}
  - {{Glossary("symbol")}}
